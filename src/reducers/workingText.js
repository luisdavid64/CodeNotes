
const homeReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT':
            return {
                ...state,
                content: action.content
            }
        case 'CHANGELANG':
            return {
                ...state,
                language: action.language
            };
        case 'CHANGESTYLE':
            return {
                ...state,
                ...action.payload
            };

        case 'CHANGENAME':
            return {
                ...state,
                name: action.name
            };
        case 'CLEAR':
            return {
                ...state,
                content: "",
            };
        default:
            return state;
    }
}

export default homeReducer;