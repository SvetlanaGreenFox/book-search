import styles from './FormElem.module.scss';

import Form from 'react-bootstrap/Form';

const FormElem = () => {

    const inputHandler = (event) => {
        if(event.key === 'Enter') {
            console.log('hi');
        }
    }

    return (
        <Form.Control
            placeholder="What are you looking for?"
            aria-label="What are you looking for?"
            aria-describedby="basic-addon2"

            className={styles.focusedInput}
            onKeyUp={inputHandler}
        />
    );
}

export default FormElem;