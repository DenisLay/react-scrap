import { createSlice } from "@reduxjs/toolkit";

export const scrapersSlice = createSlice({
    name: 'scrapers',
    initialState: {
        scrapers: []
    },
    reducers: {
        push: (state, item) => {
            state.scrapers.push(item)
        }
    }
});

export const { push } = scrapersSlice.actions

export default scrapersSlice.reducer