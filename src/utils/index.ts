import { Note } from '../interfaces';

export const sortByFilterType = (notes: Note[], filterType: string) => (
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
  
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
      
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
};
  