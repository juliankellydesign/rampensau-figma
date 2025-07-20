import { ryb2rgb } from 'rybitten';
import { cubes } from 'rybitten/cubes';

// Define a custom neutral gamut based on Hett but with 30% gray mixed in
// This creates a more muted version that respects saturation settings better
const neutralIttenCube = [
  [255/255, 255/255, 255/255],  // white - pure white like Hett
  [218/255 * 0.7 + 128/255 * 0.3, 105/255 * 0.7 + 128/255 * 0.3, 104/255 * 0.7 + 128/255 * 0.3],  // red mixed with gray
  [255/255 * 0.7 + 128/255 * 0.3, 244/255 * 0.7 + 128/255 * 0.3, 122/255 * 0.7 + 128/255 * 0.3],  // yellow mixed with gray
  [232/255 * 0.7 + 128/255 * 0.3, 154/255 * 0.7 + 128/255 * 0.3, 113/255 * 0.7 + 128/255 * 0.3],  // orange mixed with gray
  [73/255 * 0.7 + 128/255 * 0.3, 138/255 * 0.7 + 128/255 * 0.3, 186/255 * 0.7 + 128/255 * 0.3],   // blue mixed with gray
  [97/255 * 0.7 + 128/255 * 0.3, 96/255 * 0.7 + 128/255 * 0.3, 178/255 * 0.7 + 128/255 * 0.3],    // violet mixed with gray
  [144/255 * 0.7 + 128/255 * 0.3, 191/255 * 0.7 + 128/255 * 0.3, 140/255 * 0.7 + 128/255 * 0.3], // green mixed with gray
  [8/255, 8/255, 8/255]         // black - pure black like Hett
];

// Expose RYBitten functions to the global window object for the UI
(window as any).rybittenConvert = {
  ryb2rgb: (coords: [number, number, number], gamutName: string) => {
    // Handle our custom gamut
    if (gamutName === 'custom-neutral') {
      return ryb2rgb(coords, { cube: neutralIttenCube as any });
    }
    
    const cubeData = cubes.get(gamutName);
    const cube = cubeData ? cubeData.cube : undefined;
    return ryb2rgb(coords, { cube });
  },
  
  // Also expose the available gamuts
  getAvailableGamuts: () => {
    const gamutList: { [key: string]: string } = {};
    cubes.forEach((value, key) => {
      gamutList[key] = `${value.title} by ${value.author} (${value.year})`;
    });
    return gamutList;
  }
};