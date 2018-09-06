
'use strict';

/*
 * > Serve
 */

import gulp from 'gulp';
import browserSync from 'browser-sync';

const server = browserSync.create();

export const reload = (done) => {
  server.reload();
  done();
}

export const serve = (done) => {
  server.init({
    server: {
      baseDir: ["./"],
      directory: true,
      index: "/demo/index.html",
      serveStaticOptions: {
        extensions: ["html"]
      }
    },
    startPath: "/demo/index.html",
    files: "./elements/native-elements/dist/native-elements.css"
  });
  done();
}

serve.displayName = 'local server';

gulp.task('serve', gulp.series(serve, done => {
  done();
}));

