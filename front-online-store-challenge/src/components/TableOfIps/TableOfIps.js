import React, { useEffect, useState } from 'react'
import { BuyerRequest, transactionsTable } from '../utils/filterData';
import nextId from "react-id-generator";
import Loading from '../Loaging/Loading';
import { Li, Ul } from '../IdsProducts/ListStyles';

const TableOfIps = ({ip, shadow}) => {
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
                    ?   <Loading />
                    :   <div>
                            <h1 className={shadow ? 'title shadowTitle' : 'title lightTitle'}>
                                Names of Partners that use same Ip: {ip}
                            </h1>
                            <Ul>
                                {
                                    getNames.map( partnert => (
                                        <Li key={nextId()} shadow={shadow}>{partnert.name}</Li>
                                    ))
                                }
                            </Ul>
                        </div>
                    
            }
        </div>
    )
}

export default TableOfIps;
