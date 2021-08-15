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
    const [inputValue, setInputValue] = useState('');
    const { dataB, loadingB } = buyers;
    
    useEffect(() => {
        getBuyersData()
        .then(res => setBuyers({
            dataB: res,
            loadingB: false,
        }))
        .catch(e => e);
    }, []);

    
    const findPartnerts = (data) => {
        return data.filter( ({name}) => name.includes(inputValue));
    }

    const filterDataBuyers = () => {
        const data = filterDataB(dataB);
        if(inputValue.length === 0) {
            return data.slice(pagination, pagination+20)
        } else {
            const findPartnert = findPartnerts(data)
            return findPartnert.slice(pagination, pagination+20)
        }
    }

    const dataBuyers = filterDataBuyers()

    const dataPartnert = () => {
        const data = filterDataB(dataB);
        return findPartnerts(data);
    }

    const handleNextBlock = () => {
        const findPartner = dataPartnert()
        if(findPartner.length - 1 > pagination + 20) {
            setPagination(pagination+20)
        } else {
            setPagination(0)
        }
        
        // if(pagination < 700) {
        //     setPagination(pagination+20)
        // } else {
        //     setPagination(0)
        // }
    }

    const handlePreviousBlock = () => {
        if(pagination > 0) {
            setPagination(pagination-20)
        } else {
            const findPartner = dataPartnert()
            setPagination(findPartner.length - 1)
        }
    }

    const handleChange = (e) => {
        setPagination(0);
        const input = e.target.value;
        setInputValue( input );
    }

    const handlekeyPress = (e) => {
        if(e.key==='Enter') {
            setInputValue('');
        }
    }
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
                            <input 
                                type="text"
                                placeholder="Search partnert name"
                                value={inputValue}
                                onChange={(e) => handleChange(e)}
                                onKeyPress={(e) => handlekeyPress(e)}
                            />
                            <div>
                                <button onClick={() => handlePreviousBlock()}>prev</button>
                                <button onClick={() => handleNextBlock()}>next</button>
                            </div>
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
