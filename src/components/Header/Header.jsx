import styles from "./Header.module.scss";
import SearchForm from '../SearchForm/SearchForm';

import Container from 'react-bootstrap/Container';


const Header = () => {
    return (
        <Container fluid className={styles.header}>
            <SearchForm />
        </Container >
    );
}

export default Header;