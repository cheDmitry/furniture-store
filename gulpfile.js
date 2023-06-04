const {src, dest, series, watch} = require('gulp');

const del = require('del');
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const autoPrifix = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const notify = require('gulp-notify');

// const { notify } = require('browser-sync');
const browserSync = require('browser-sync').create();

// Удаляем старуб папку
const dellete = () => {
  return del('dist')
};


//РЕСУРСЫ !!!!!!!!!!!!!!!

//Переносим шрифты
const fonts = () => {
  return src('src/fonts/*.*')
  .pipe(dest('dist/fonts'))
};

//Переносим изображения
const img = () => {
  return src('src/img/**/*')
  .pipe(dest('dist/img'))
}

//Переносим плагины
const plugins = () => {
  return src('src/js/plug/**/*.*')
  .pipe(dest('dist/js/plug'))
}

//ОСНОВНЫЕ ФАЙЛЫ!!!!!!!!!!

//Минифицируем HTML
const minify = () => {
  return src('src/**/*.html')
  .pipe(htmlMin({
    collapseWhitespace: true,
  }))
  .pipe(dest('dist'))
  .pipe(browserSync.stream());
};

//Преобразуем стили
const style = () => {
  return src('src/style/**/*.css')
  .pipe(concat('style.css'))
  .pipe(autoPrifix({
    cascade: false,
  }))
  .pipe(cleanCss({
    level: 2,
  }))
  .pipe(dest('dist/style'))
  .pipe(browserSync.stream());
};

//Преобразуем JS
const script = () => {
  return src('src/js/*.js')
  .pipe(dest('dist/js'))
  .pipe(browserSync.stream());
};

//Следим за файлами
const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
};


watch('src/**/*.html', minify);
watch('src/styles/**/*.css', style);
watch('src/js/**/*.js', script);




exports.default = series(dellete, fonts, img, minify, style, script, plugins, watchFiles);