import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {
    Home,
    Vehicles,
    ToyForBoys,
    ToysForGirls,
    BabyToys,
    NewArrival,
    FlashSale,
    WinterBigSale,
    Login,
    Signup
}
from './../../Containers'
import Checkout from "./../../Containers/Checkout/Checkout"

import Blog from "./../../Containers/Blog/Blog"

export default class ReactRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/Vehicles" component={Vehicles} />
                <Route exact path="/ToyForBoys" component={ToyForBoys} />
                <Route exact path="/ToysForGirls" component={ToysForGirls} />
                <Route exact path="/BabyToys" component={BabyToys} />
                <Route exact path="/NewArrival" component={NewArrival} />
                <Route FlashSale path="/FlashSale" component={FlashSale} />
                <Route FlashSale path="/WinterBigSale" component={WinterBigSale} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/viewCart" component={Blog} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
            </Router>
        )
    }
}