import { useState } from 'react';
import { PropTypes } from 'prop-types';
import Form from 'react-bootstrap/Form';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const value = inputValue.trim();
    if(value.length <=1) return;
    onNewCategory(value);
    setInputValue(''); 
  };

  return (
    <>    
      <Form className="d-flex w-50" onSubmit={ onSubmit }>
        <Form.Control
          type="text"
          size="lg"
          placeholder="Buscar gifs"
          aria-label="Search"
          value={ inputValue } 
          onChange={ onInputChange }
        />
      </Form>
    </>  
  )
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
};
