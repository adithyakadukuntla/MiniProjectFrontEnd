import React from 'react'
import { useEffect,useState } from 'react';
import productsContext from './ProductsContext'
function ProductsContextProvider({children}) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("https://jsonformatter.curiousconcept.com/#")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
    }, [])

  return (
    <div>
        
        <productsContext.Provider value={[products,setProducts]} >
            {children}
        </productsContext.Provider>
    </div>
  )
}

export default ProductsContextProvider