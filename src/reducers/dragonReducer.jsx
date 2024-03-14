
export const initialState = {
    favorite: ''
}
  
export const reducer = (state, action) => {
switch (action.type) {
    case 'set_favorite':
    return {
        ...initialState,
        favorite: action.payload
    }
    default:
    return initialState;
}
}
  