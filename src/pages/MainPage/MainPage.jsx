import styles from "./MainPage.module.scss";
import SearchForm from "../../components/SearchForm/SearchForm";

import Container from 'react-bootstrap/Container';

//add sorting elements

const MainPage = () => {
    return ( 
        <Container fluid className={styles["container-custom"]}>
            <SearchForm />
        </Container>
     );
}
 
export default MainPage;