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

import Blog from "./../../Containers/Blog/Blog"

export default class ReactRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/checkout" component={Checkout} />

                <Route exact path="/blog" component={Blog} />
                
            </Router>
        )
    }
}