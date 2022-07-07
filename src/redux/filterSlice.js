import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        value: '',
    },
    reducers: {
        filterChange(state, action) {
            state.value = action.payload;
        },
    },
});

export const { filterChange } = filterSlice.actions;
export default filterSlice.reducer;