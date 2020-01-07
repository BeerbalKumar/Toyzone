import React from 'react'
import './Card.css'
import Button from '@material-ui/core/Button';


export default class Card extends React.Component {
constructor(){
    super();
    this.state={
       cartTitle:"",
       background:"",
       button:"",
       buttonBackground:"transparent"
    }
}




render(){
    return (

        <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image"
         onMouseOver={()=>this.setState({cartTitle:"SAVE 100%",background:"black",button:"SAVE 100%",buttonBackground:"black"})}
         onMouseOut={()=>this.setState({cartTitle:"",background:"",button:"",buttonBackground:"transparent"})}
         >
    <Button 
    style={{backgroundColor:this.state.buttonBackground}} variant="contained" disableElevation>
      {this.state.button}
    </Button>
         <div className="card-titleName" style={{backgroundColor:this.state.background}}>
         {this.state.cartTitle}
         </div>
        </div>
        <div className="card-content">
          <p>
              I am a very simple card. I am good at containing small bits of
              I am a very simple card. I am good at containing small bits of  
        </p>
        <Button variant="contained" color="primary" disableElevation>
      ADD TO CART
    </Button>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
  
  
);
}
}
