const esbuild = require('esbuild');
const fs = require('fs');

async function build() {
  try {
    // Build the UI bundle first
    await esbuild.build({
      entryPoints: ['ui.ts'],
      bundle: true,
      outfile: 'ui-bundle.js',
      target: 'es2017',
      format: 'iife',
      loader: { '.ts': 'ts' },
      external: [],
    });

    // Read the UI bundle
    const uiBundle = fs.readFileSync('ui-bundle.js', 'utf8');
    
    // Read the original HTML
    let html = fs.readFileSync('ui.html', 'utf8');
    
    // Check if we already have the script tag, if not add it
    if (!html.includes('<!-- RYBITTEN_BUNDLE -->')) {
      // Insert the bundle before the closing body tag
      html = html.replace('</body>', `<!-- RYBITTEN_BUNDLE -->\n<script>\n${uiBundle}\n</script>\n</body>`);
    } else {
      // Replace existing bundle
      html = html.replace(
        /<!-- RYBITTEN_BUNDLE -->[\s\S]*?<!-- END_RYBITTEN_BUNDLE -->/,
        `<!-- RYBITTEN_BUNDLE -->\n<script>\n${uiBundle}\n</script>\n<!-- END_RYBITTEN_BUNDLE -->`
      );
    }
    
    // Write the complete HTML with bundle
    fs.writeFileSync('ui-complete.html', html);
    
    // Create the __html__ variable for code.ts
    const htmlContent = html.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    const htmlVariable = `const __html__ = \`${htmlContent}\`;\n`;
    
    // Build the main plugin code with HTML injected
    await esbuild.build({
      entryPoints: ['code.ts'],
      bundle: true,
      outfile: 'code.js',
      target: 'es2017',
      format: 'cjs',
      loader: { '.ts': 'ts' },
      external: [],
      banner: {
        js: htmlVariable
      }
    });

    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();