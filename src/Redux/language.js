import {createSlice} from '@reduxjs/toolkit'

const language = createSlice({
    name : "language",
    initialState : {value : "html"},
    reducers : {
        changeToHtml : (state) => {
            state.value = "html"
        },
        changeToCss : (state) => {
            state.value = "css"
        },
        changeToJavascript : (state) => {
            state.value = "javascript"
        }
    }
})

export const {changeToHtml, changeToCss, changeToJavascript} = language.actions
export default language.reducer