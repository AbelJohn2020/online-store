import React, { useEffect, useState } from 'react'
import Products from '../Products/Products';
import nextId from "react-id-generator";

const IdsProducts = ({ids}) => {
    const [idsProducts, setIdsProducts] = useState({
        data: [],
        loading: true,
    });

    const { data, loading } = idsProducts

    useEffect(() => {
        setIdsProducts({
            data: ids,
            loading: false
        })
    }, [ids])

    const getArrayData = () => {
        if(typeof(data) === 'string') {
            return [data]
        } else {
            return data;
        }
    }

    const idsData = getArrayData();
    return (
        <div>
            {
                !loading && 
                    <ul>
                        {
                            idsData.map( id => (
                                <Products key={nextId()} idsProducts={id}/>
                            ))
                        }
                    </ul>
            }
        </div>
    )
}

export default IdsProducts;
