figma.showUI(__html__, { width: 400, height: 600 });

// Listen for selection changes
figma.on('selectionchange', () => {
  const selection = figma.currentPage.selection;
  
  // Check if exactly one frame is selected
  if (selection.length === 1 && selection[0].type === 'FRAME') {
    const frame = selection[0];
    
    // Try to extract configuration from frame name
    const match = frame.name.match(/\[rampensau\|(.+)\]$/);
    if (match) {
      // Parse the compact encoded values
      const values = match[1].split('|');
      if (values.length === 15) {
        const config: ColorPaletteConfig = {
          total: parseInt(values[0]),
          hStart: parseFloat(values[1]),
          hCycles: parseFloat(values[2]),
          hStartCenter: parseFloat(values[3]),
          minLight: parseFloat(values[4]),
          maxLight: parseFloat(values[5]),
          minSaturation: parseFloat(values[6]),
          maxSaturation: parseFloat(values[7]),
          easingMode: values[8] as 'individualAxis' | 'slCurve',
          easingH: values[9],
          easingS: values[10],
          easingL: values[11],
          easingCurve: values[12],
          transformFn: values[13],
          colorMode: values[14]
        };
        
        // Send configuration to UI
        figma.ui.postMessage({
          type: 'load-config',
          config: config
        });
      }
    }
  }
});

interface ColorPaletteConfig {
  total: number;
  hStart: number;
  hCycles: number;
  hStartCenter: number;
  minLight: number;
  maxLight: number;
  minSaturation: number;
  maxSaturation: number;
  easingMode: 'individualAxis' | 'slCurve';
  easingH: string;
  easingS: string;
  easingL: string;
  easingCurve: string;
  transformFn: string;
  colorMode: string;
}

figma.ui.onmessage = async (msg: { type: string, config?: ColorPaletteConfig }) => {
  if (msg.type === 'generate-palette' && msg.config) {
    const colors = generateColorPalette(msg.config);
    
    const frame = figma.createFrame();
    // Store the configuration in the frame name as a compact encoded string
    const configString = [
      msg.config.total,
      msg.config.hStart,
      msg.config.hCycles,
      msg.config.hStartCenter,
      msg.config.minLight,
      msg.config.maxLight,
      msg.config.minSaturation,
      msg.config.maxSaturation,
      msg.config.easingMode,
      msg.config.easingH,
      msg.config.easingS,
      msg.config.easingL,
      msg.config.easingCurve,
      msg.config.transformFn,
      msg.config.colorMode
    ].join('|');
    frame.name = `Color Palette [rampensau|${configString}]`;
    frame.layoutMode = 'HORIZONTAL';
    frame.primaryAxisSizingMode = 'AUTO';
    frame.counterAxisSizingMode = 'AUTO';
    frame.itemSpacing = 0;
    frame.paddingLeft = 0;
    frame.paddingRight = 0;
    frame.paddingTop = 0;
    frame.paddingBottom = 0;
    
    colors.forEach((color, index) => {
      const rect = figma.createRectangle();
      rect.name = `Color ${index + 1}`;
      rect.resize(60, 120);
      rect.fills = [{
        type: 'SOLID',
        color: {
          r: color.r / 255,
          g: color.g / 255,
          b: color.b / 255
        }
      }];
      frame.appendChild(rect);
    });
    
    figma.currentPage.appendChild(frame);
    figma.currentPage.selection = [frame];
    figma.viewport.scrollAndZoomIntoView([frame]);
    
    figma.ui.postMessage({ type: 'palette-generated' });
  }
  
  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};

// OKLCH conversion functions
function oklchToRgb(l: number, c: number, h: number): { r: number, g: number, b: number } {
  // Clamp inputs to valid ranges
  l = Math.max(0, Math.min(1, l));
  c = Math.max(0, c);
  h = h % 360;
  if (h < 0) h += 360;
  
  // Convert OKLCH to OKLab
  const hRad = h * Math.PI / 180;
  const a = c * Math.cos(hRad);
  const b = c * Math.sin(hRad);
  
  // OKLab to linear RGB
  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 1.2914855480 * b;
  
  const l3 = l_ * l_ * l_;
  const m3 = m_ * m_ * m_;
  const s3 = s_ * s_ * s_;
  
  const r = 4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3;
  const g = -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3;
  const b_ = -0.0041960863 * l3 - 0.7034186147 * m3 + 1.7076147010 * s3;
  
  // Apply gamma correction and clamp
  const gammaCorrect = (channel: number) => {
    channel = Math.max(0, channel); // Clamp negative values
    if (channel <= 0.0031308) {
      return 12.92 * channel;
    }
    return 1.055 * Math.pow(channel, 1 / 2.4) - 0.055;
  };
  
  return {
    r: Math.round(Math.max(0, Math.min(255, gammaCorrect(r) * 255))),
    g: Math.round(Math.max(0, Math.min(255, gammaCorrect(g) * 255))),
    b: Math.round(Math.max(0, Math.min(255, gammaCorrect(b_) * 255)))
  };
}

