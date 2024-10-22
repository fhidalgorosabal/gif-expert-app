import { useState } from 'react';
import { GifGrid, NavBar } from './components';
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
      <div className="main">
        <NavBar onAddCategories={ onAddCategories }></NavBar>

        { 
          categories.map( (category) => (
            <GifGrid key={ category } category={ category }/>  
          )) 
        }
      </div>
    </>
  );
};

export default GifExpertApp;
