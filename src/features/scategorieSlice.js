import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSCategories } from "../services/ScategorieService";

export const getScategories = createAsyncThunk(
    "scategorie/getScategories",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetchSCategories();
            return res.data;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const scategorieSlice = createSlice({
    name: 'scategorie',
    initialState: {
        scategories: [],
        scategorie: {},
        isLoading: false,
        success: null,
        error: null,
    },
    extraReducers: (builder) => {
        //get scategories
        builder
            .addCase(getScategories.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getScategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.scategories = action.payload;
            })
            .addCase(getScategories.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                console.log("impossible de se connecter au serveur")
            })
    }
})
export default scategorieSlice.reducer