import { Note } from '../interfaces';

export const sortByFilterType = (notes: Note[], filterType: string) => (
    notes.sort((prev: any, next: any) => {
        const prevNote = typeof prev[filterType] === 'string' ? prev[filterType].toLowerCase() : prev[filterType];
        const nextNote = typeof next[filterType] === 'string' ? next[filterType].toLowerCase() : next[filterType];

        return (prevNote < nextNote) ? -1 :
        (prevNote > nextNote) ? 1 : 0;
    })
);
