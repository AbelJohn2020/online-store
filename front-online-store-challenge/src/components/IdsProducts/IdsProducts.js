import React, { useEffect, useState } from 'react'
import { ProductsTable } from '../utils/filterData';
import nextId from "react-id-generator";

const IdsProducts = ({ids}) => {
    const [products, setProducts] = useState({
        dataP:[],
        loadingP: true,
    });
          
    const { dataP } = products;

    useEffect(() => {
        ProductsTable(setProducts);
    }, []);

    const getArrayData = () => {
        if(typeof(ids) === 'string') {
            return [ids]
        } else {
            return ids;
        }
    }

    const idsData = getArrayData();

    const filterProducts = () => {
        if(ids.length !== 0) {
            return dataP.filter(product => idsData.includes(product['id']))
        } else {
            return ids;
        }
    }

    const theProducts = filterProducts();

    return (
        <div>
            <ul>
                {
                    theProducts.map( product => (
                        <li key={nextId()}>
                            {product.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default IdsProducts;
