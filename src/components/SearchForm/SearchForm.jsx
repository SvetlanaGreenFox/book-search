import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { getBooks } from '../../redux/slices/booksSlice';

import styles from './SearchForm.module.scss';

// import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const SearchForm = () => {
    const [bookName, setBookName] = useState('');
    const [inputData, setInputData] = useState('');

    const list = useSelector(state => state.books.list);
    const dispatch = useDispatch();

    const btnHandler = () => {
        setBookName(inputData)
    }
    const inputHandler = (event) => {
        if (event.key === 'Enter') {
            setBookName(inputData)
        }
    }

    useEffect(() => {
        dispatch(getBooks(bookName))
    }, [bookName])

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