// RYBitten conversion functions
function hslToRyb(h: number, s: number, l: number): { r: number, y: number, b: number } {
  // First convert HSL to RGB
  const rgb = hslToRgb(h, s, l);
  
  // Then RGB to RYB using simplified conversion
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  
  // Remove white
  const w = Math.min(r, g, b);
  const r1 = r - w;
  const g1 = g - w;
  const b1 = b - w;
  
  const mg = Math.max(r1, g1, b1);
  
  // Get yellow
  let y = Math.min(r1, g1);
  let ry = r1 - y;
  let gy = g1 - y;
  
  // Get blue
  let by = b1;
  
  // Normalize
  if (by > 0 && gy > 0) {
    by /= 2;
    gy /= 2;
  }
  
  // Redistribute
  ry += gy;
  by += gy;
  
  // Normalize to max
  const max = Math.max(ry, y, by);
  if (max > 0) {
    const n = mg / max;
    ry *= n;
    y *= n;
    by *= n;
  }
  
  // Add white back
  ry += w;
  y += w;
  by += w;
  
  return { r: ry, y: y, b: by };
}

function rybToRgb(r: number, y: number, b: number): { r: number, g: number, b: number } {
  // RYB to RGB using trilinear interpolation
  // Corner values for RYB to RGB mapping
  const corners = [
    [1, 1, 1],     // white
    [1, 0, 0],     // red
    [1, 1, 0],     // yellow
    [1, 0.5, 0],   // orange
    [0, 0, 1],     // blue
    [0.5, 0, 0.5], // purple
    [0, 1, 0],     // green
    [0, 0, 0]      // black
  ];
  
  // Trilinear interpolation
  const c00 = [
    corners[0][0] * (1 - r) + corners[1][0] * r,
    corners[0][1] * (1 - r) + corners[1][1] * r,
    corners[0][2] * (1 - r) + corners[1][2] * r
  ];
  
  const c01 = [
    corners[2][0] * (1 - r) + corners[3][0] * r,
    corners[2][1] * (1 - r) + corners[3][1] * r,
    corners[2][2] * (1 - r) + corners[3][2] * r
  ];
  
  const c10 = [
    corners[4][0] * (1 - r) + corners[5][0] * r,
    corners[4][1] * (1 - r) + corners[5][1] * r,
    corners[4][2] * (1 - r) + corners[5][2] * r
  ];
  
  const c11 = [
    corners[6][0] * (1 - r) + corners[7][0] * r,
    corners[6][1] * (1 - r) + corners[7][1] * r,
    corners[6][2] * (1 - r) + corners[7][2] * r
  ];
  
  const c0 = [
    c00[0] * (1 - y) + c01[0] * y,
    c00[1] * (1 - y) + c01[1] * y,
    c00[2] * (1 - y) + c01[2] * y
  ];
  
  const c1 = [
    c10[0] * (1 - y) + c11[0] * y,
    c10[1] * (1 - y) + c11[1] * y,
    c10[2] * (1 - y) + c11[2] * y
  ];
  
  const c = [
    c0[0] * (1 - b) + c1[0] * b,
    c0[1] * (1 - b) + c1[1] * b,
    c0[2] * (1 - b) + c1[2] * b
  ];
  
  return {
    r: Math.round(Math.max(0, Math.min(255, c[0] * 255))),
    g: Math.round(Math.max(0, Math.min(255, c[1] * 255))),
    b: Math.round(Math.max(0, Math.min(255, c[2] * 255)))
  };
}

