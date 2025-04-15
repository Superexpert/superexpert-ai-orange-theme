// rollup.config.js
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';

export default {
  external: ['@superexpert-ai/framework'],
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
  },
  plugins: [
    postcss({
      modules: true, // Enable CSS modules
      extract: true, // Extract CSS to a separate file
      minimize: true, // Minify the CSS
      sourceMap: true, // Enable source maps
    }),
    image(), // Plugin to handle image imports
    // ... other plugins
  ],
};