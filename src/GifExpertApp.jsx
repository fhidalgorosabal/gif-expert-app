import { useState } from "react";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Otro']);

  return (
    <>
        <h1>Gif Expert App</h1>

        {/* Input (Buscador) */}

        {/* Listado de Gif */}
        <ol>
          { categories.map( (categorie) => (<li key={ categorie }>{ categorie }</li>) ) }
        </ol>
          {/* Gif items */}
    </>
  );
};

export default GifExpertApp;
