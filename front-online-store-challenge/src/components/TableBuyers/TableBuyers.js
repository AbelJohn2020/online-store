import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { filterDataB } from '../utils/filterData';
import { getBuyersData } from '../utils/utils';

const TableBuyers = () => {
    const [buyers, setBuyers] = useState({
        dataB:[],
        loadingB: true,
    });
    const [pagination, setPagination] = useState(0)
    const { dataB, loadingB } = buyers;
    
    useEffect(() => {
        getBuyersData()
        .then(res => setBuyers({
            dataB: res,
            loadingB: false,
        }))
        .catch(e => e);
    }, []);

    
    const filterDataBuyers = () => {
        const data = filterDataB(dataB);
        return data.slice(pagination, pagination+20)
    }

    const handleNextBlock = () => {
        if(pagination < 700) {
            setPagination(pagination+20)
        } else {
            setPagination(0)
        }
    }

    const handlePreviousBlock = () => {
        if(pagination > 0) {
            setPagination(pagination-20)
        } else {
            setPagination(700)
        }
    }

    const dataBuyers = filterDataBuyers()
    return (
        <div>
            {
                loadingB
                ? <div>
                    <h1>loading...</h1>
                    </div>
                :   <div>
                        <h1>Table of Clients that made purchases on the plataform</h1>
                        <hr />
                        <div>
                            <button onClick={() => handlePreviousBlock()}>prev</button>
                            <button onClick={() => handleNextBlock()}>next</button>
                        </div>
                        <div>
                            <table>
                                <thead>
                                <tr>
                                    <th cope="col">Name</th>
                                    <th cope="col">Age</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    dataBuyers.map( ({id, name, age}) => (
                                        <tr key={id}>
                                            <td>
                                                <Link to={`/buyer/${id}`} className="name">
                                                    {name}
                                                </Link>
                                            </td>
                                            <td>{age}</td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </div>
    )
}

export default TableBuyers;
