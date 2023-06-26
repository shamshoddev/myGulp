import plumber from 'gulp-plumber'; /* обработки ошибок */
import notify from 'gulp-notify'; /* сообщения */
import browsersync from 'browser-sync'; /* Этот плагин для открытия браузера и перезагрузки */


// экспортируемый обьект
export const plugins = {
    plumber,
    notify,
    browsersync
}