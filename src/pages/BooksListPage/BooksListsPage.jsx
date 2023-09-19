import styles from "./BooksListPage.module.scss";

import Header from "../../components/Header/Header";
import BooksList from "../../components/BooksList/BooksList";

import Container from 'react-bootstrap/Container';

const BooksListsPage = () => {
    return (
        <Container fluid className={styles["books-page"]}>
            <Header />
            <BooksList />
        </Container>

    );
}

export default BooksListsPage;