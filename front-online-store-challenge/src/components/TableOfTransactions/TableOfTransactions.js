import React, { useEffect, useState } from 'react'
import IdsProducts from '../IdsProducts/IdsProducts';
import { getTransactionsData } from '../utils/utils';

const TableOfTransactions = ({id, name}) => {
    const [transactions, setTransactions] = useState({
      dataT:[],
      loadingT: true,
    });

    const { dataT, loadingT } = transactions;

    useEffect(() => {
        getTransactionsData()
        .then(res => setTransactions({
            dataT: res,
            loadingT: false,
        }))
        .catch(e => e);
    }, []);

    const filterDataTransactionsByBuyer = () => {
        return dataT.filter( transaction => transaction['buyer id'] === id);
    }

    const transactionsBuyer = filterDataTransactionsByBuyer();

    return (
        <div>
            {
                loadingT
                    ?   <div>
                            <h1>loading...</h1>
                            </div>
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
                                                <td>{transaction['ip']}</td>
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
