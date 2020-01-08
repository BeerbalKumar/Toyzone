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
    ToysForGirls
}
from './../../Containers'


export default class ReactRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/Vehicles" component={Vehicles} />
                <Route exact path="/ToyForBoys" component={ToyForBoys} />
                <Route exact path="/ToysForGirls" component={ToysForGirls} />




            </Router>
        )
    }
}