import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TableBuyers from "./components/TableBuyers/TableBuyers";
import { getIdsBuyers } from "./components/utils/filterData";

function App() {
  const [idBuyer, setIdBuyer] = useState([])
  
  useEffect(() => {
    getIdsBuyers()
      .then(res => setIdBuyer(res))
      .catch(error => error)
  }, [])

  console.log(idBuyer);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TableBuyers}/>
        {
          idBuyer.map(id => (
            <Route key={id} exact path={`/buyer/${id}`}/>
          ))
        }
        <Route />
      </Switch>
    </Router>
  );
}

export default App;
