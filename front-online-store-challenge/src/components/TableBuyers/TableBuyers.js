import React, { useEffect, useState } from 'react'
import { filterDataB } from '../utils/filterData';
import { getBuyersData } from '../utils/utils';

const TableBuyers = () => {
    const [buyers, setBuyers] = useState({
        dataB:[],
        loadingB: true,
    });
    const { dataB, loadingB } = buyers;
    
    useEffect(() => {
        getBuyersData()
        .then(res => setBuyers({
            dataB: res,
            loadingB: false,
        }))
        .catch(e => e);
    }, []);

    const dataBuyers = filterDataB(dataB);
    return (
        <div>
            {
                loadingB
                ? <div>
                    <h1>loading...</h1>
                    </div>
                :   <div>
                        <h1>Table of Clients that made purchases on the plataform</h1>
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
                                        // <tr key={nextId()}>
                                        <tr key={id}>
                                            <td>
                                                {name}
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
