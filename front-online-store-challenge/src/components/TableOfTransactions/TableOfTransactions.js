import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import IdsProducts from '../IdsProducts/IdsProducts';
import Loading from '../Loaging/Loading';
import { Container, Table, TdBody, TdBodyCapitalize, ThHeader, TrBody, TrHeader } from '../TableBuyers/TableBuyersStyles';
import { transactionsTable } from '../utils/filterData';

const TableOfTransactions = ({id, name, shadow}) => {
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
        <Container>
            {
                loadingT
                    ?   <Loading />
                    :   <div>
                            <h1 className={shadow ? 'title shadowTitle' : 'title lightTitle'}>
                                Table of {name} purchase record
                            </h1>
                            <div>
                                <Table shadow={shadow}>
                                    <thead>
                                        <TrHeader>
                                            <ThHeader cope="col">device</ThHeader>
                                            <ThHeader cope="col">ips</ThHeader>
                                            <ThHeader cope="col">products</ThHeader>
                                        </TrHeader>
                                    </thead>
                                    <tbody>
                                    {
                                        transactionsBuyer.map( transaction => (
                                            <TrBody key={transaction['id']} shadow={shadow}>
                                                <TdBodyCapitalize>{transaction['device']}</TdBodyCapitalize>
                                                <TdBody>
                                                    <Link to={`/ip/${transaction['ip']}`}>
                                                        {transaction['ip']}
                                                    </Link>
                                                </TdBody>
                                                <TdBody>
                                                    <IdsProducts ids={transaction['product ids']} />
                                                </TdBody>
                                            </TrBody>
                                        ))
                                    }
                                    </tbody>
                                </Table>
                            </div>
                        </div>
            }
        </Container>
    )
}

export default TableOfTransactions;
