
const toggleMode = () => {
    return {
        type: "TOGGLEMODE",
    }
}

const set = (mode) => {
    return {
        type: "SETMODE",
        modeVal: mode,
    }
}

export default {
    toggleMode,
    set
}