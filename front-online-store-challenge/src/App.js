import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TableBuyers from "./components/TableBuyers/TableBuyers";
import TableOfTransactions from "./components/TableOfTransactions/TableOfTransactions";
import { getIdsBuyers } from "./components/utils/filterData";

function App() {
  const [idBuyer, setIdBuyer] = useState([])
  
  useEffect(() => {
    getIdsBuyers()
      .then(res => setIdBuyer(res))
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
      </Switch>
    </Router>
  );
}

export default App;
