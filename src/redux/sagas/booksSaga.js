import { call, fork, takeLatest, put } from 'redux-saga/effects';
import { getBooksApi } from '../api';
import { getBooks, setListBooks } from '../slices/booksSlice';


function* onLoadBooksAsync({ payload }) {
    try {
        const bookName = payload;
        const responce = yield call(getBooksApi, bookName);

        if(responce.status === 200) {
            yield put(setListBooks({...responce.data}));
        }
    }
    catch(error) {
       console.log(error); 
    }
}

function* onLoadBooks() {
    yield takeLatest(getBooks.type, onLoadBooksAsync);
};

export const bookSagas = [fork(onLoadBooks)];
