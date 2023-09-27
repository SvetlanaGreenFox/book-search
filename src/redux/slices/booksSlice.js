import { createAction, createSlice} from '@reduxjs/toolkit';

const initialState = {
    book: []
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        getBooks: (name) => {
            return name;
        },
        setListBooks: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const { getBooks, setListBooks } = booksSlice.actions;

export default booksSlice.reducer;
