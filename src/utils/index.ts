import moment from 'moment';
import { INote } from '../interfaces';

const FILTERTYPE_FORMAT = 'string';
const DATETIME_FORMAT = 'DD.MM.YYYY HH:mm:ss';

export const formatValueByFilterType = (value: any, filterType: string) => (
    typeof value[filterType] === typeof FILTERTYPE_FORMAT ?
        value[filterType].toLowerCase() :
        value[filterType]
);

export const sortByFilterType = (notes: INote[], filterType: string) => (
    notes.sort((prev: any, next: any) => {
        const prevNote = formatValueByFilterType(prev, filterType);
        const nextNote = formatValueByFilterType(next, filterType);

        if (prevNote < nextNote) return -1;
        if (prevNote > nextNote) return 1;
        return 0;
    })
);

export const formatDate = (date: any) => moment(date).format(DATETIME_FORMAT);
