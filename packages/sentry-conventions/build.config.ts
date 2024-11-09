import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['./src/index'],
  outDir: 'dist',
  declaration: 'compatible',
  sourcemap: true,
  externals: ['rollup'],
  rollup: {
    emitCJS: true,
    esbuild: {
      minify: true,
    },
  },
});
