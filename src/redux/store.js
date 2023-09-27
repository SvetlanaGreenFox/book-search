import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import BooksReducer from './slices/booksSlice';
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        books: BooksReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga);

export default store;
