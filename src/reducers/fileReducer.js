
const fileReducer = (state = {}, action) => {

    switch(action.type) {
       case "TOGGLEMODE":
            return {
                ...state,
                mode: !state.mode
            } 
        case "SETMODE":
            return {
                ...state,
                mode: action.modeVal
            }
        default:
            return state;
    }
}

export default fileReducer;