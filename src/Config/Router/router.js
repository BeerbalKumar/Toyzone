import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {
    Home,
}
from './../../Containers'
import Checkout from "./../../Containers/Checkout/Checkout"

export default class ReactRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/checkout" component={Checkout} />

                
            </Router>
        )
    }
}