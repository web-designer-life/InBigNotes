import actions from '.';

export function fetchNotes() {
    return {
        type: actions.FETCH_NOTES_PENDING,
    }
};