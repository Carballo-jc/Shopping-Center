import React from "react";
import { BrowserRouter , Route,Switch} from 'react-router-dom';
import "../styles/app.css";
import Home from '../container/Home'
import Checkout from "../container/Checkout";
import Information from "../container/Information";
import Payment from "../container/Payment";
import Success from "../container/Success";
import NotFount from "../container/NotFound";
import Layout from "../components/Layout";

const App = () => {
  return (
       <BrowserRouter>
       <Layout /> 
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/checkout'} component={Checkout} />
        <Route exact path={'/checkout/information'} component={Information} />
        <Route exact path={'/checkout/payment'} component={Payment} />
        <Route exact path={'/checkout/success'} component={Success} />
        <Route component={NotFount} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
