import { INote } from '../interfaces';

const formatNumberOfDate = (dateValue: number) => {
    return dateValue < 10 ? `0${dateValue}` : dateValue;
};

export const sortByFilterType = (notes: INote[], filterType: string) => (
    notes.sort((prev: any, next: any) => {
        const prevNote = typeof prev[filterType] === 'string' ? prev[filterType].toLowerCase() : prev[filterType];
        const nextNote = typeof next[filterType] === 'string' ? next[filterType].toLowerCase() : next[filterType];

        return (prevNote < nextNote) ? -1 :
        (prevNote > nextNote) ? 1 : 0;
    })
);

export const formatDate = (date: any) => {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
    year = year.toString().slice(-2);
    month = formatNumberOfDate(month);
    dayOfMonth = formatNumberOfDate(dayOfMonth);
    hour = formatNumberOfDate(hour);
    minutes = formatNumberOfDate(minutes);
    seconds = formatNumberOfDate(seconds);
      
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}:${seconds}`;
};
  