function generateColorPalette(config: ColorPaletteConfig): { r: number, g: number, b: number }[] {
  const colors: { r: number, g: number, b: number }[] = [];
  
  for (let i = 0; i < config.total; i++) {
    const t = i / (config.total - 1);
    
    let hue: number;
    let saturation: number;
    let lightness: number;
    
    if (config.easingMode === 'individualAxis') {
      const easedT_h = applyEasing(t, config.easingH);
      const easedT_s = applyEasing(t, config.easingS);
      const easedT_l = applyEasing(t, config.easingL);
      
      const hueRange = config.hCycles * 360;
      const hueOffset = config.hStart + (easedT_h - config.hStartCenter) * hueRange;
      hue = (hueOffset + 360) % 360;
      
      saturation = config.minSaturation + easedT_s * (config.maxSaturation - config.minSaturation);
      lightness = config.minLight + easedT_l * (config.maxLight - config.minLight);
    } else {
      const easedT = applyEasing(t, config.easingCurve);
      
      const hueRange = config.hCycles * 360;
      const hueOffset = config.hStart + (easedT - config.hStartCenter) * hueRange;
      hue = (hueOffset + 360) % 360;
      
      saturation = config.minSaturation + easedT * (config.maxSaturation - config.minSaturation);
      lightness = config.minLight + easedT * (config.maxLight - config.minLight);
    }
    
    let rgb: { r: number, g: number, b: number };
    if (config.colorMode === 'oklch') {
      rgb = oklchToRgb(lightness / 100, saturation / 100 * 0.4, hue);
    } else if (config.colorMode === 'rybitten') {
      // Convert HSL to RYB space
      const ryb = hslToRyb(hue / 360, saturation / 100, lightness / 100);
      rgb = rybToRgb(ryb.r, ryb.y, ryb.b);
    } else {
      rgb = hslToRgb(hue / 360, saturation / 100, lightness / 100);
    }
    
    const transformedRgb = applyTransform(rgb, config.transformFn, hue);
    colors.push(transformedRgb);
  }
  
  return colors;
}

function applyEasing(t: number, easingType: string): number {
  switch (easingType) {
    case 'linear': return t;
    case 'easeInSine': return 1 - Math.cos((t * Math.PI) / 2);
    case 'easeOutSine': return Math.sin((t * Math.PI) / 2);
    case 'easeInOutSine': return -(Math.cos(Math.PI * t) - 1) / 2;
    case 'easeInQuad': return t * t;
    case 'easeOutQuad': return 1 - (1 - t) * (1 - t);
    case 'easeInOutQuad': return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    case 'easeInCubic': return t * t * t;
    case 'easeOutCubic': return 1 - Math.pow(1 - t, 3);
    case 'easeInOutCubic': return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    case 'easeInQuart': return t * t * t * t;
    case 'easeOutQuart': return 1 - Math.pow(1 - t, 4);
    case 'easeInOutQuart': return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
    case 'easeInQuint': return t * t * t * t * t;
    case 'easeOutQuint': return 1 - Math.pow(1 - t, 5);
    case 'easeInOutQuint': return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
    case 'easeInExpo': return t === 0 ? 0 : Math.pow(2, 10 * t - 10);
    case 'easeOutExpo': return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    case 'easeInOutExpo': return t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2;
    case 'easeInCirc': return 1 - Math.sqrt(1 - Math.pow(t, 2));
    case 'easeOutCirc': return Math.sqrt(1 - Math.pow(t - 1, 2));
    case 'easeInOutCirc': return t < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2;
    default: return t;
  }
}

function hslToRgb(h: number, s: number, l: number): { r: number, g: number, b: number } {
  let r, g, b;
  
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}

function harveyHue(h: number): number {
  // Harvey Hue transformation to create more evenly distributed spectrum
  // Based on Harvey Rayner's work, adapted for RampenSau
  const hNorm = h % 1;
  let hTransformed: number;
  
  if (hNorm < 0.0833) {
    hTransformed = hNorm * 0.5 / 0.0833;
  } else if (hNorm < 0.1667) {
    hTransformed = 0.5 + (hNorm - 0.0833) * 0.5 / 0.0833;
  } else if (hNorm < 0.5) {
    hTransformed = 1 + (hNorm - 0.1667) * 2 / 0.3333;
  } else if (hNorm < 0.8333) {
    hTransformed = 3 + (hNorm - 0.5) * 2 / 0.3333;
  } else {
    hTransformed = 5 + (hNorm - 0.8333) * 1 / 0.1667;
  }
  
  return (hTransformed / 6) % 1;
}

function rgbToHsl(r: number, g: number, b: number): { h: number, s: number, l: number } {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h: number = 0;
  let s: number = 0;
  const l = (max + min) / 2;
  
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  
  return { h, s, l };
}

function applyTransform(rgb: { r: number, g: number, b: number }, transformFn: string, originalHue?: number): { r: number, g: number, b: number } {
  switch (transformFn) {
    case 'harveyHue':
      // Convert back to HSL, apply Harvey Hue, then back to RGB
      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
      const transformedHue = harveyHue((originalHue || 0) / 360);
      return hslToRgb(transformedHue, hsl.s, hsl.l);
    case 'muted':
      return {
        r: Math.round(rgb.r * 0.8),
        g: Math.round(rgb.g * 0.8),
        b: Math.round(rgb.b * 0.8)
      };
    case 'pastel':
      return {
        r: Math.round(rgb.r * 0.7 + 255 * 0.3),
        g: Math.round(rgb.g * 0.7 + 255 * 0.3),
        b: Math.round(rgb.b * 0.7 + 255 * 0.3)
      };
    case 'none':
    default:
      return rgb;
  }
}