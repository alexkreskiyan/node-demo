import * as moment from 'moment'

export function log(...entries: any[]) {
    console.log.apply(console, [`[${moment().format('DD.MM.YYYY HH:mm:ss')}]`].concat(entries))
}
