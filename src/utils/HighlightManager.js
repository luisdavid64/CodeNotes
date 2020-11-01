import React from 'react';
import { solarizedDark, dracula, solarizedLight, monokai, shadesOfPurple} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const HighlightManager = (() => {

    const availableLanguages = ["javascript", "c", "java", "scss" , "python", "haskell", "go"];

    const availableThemes = ["solarizedDark", "solarizedLight", "dracula", "monokai", "shadesOfPurple"];


    //Returns the style and the matching background color, since the highlight  is defined as a pre
    const getTheme = (name) => {

        switch(name) {
            case "solarizedDark":
                return {
                    bgColor : "#002B36",
                    style: solarizedDark
                }
            case "dracula" :
                return {
                    bgColor: "#282a36",
                    style: dracula
                }
            case "solarizedLight" :
                return {
                    bgColor: "#fdf6e3",
                    style: solarizedLight
                }
            case "monokai" :
                return {
                    bgColor: "#272822",
                    style: monokai
                }
            case "shadesOfPurple" :
                return {
                    bgColor: "#2D2B55",
                    style: shadesOfPurple
                }
            default:
                return {}
        }
    }

    const getLanguageIcon = (language) => {
        switch(language.toLowerCase()) {
            case "javascript":
                return <i className="devicon-javascript-plain"></i>
            case "c":
                return <i className="devicon-c-plain"></i>
            case "java":
                return <i className="devicon-java-plain"></i>
            case "scss":
                return <i className="devicon-sass-original"></i>
            case "python":
                return <i className="devicon-python-plain"></i>
            case "haskell":
                return <i className="devicon-haskell-plain"></i>;
            case "go":
                return <i className="devicon-go-plain"></i>;
            default:
                return <></>
        }

    }

    const isValidLanguage = (name) => {
        return availableLanguages.includes(name.toLowerCase());

    }



        return {
            availableThemes,
            availableLanguages,
            getLanguageIcon,
            getTheme,
            isValidLanguage
        }
})();

export default HighlightManager;