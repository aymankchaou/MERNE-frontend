import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "../features/articleSlice";
import categoriesReducer from "../features/categorieSlice"
import scategoriesReducer from "../features/scategorieSlice";
import cartSliceReducer from "../features/cartSlice";
import authReducer from "../features/AuthSlice"


const store = configureStore({
    reducer: {
        storearticles: articlesReducer,
        storecategories: categoriesReducer,
        storescategories: scategoriesReducer,
        storecart: cartSliceReducer,
        auth: authReducer
    }
})
export default store