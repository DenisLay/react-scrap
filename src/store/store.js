import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../states/counter/counterSlice";
import scraperReducer from "../states/scrapers/scrapersSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        scrapers: scraperReducer
    }
});