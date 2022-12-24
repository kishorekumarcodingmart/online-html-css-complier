import { configureStore } from "@reduxjs/toolkit";
import language from "./language";
import code from "./code";

export const store =configureStore({
    reducer : {
        language : language,
        code : code
    }
})