import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

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

        <ol>
          { categories.map( (category) => (<li key={ category }>{ category }</li>) ) }
        </ol>
    </>
  );
};

export default GifExpertApp;
