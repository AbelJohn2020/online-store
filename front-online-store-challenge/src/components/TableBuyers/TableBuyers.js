import React, { useEffect, useState } from 'react'
import { filterDataB } from '../utils/filterData';
import { getBuyersData } from '../utils/utils';

const TableBuyers = () => {
    // const [products, setProducts] = useState({
  //   dataP:[],
  //   loadingP: true,
  // });

  const [buyers, setBuyers] = useState({
    dataB:[],
    loadingB: true,
  });

  // const [transactions, setTransactions] = useState({
  //   dataT:[],
  //   loadingT: true,
  // });

  // const { dataP, loadingP } = products;
  const { dataB, loadingB } = buyers;
  // const { dataT, loadingT } = transactions;
  
  useEffect(() => {
    // getProductsData()
    //   .then(res => setProducts({
    //     dataP: res,
    //     loading: false,
    //   }))
    //   .catch(e => e);

    getBuyersData()
      .then(res => setBuyers({
        dataB: res,
        loading: false,
      }))
      .catch(e => e);

    // getTransactionsData()
    //   .then(res => setTransactions({
    //     dataT: res,
    //     loading: false,
    //   }))
    //   .catch(e => e)
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
