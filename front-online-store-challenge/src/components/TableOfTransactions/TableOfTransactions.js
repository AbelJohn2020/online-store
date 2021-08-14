import React, { useEffect, useState } from 'react'
import { getTransactionsData } from '../utils/utils';

const TableOfTransactions = ({id}) => {
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
                            <h1>Table of Client purchase record</h1>
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            {/* <th cope="col">
                                                {
                                                    transactionsBuyer.map( key => (
                                                        <th>{Object.keys(key)}</th>
                                                    ))
                                                }
                                            </th> */}
                                            {/* <th cope="col">Age</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        transactionsBuyer.map( transaction => (
                                            // <tr key={nextId()}>
                                            <tr key={transaction['id']}>
                                                <td>{transaction['ip']}</td>
                                                <td>{transaction['device']}</td>
                                                <td>
                                                    <ul>
                                                        {
                                                            transaction['device']
                                                        }
                                                    </ul>
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
