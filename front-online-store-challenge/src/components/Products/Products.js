import React, { useEffect, useState } from 'react'
import { getProductsData } from '../utils/utils';

const Products = ({idsProducts}) => {
    const [products, setProducts] = useState({
        dataP:[],
        loadingP: true,
    });
          
    const { dataP, loadingP } = products;

    useEffect(() => {
        getProductsData()
          .then(res => setProducts({
            dataP: res,
            loadingP: false,
          }))
          .catch(e => e);
    }, []);

    const getproduts = () => {
        if(dataP.length !== 0) {
            return dataP.find( product => product.id === idsProducts)
        } else {
            return dataP
        }
    }

    const selectProducts = getproduts();

    return (
        <li key={selectProducts.id}>
            {loadingP ? <div>loading...</div> : selectProducts.name}
        </li>
    )
}

export default Products;
