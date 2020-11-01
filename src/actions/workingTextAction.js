const edit = (content) => {
    return {
        type: 'EDIT', 
        content: content,
    }
}

const changeLanguage = (language) => {
    return {
        type: "CHANGELANG",
        language: language
    }
}

const changeStyle = (styleObj) => {
    return {
        type: "CHANGESTYLE",
        payload: styleObj
    }
}

const clear = () => {
    return {
        type: 'CLEAR'
    }

}

const changeName = (name) => {
    return {
        type: 'CHANGENAME', 
        name,
    }
}

export default {
    edit,
    clear,
    changeLanguage,
    changeStyle,
    changeName
}