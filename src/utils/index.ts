import moment from 'moment';
import { INote } from '../interfaces';

const SORT_VALUE_TYPE = 'string';
const DATETIME_FORMAT = 'DD.MM.YYYY HH:mm:ss';

export const formatValueByFilterType = (value: any, filterType: string) => {
    return typeof value[filterType] === SORT_VALUE_TYPE ? 
    value[filterType].toLowerCase() : 
    value[filterType];
};

export const sortByFilterType = (notes: INote[], filterType: string) => (
    notes.sort((prev: any, next: any) => {
        const prevNote = formatValueByFilterType(prev, filterType);
        const nextNote = formatValueByFilterType(next, filterType);

        return (prevNote < nextNote) ? -1 :
        (prevNote > nextNote) ? 1 : 0;
    })
);

export const formatDate = (date: any) => moment(date).format(DATETIME_FORMAT);
