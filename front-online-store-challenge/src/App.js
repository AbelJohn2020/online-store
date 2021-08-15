import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TableBuyers from "./components/TableBuyers/TableBuyers";
import TableOfTransactions from "./components/TableOfTransactions/TableOfTransactions";
import { getIdsBuyers } from "./components/utils/filterData";
import { getTransactionsData } from "./components/utils/utils";
import nextId from "react-id-generator";
import TableOfIps from "./components/TableOfIps/TableOfIps";
import Button from "./components/Buttons/Buttons";

function App() {
  const [idBuyer, setIdBuyer] = useState([])
  const [ips, setIps] = useState([])

  const [shadow, setShadow] = useState(false);
  
  useEffect(() => {
    getIdsBuyers()
      .then(res => setIdBuyer(res))
      .catch(error => error)
    
    getTransactionsData()
      .then(res => setIps(res))
      .catch(error => error)
  }, []);

  const handleClickShadow = () => {
    setShadow(!shadow);
  }

  return (
    <Router>
      <Button 
        handleClickShadow={() => handleClickShadow()} 
        shadow={shadow} 
      />
      <Switch>
        <Route exact path="/">
          <TableBuyers shadow={shadow} />
        </Route>
        {
          idBuyer.map(({id, name}) => (
            <Route key={id} exact path={`/buyer/${id}`}>
                <TableOfTransactions id={id} name={name} shadow={shadow}/>
            </Route>
          ))
        }
        {
          ips.map( ip => (
            <Route key={nextId()} exact path={`/ip/${ip.ip}`}>
                <TableOfIps ip={ip.ip} shadow={shadow}/>
            </Route>
          ))
        }
      </Switch>
    </Router>
  );
}

export default App;
