import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Otro']);

  //const onAddCategories = () => setCategories(['Nueva', ...categories]);

  return (
    <>
        <h1>Gif Expert App</h1>

        <AddCategory setCategories={ setCategories }/>

        <ol>
          { categories.map( (category, index) => (<li key={ index }>{ category }</li>) ) }
        </ol>
    </>
  );
};

export default GifExpertApp;
