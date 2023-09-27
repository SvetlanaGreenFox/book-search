import { all } from "redux-saga/effects";
import { bookSagas } from "./booksSaga";

export default function* rootSaga() {
    yield all([...bookSagas]);
}
