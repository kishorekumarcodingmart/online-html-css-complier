import { createSlice } from "@reduxjs/toolkit";

export const code = createSlice({
    name : "code",
    initialState : {html : "", css : "", javascript : ""},
    reducers : {
        addHtmlCode : (state,action) => {
            state.html = action.payload
        },
        addCssCode : (state,action) => {
            state.css = action.payload
        },
        addJavascriptCode : (state,action) => {
            state.javascript = action.payload
        }
    }
})

export const {addHtmlCode,addCssCode,addJavascriptCode} = code.actions

export default code.reducer