import { useSelector } from "react-redux";

export function useCurrentCode(){
    let currentLanguage = useSelector((state)=>state.language.value)
    let currentCodeObject = useSelector((state)=> state.code.value)

    if (currentLanguage === "html"){
        return currentCodeObject.html
    }

    if (currentLanguage === "css"){
        return currentCodeObject.css
    }

    if (currentLanguage === "javascript"){
        return currentCodeObject.javascript
    }

}