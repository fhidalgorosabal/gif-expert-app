import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import { getCategory } from './helpers/getCategory';

const GifExpertApp = () => {
  const randomCategory = getCategory();
  const [categories, setCategories] = useState([randomCategory]);

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
