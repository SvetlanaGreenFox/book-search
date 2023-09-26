import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { redirect } from "react-router-dom";
import styles from './SearchForm.module.scss';

import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const SearchForm = () => {
    const [list, setList] = useState([]);
    const [bookName, setBookName] = useState('');
    const [inputData, setInputData] = useState('');

    const btnHandler = () => {
        setBookName(inputData)
    }
    const inputHandler = (event) => {
        if (event.key === 'Enter') {
            setBookName(inputData)
        }
    }

    // const options = {
    //     method: 'GET',
    //     url: 'https://www.googleapis.com/books/v1',
    //     headers: {

    //     }

    // }

    //AIzaSyDY4BE8M-sYvDkCcl5hOSjNHqNIMwjEnAo
    console.log(process.env.REACT_APP_MY_VARIABLE);
    useEffect(() => {
        if (bookName.length > 0) {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${process.env.REACT_APP_MY_VARIABLE}`)
                .then((res) => console.log(res.data.items))
                .catch((err) => console.log(err));
                redirect("/books");
            
        }
    }, [bookName])
    // useEffect(() => {
        
    //     if (list.length > 0) {
    //         return redirect("/books");
    //     }
    //     return null;
    // }, [list])

    return (
        <Container className={styles['form-wrapper']}>
            <InputGroup className='md-3'>
                {/* <FormElem handler={inputHandler} /> */}
                <Form.Control
                    placeholder="What are you looking for?"
                    aria-label="What are you looking for?"
                    aria-describedby="basic-addon2"

                    className={styles.focusedInput}
                    onChange={(e) => setInputData(e.target.value)}
                    onKeyUp={inputHandler}
                />
                {/* <NavLink to="/books">
                    Home
                </NavLink> */}
                <Button onClick={btnHandler} variant="success" id="button-addon2" >
                    Search
                </Button>
            </InputGroup>
        </Container>
    );
}

export default SearchForm;