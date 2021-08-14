import React, { useEffect, useState } from "react";
import { getBuyersData, getProductsData, getTransactionsData } from "./components/utils/utils";

function App() {
  const [products, setProducts] = useState({
    data:[],
    loading: true,
  });

  const [buyers, setBuyers] = useState({
    data:[],
    loading: true,
  });

  const [transactions, setTransactions] = useState({
    data:[],
    loading: true,
  });

  useEffect(() => {
    getProductsData()
      .then(res => setProducts({
        data: res,
        loading: false,
      }))
      .catch(e => e);

    getBuyersData()
      .then(res => setBuyers({
        data: res,
        loading: false,
      }))
      .catch(e => e);

    getTransactionsData()
      .then(res => setTransactions({
        data: res,
        loading: false,
      }))
      .catch(e => e)
  }, []);

  console.log(products);
  console.log(buyers);
  console.log(transactions);
  return (
    <div className="App">
      <h1>Online store Challenge</h1>
    </div>
  );
}

export default App;
