import fonter from 'gulp-fonter';

export const ttfToWoff = () => {
    return app.gulp.src(app.path.src.fonts, {}) /* обращаемся к папке с исходниками */
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
        title: "FONTS",
        message: "Error: <%= error.message %>"
    })))
    .pipe(fonter({
        formats: ['woff']
    }))
    .pipe(app.gulp.dest(app.path.build.fonts))
}