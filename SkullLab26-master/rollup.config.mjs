import commonjs from '@rollup/plugin-commonjs'; // This matches node_modules/@rollup/plugin-commonjs
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
export default {
  // Point this to your lib-entry file
  input: 'src/lib-entry.js', 
  
  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true,
    }
  ],
  plugins: [
    peerDepsExternal(), // Keeps React out of the bundle
    resolve(),
    babel({
  babelHelpers: 'bundled',
  exclude: 'node_modules/**',
  presets: ['@babel/preset-env', '@babel/preset-react'],
  extensions: ['.js', '.jsx'],
  // This line is key for spread operators:
  babelrc: true 
}),
    commonjs(),
  ],
};