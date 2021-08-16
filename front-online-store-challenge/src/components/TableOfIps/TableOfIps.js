import React, { useEffect, useState } from 'react'
import { BuyerRequest, ProductsTable, transactionsTable } from '../utils/filterData';
import nextId from "react-id-generator";
import Loading from '../Loaging/Loading';
import { Container, FirstBox, Table, TdBody, ThHeader, TrBody, TrHeader } from '../TableBuyers/TableBuyersStyles';
import { Li, Ul } from '../IdsProducts/ListStyles';
import { Div, ThHeaderCenter } from './TableOfIpsStyles';

const TableOfIps = ({ip, shadow}) => {
    const [transactions, setTransactions] = useState({
        dataT:[],
        loadingT: true,
    });
    const [buyers, setBuyers] = useState({
        dataB:[],
        loadingB: true,
    });

    const [products, setProducts] = useState({
        dataP:[],
        loadingP: true,
    })

    const { dataB } = buyers;
    const { dataP } = products
    const { dataT, loadingT} = transactions;
  
    useEffect(() => {
        transactionsTable(setTransactions)
        BuyerRequest(setBuyers);
        ProductsTable(setProducts);
    }, []);

    const getPartnertsWithTheSameIp = () => {
        return dataT.filter( transaction => transaction.ip === ip)
    };

    const getPartnerts = getPartnertsWithTheSameIp()
    
    const compare = () => {
        if(getPartnerts.length !== 0) {
            const filterTransactions = getPartnerts.map( transaction => transaction["buyer id"]);
            return dataB.filter( partnert => filterTransactions.includes(partnert['id']));
        } else {
            return getPartnerts;
        }
    };
    
    const getNames = compare();

    const getidProductsByTransactions = () => {
        if(getPartnerts.length !== 0) {
            const filterTransactions = getPartnerts.map( transaction => transaction["product ids"])
            return dataP.filter( product => filterTransactions.includes(product['id']))
        } else {
            return getPartnerts;
        }
    };

    const recomendProducts = getidProductsByTransactions();

    const getArrBuyersPLusProducts = () => {
        return getNames.map(partnert => {
            return {
             partnert: partnert.name,
             product: recomendProducts.map( ({name}) => name),
             price: recomendProducts.map( ({price}) => price)
            }
        })
    };

    const recomendations = getArrBuyersPLusProducts();

    return (
        <Container>
            {
                loadingT
                    ?   <Loading />
                    :   <FirstBox>
                            <h1 className={shadow ? 'title shadowTitle' : 'title lightTitle'}>
                                Names of Partners that use same Ip: {ip}
                            </h1>
                            <hr />
                            <Div>
                                <Table>
                                    <thead>
                                        <TrHeader>
                                            <ThHeader>names</ThHeader>
                                            <ThHeaderCenter>product</ThHeaderCenter>
                                            <ThHeaderCenter>price</ThHeaderCenter>
                                        </TrHeader>
                                    </thead>
                                    <tbody>
                                        {
                                            recomendations.map(({partnert, product, price}) => (
                                                <TrBody key={nextId()} shadow={shadow}>
                                                    <TdBody>{partnert}</TdBody>
                                                    <TdBody>
                                                        <Ul>
                                                            {
                                                                product.map( prod => (
                                                                    <Li key={nextId()}>{prod}</Li>
                                                                ))
                                                            }
                                                        </Ul>
                                                    </TdBody>
                                                    <TdBody>
                                                        <Ul>
                                                            {
                                                                price.map( pric => (
                                                                    <Li key={nextId()}>{pric}</Li>
                                                                ))
                                                            }
                                                        </Ul>
                                                    </TdBody>
                                                </TrBody>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </Div>
                        </FirstBox>
                    
            }
        </Container>
    )
}

export default TableOfIps;
