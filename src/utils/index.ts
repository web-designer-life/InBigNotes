// function sortNotes(notes: Note[], note: any, filter: string) {
//     if (typeof note[filter] === 'string') {
//         return sortByText(notes, filter);
//     } else {
//         return sortByNumber(notes, filter);
//     }
// };

// function sortByText(notes: Note[], filter: string) {
//     return notes.sort((prev: any, next: any) => {
//         return next[filter].localeCompare(prev[filter])
//     });
// };

// function sortByNumber(notes: Note[], filter: string) {
//     return notes.sort((prev: any, next: any) => {
//         return prev[filter] - next[filter];
//     });
// };