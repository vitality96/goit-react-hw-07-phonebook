import { configureStore } from '@reduxjs/toolkit';
import contactsApi  from 'service/contactsAPI';
import filterSlice from './filterSlice';


export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: filterSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(contactsApi.middleware),
});
