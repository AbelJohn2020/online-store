import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import IdsProducts from '../IdsProducts/IdsProducts';
import Loading from '../Loaging/Loading';
import { Container, FirstBox, ThHeader, TrBody, TrHeader } from '../TableBuyers/TableBuyersStyles';
import { getDateToString, transactionsTable } from '../utils/filterData';
import '../UI/styles.css';
import { DivTdBody, TableT, Td, TdBodyCapitalizeT, TdBodyLinkT, TdBodyT, ThHeaderT } from './TableOfTransactionsStyles';

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

    const getNewArrayWithDate = () => {
        return transactionsBuyer.map( transaction => {
            return {
                "id": transaction["id"],
                "date": getDateToString(transaction["id"]),
                "buyer id": transaction["buyer id"],
                "ip": transaction["ip"],
                "device": transaction["device"],
                "product ids" : transaction["product ids"]
            }
        })
    }

    const transactionsBuyerWithDates = getNewArrayWithDate();

    return (
        <Container>
            {
                loadingT
                    ?   <Loading />
                    :   <FirstBox>
                            <h1 className={shadow ? 'title shadowTitle' : 'title lightTitle'}>
                                Table of {name} purchase record
                            </h1>
                            <div>
                                <h4 className={shadow ? 'h4 shadowTitle' : 'h4 lightTitle'}>
                                    Select Ip
                                </h4>
                                <TableT shadow={shadow}>
                                    <thead>
                                        <TrHeader>
                                            <ThHeaderT cope="col">date</ThHeaderT>
                                            <ThHeaderT cope="col">device</ThHeaderT>
                                            <ThHeader cope="col">ips</ThHeader>
                                            <ThHeader cope="col">products</ThHeader>
                                        </TrHeader>
                                    </thead>
                                    <tbody>
                                    {
                                        transactionsBuyerWithDates.map( transaction => (
                                            <TrBody key={transaction['id']} shadow={shadow}>
                                                <Td>
                                                    {transaction['date']}
                                                </Td>
                                                <TdBodyCapitalizeT>{transaction['device']}</TdBodyCapitalizeT>
                                                <TdBodyLinkT shadow={shadow}>
                                                    <DivTdBody>{transaction['device']}</DivTdBody>
                                                    <Link 
                                                        to={`/ip/${transaction['ip']}`}
                                                        className={shadow ? 'link shadowlink' : 'link lightlink'}
                                                    >
                                                        {transaction['ip']}
                                                    </Link>
                                                </TdBodyLinkT>
                                                <TdBodyT>
                                                    <IdsProducts ids={transaction['product ids']} shadow={shadow}/>
                                                </TdBodyT>
                                            </TrBody>
                                        ))
                                    }
                                    </tbody>
                                </TableT>
                            </div>
                        </FirstBox>
            }
        </Container>
    )
}

export default TableOfTransactions;
