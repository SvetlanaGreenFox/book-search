import axios from "axios";

export const getBooksApi = async (bookName) => axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${process.env.REACT_APP_MY_VARIABLE}`);
