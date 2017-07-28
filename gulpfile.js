const gulp = require('gulp')
const nodemon = require('gulp-nodemon')

gulp.task('serve', () => {
  nodemon({
    script: 'index.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' }
  })
})
