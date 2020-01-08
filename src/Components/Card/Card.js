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

        <div style={{margin:"5%"}}>
    <div>
      <div className="card">
        <div className="card-image"
        style={{backgroundImage:`url(${this.props.productImage})`}}
         onMouseOver={()=>this.setState({cartTitle:"SAVE 100%",background:"black",button:"SAVE 100%",buttonBackground:"black"})}
         onMouseOut={()=>this.setState({cartTitle:"",background:"",button:"",buttonBackground:"transparent"})}
         >
    <Button 
    color="primary"
    style={{backgroundColor:this.state.buttonBackground,marginTop:"60px"}}
     variant="contained" disableElevation>
      {this.state.button}
    </Button>
         <div className="card-titleName" style={{backgroundColor:this.state.background}}>
         {this.state.cartTitle}
         </div>
        </div>
        <div className="card-content">
          <p>
              {
                this.props.productDes
              }
        </p>
        <br/>
        <Button variant="contained" color="primary" disableElevation>
      ADD TO CART
    </Button>
    <br/><br/>
    <h2>
      RS. 
      {this.props.productPrice}
    </h2>
    
  <div >
    <div  style={{width:"25%"}}></div>
  </div>
        </div>

      </div>
    </div>
  </div>
  
  
);
}
}
