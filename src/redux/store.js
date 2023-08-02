import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "../features/articleSlice";
import categoriesReducer from "../features/categorieSlice"
import scategoriesReducer from "../features/scategorieSlice";
import cartSliceReducer from "../features/cartSlice";
import authReducer from "../features/AuthSlice"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const persistedReducer = persistReducer(persistConfig, authReducer)

const store = configureStore({
    reducer: {
        storearticles: articlesReducer,
        storecategories: categoriesReducer,
        storescategories: scategoriesReducer,
        storecart: cartSliceReducer,
        auth: persistedReducer
    },
    middleware: [thunk]

})
export default store