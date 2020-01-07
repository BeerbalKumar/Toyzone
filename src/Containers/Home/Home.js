import React from 'react';
import Card from './../../Components/Card/Card'
import Grid from '@material-ui/core/Grid';
import Header from './../../Components/Header/Header';
import SubHeader from './../../Components/SubHeader/subHeadre'
import NavbarPage from './../../Components/Navbar/Navbar'
import CarouselPage from './../../Components/Slider/Slider'

class Home extends React.Component{
  render(){
    return(
      <div>
<Header/>
<br/>
<SubHeader/>
<NavbarPage/>
<CarouselPage/>
      
<div style={{margin:"5%"}}>
  
   <center>
     <Grid container justify="center" >
     <Grid item lg={3}>
      <Card 
      productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/lol_275x.jpg?v=1578057758"
      productDes="I am a very simple card. I am good at containing small bits of"
      productPrice="14,50"
      />   
      </Grid> 
      </Grid>
    </center>   
</div>
</div>
    )
  }
}

export default Home;
