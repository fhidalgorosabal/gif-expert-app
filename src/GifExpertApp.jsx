import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dogs']);

  const onAddCategories = (category) => {
    if(categories.includes(category)) return;

    setCategories([category, ...categories]);
  };

  return (
    <>
        <h1>Gif Expert App</h1>

        <AddCategory onNewCategory={ onAddCategories }/>

        { 
          categories.map( (category) => (
            <GifGrid key={ category } category={ category }/>  
          )) 
        }
    </>
  );
};

export default GifExpertApp;
