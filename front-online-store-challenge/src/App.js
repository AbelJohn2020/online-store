import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TableBuyers from "./components/TableBuyers/TableBuyers";
import TableOfTransactions from "./components/TableOfTransactions/TableOfTransactions";
import { getIdsBuyers } from "./components/utils/filterData";
import { getTransactionsData } from "./components/utils/utils";
import nextId from "react-id-generator";
import TableOfIps from "./components/TableOfIps/TableOfIps";

function App() {
  const [idBuyer, setIdBuyer] = useState([])
  const [ips, setIps] = useState([])
  
  useEffect(() => {
    getIdsBuyers()
      .then(res => setIdBuyer(res))
      .catch(error => error)
    
    getTransactionsData()
      .then(res => setIps(res))
      .catch(error => error)
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TableBuyers}/>
        {
          idBuyer.map(({id, name}) => (
            <Route key={id} exact path={`/buyer/${id}`}>
                <TableOfTransactions id={id} name={name}/>
            </Route>
          ))
        }
        {
          ips.map( ip => (
            <Route key={nextId()} exact path={`/ip/${ip.ip}`}>
                <TableOfIps ip={ip.ip}/>
            </Route>
          ))
        }
      </Switch>
    </Router>
  );
}

export default App;
