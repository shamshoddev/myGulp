

export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}` /* базовая папка откуда нам нужно запустить файл */
        },
        notify: false, /* Сообщения в браузере */
        port: 3000
    })
}