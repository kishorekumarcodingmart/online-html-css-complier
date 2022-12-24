import { createSlice } from "@reduxjs/toolkit";

export const code = createSlice({
    name : "code",
    initialState : {value : {html : "", css : "", javascript : ""}},
    reducers : {
        addHtmlCode : (state,action) => {
            state.value.html = action.payload
        },
        addCssCode : (state,action) => {
            state.value.css = action.payload
        },
        addJavascriptCode : (state,action) => {
            state.value.javascript = action.payload
        }
    }
})

export const {addHtmlCode,addCssCode,addJavascriptCode} = code.actions

export default code.reducer