export const initialState = {
    notes: JSON.parse(localStorage.getItem('notes') || '[]'),
}
  
export function rootReducer(state = initialState) {
    return state;
} 