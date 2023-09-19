import styles from "./MainPage.module.scss";
import SearchForm from "../../components/SearchForm/SearchForm";

import Container from 'react-bootstrap/Container';

//container for start page and components

//add sorting elements

const MainPage = () => {
    return ( 
        <Container fluid className={styles["container-custom"]}>
            <SearchForm />
        </Container>
     );
}
 
export default MainPage;