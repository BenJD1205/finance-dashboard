import { api } from './../state/api';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
    reducer:{[api.reducerPath]: api.reducer},
    middleware:(getDefault) => getDefault().concat(api.middleware)
})