import React, { useEffect, useState } from 'react'
import { BuyerRequest, transactionsTable } from '../utils/filterData';
import nextId from "react-id-generator";

const TableOfIps = ({ip}) => {
    const [transactions, setTransactions] = useState({
        dataT:[],
        loadingT: true,
    });
    const [buyers, setBuyers] = useState({
        dataB:[],
      });

    const { dataB } = buyers;
    const { dataT, loadingT} = transactions;
  
    useEffect(() => {
        transactionsTable(setTransactions)
        BuyerRequest(setBuyers);
    }, []);

    const getPartnertsWithTheSameIp = () => {
        return dataT.filter( transaction => transaction.ip === ip)
    }

    const getPartnerts = getPartnertsWithTheSameIp()
    
    const compare = () => {
        if(getPartnerts.length !== 0) {
            const filterTransactions = getPartnerts.map( transaction => transaction["buyer id"]);
            return dataB.filter( partnert => filterTransactions.includes(partnert['id']));
        } else {
            return getPartnerts;
        }
    }
    
    const getNames = compare();

    return (
        <div>
            {
                loadingT
                    ?   <div>loading...</div>
                    :   <ul>
                            {
                                getNames.map( partnert => (
                                    <li key={nextId()}>{partnert.name}</li>
                                ))
                            }
                        </ul>
                    
            }
        </div>
    )
}

export default TableOfIps;
