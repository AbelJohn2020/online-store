import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import IdsProducts from '../IdsProducts/IdsProducts';
import Loading from '../Loaging/Loading';
import { transactionsTable } from '../utils/filterData';

const TableOfTransactions = ({id, name}) => {
    const [transactions, setTransactions] = useState({
      dataT:[],
      loadingT: true,
    });
    const { dataT, loadingT } = transactions;

    useEffect(() => {
        transactionsTable(setTransactions);
    }, [])

    const filterDataTransactionsByBuyer = () => {
        return dataT.filter( transaction => transaction['buyer id'] === id);
    }

    const transactionsBuyer = filterDataTransactionsByBuyer();

    return (
        <div>
            {
                loadingT
                    ?   <Loading />
                    :   <div>
                            <h1>Table of {name} purchase record</h1>
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th cope="col">device</th>
                                            <th cope="col">ips</th>
                                            <th cope="col">products</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        transactionsBuyer.map( transaction => (
                                            <tr key={transaction['id']}>
                                                <td>{transaction['device']}</td>
                                                <td>
                                                    <Link to={`/ip/${transaction['ip']}`}>
                                                        {transaction['ip']}
                                                    </Link>
                                                </td>
                                                <td>
                                                    <IdsProducts ids={transaction['product ids']} />
                                                </td>
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

export default TableOfTransactions;
