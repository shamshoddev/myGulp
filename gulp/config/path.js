// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './app/build/'; /* Путь в конечный результат */
const srcFolder = './app/src';

export const path = {
    // Обьект путей с результатом
    build: {
        html: `${buildFolder}/`,
        style: `${buildFolder}/style/`,
        images: `${buildFolder}/images/`,
        js: `${buildFolder}/script/`,
        fonts: `${buildFolder}/fonts/`
    },
    // Обьект путей с исходным файлом
    src: {
        html: `${srcFolder}/*.pug`,
        style: `${srcFolder}/style/style.scss`,
        images: `${srcFolder}/images/**/*.{jpg,png,jpeg,gif,webp}`,
        svg: `${srcFolder}/images/**/*.svg`,
        js: `${srcFolder}/script/app.js`,
        fonts: `${srcFolder}/fonts/*.ttf`
    },
    // Обьект путей к файлам и папкам за которыми нужно следить
    watch: {
        html: `${srcFolder}/**/*.pug`,
        style: `${srcFolder}/style/**/*.scss`,
        images: `${srcFolder}/images/**/*.{jpg,png,jpeg,gif,webp}`,
        js: `${srcFolder}/script/**/*/.js`,
    },
    clean: buildFolder,
    buildFolder,
    srcFolder,
    rootFolder,
}