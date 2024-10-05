import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Otro']);

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
