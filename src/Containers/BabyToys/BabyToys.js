import React from 'react';
import Card from './../../Components/Card/Card'
import Grid from '@material-ui/core/Grid';
import Header from './../../Components/Header/Header';
import SubHeader from './../../Components/SubHeader/subHeadre'
import NavbarPage from './../../Components/Navbar/Navbar';
import FooterPagePro from './../../Components/Footer/Footer';



class BabyToys extends React.Component{
  render(){
    return(
      <div>
      <Header path={this.props.history}/>
     <SubHeader/>
       <NavbarPage  path={this.props.history}/>
<div style={{margin:"5%"}}>
   <center>
     <Grid container justify="center" >

 
      <Grid item lg={3}>
      <Card 
      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Cow--2_275x.gif?v=1577968709"
      productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Cow--1_1024x1024.gif?v=1577968709"
      productDes="Educational Cow With Light And Sound"
      productPrice="1,385"
      />   
      </Grid> 
      <Grid item lg={3}>
      <Card 
      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/50_275x.jpg?v=1577872607"
      productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/51_1024x1024.jpg?v=1577872607"
      productDes="Doraemon Stunt Car"
      productPrice="2,000"
      />   
      </Grid> 
      <Grid item lg={3}>
      <Card 
      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/43_edd65019-43b1-4c8f-8b15-802235affafe_275x.jpg?v=1577865359"
      productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/44_b2796c18-b993-4d0c-aedd-16538128c8c3_1024x1024.jpg?v=1577865359"
      productDes="Flash and Deformation Car with Lights & Music..."
      productPrice="1,100"
      />   
      </Grid> 
      <Grid item lg={3}>
      <Card 
      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/39_275x.jpg?v=1577864320"
      productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/40_1024x1024.jpg?v=1577864320"
      productDes="Super Meng Dolphin with Dreamy Lighting and Music.."
      productPrice="850"
      />   
      </Grid> 
      <Grid item lg={3}>
      <Card 

      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/35_a6d7dacb-b666-4fc1-ac52-b1abba3587ca_275x.jpg?v=1577862327"
      productImage="//cdn.shopify.com/s/files/1/0272/0409/1949/products/36.jpg?v=1577862327"
      productDes="Dancing Dog With Music & Flashing Lights"
      productPrice="900"
      />   
      </Grid> 
      <Grid item lg={3}>
      <Card 
      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/45_c08a6c7b-725c-43a0-b60c-d90a463f1f1b_275x.jpg?v=1577865766"
      productImage="//cdn.shopify.com/s/files/1/0272/0409/1949/products/46.jpg?v=1577865765"
      productDes="Children's toy motorcycle scooter"
      productPrice="950"
      />   
      </Grid> 
      <Grid item lg={3}>
      <Card 
      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/28_275x.jpg?v=1577801821"
      productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/27_1024x1024.jpg?v=1577801821"
      productDes="HELLO-KITTY SLIDE"
      productPrice="1,000"
      />   
      </Grid> 
      <Grid item lg={3}>
      <Card 
      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/21_275x.jpg?v=1577797883"
      productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/22_79333ebe-00b5-4c03-a351-c99f870c7c8e_1024x1024.jpg?v=1577797883"
      productDes="Ring Size Matching Game for Kids"
      productPrice="900"
      />   
      </Grid> 
      <Grid item lg={3}>
      <Card 
      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20_a4de0338-9bda-4eee-9912-6b7c06d90841_275x.jpg?v=1577796757"
      productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20_a4de0338-9bda-4eee-9912-6b7c06d90841_1024x1024.jpg?v=1577796757"
      productDes="Avengers Remote Control Car"
      productPrice="4,775"
      />   
      </Grid> 
      <Grid item lg={3}>
      <Card 

      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/12_29b02d9e-97a4-47e6-8679-5666eb6572b1_275x.jpg?v=1577782543"
      productImage="//cdn.shopify.com/s/files/1/0272/0409/1949/products/11.jpg?v=1577782543"
      productDes="Happy Time Funny Squirrel"
      productPrice="870"
      />   
      </Grid> 
      <Grid item lg={3}>
      <Card 

      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/8_275x.jpg?v=1577780509"
      productImage="//cdn.shopify.com/s/files/1/0272/0409/1949/products/9.jpg?v=1577780509"
      productDes="Playmate Cute Elephant"
      productPrice="750"
      />   
      </Grid> 

      <Grid item lg={3}>
      <Card 

      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/7_275x.jpg?v=1577779891"
      productImage="//cdn.shopify.com/s/files/1/0272/0409/1949/products/6.jpg?v=1577779891"
      productDes="Happy Time Cartoon Dog"
      productPrice="820"
      />   
      </Grid> 
      <Grid item lg={3}>
      <Card 

      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/4_df2a503a-54b9-40c5-a2f1-7b20fe65f11f_275x.jpg?v=1577778377"
      productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/5_1024x1024.jpg?v=1577778377"
      productDes="Ferocious 5D Sports Car"
      productPrice="670"
      />   
      </Grid> 
      <Grid item lg={3}>
      <Card 

      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/2_100b30e4-36f8-49a4-8444-251e87df1d4d_275x.jpg?v=1577776877"
      productImage="//cdn.shopify.com/s/files/1/0272/0409/1949/products/1_a1422a88-c08a-4242-adc4-6bd68002146c.jpg?v=1577776877"
      productDes="Spider-Car 3"
      productPrice="999"
      />   
      </Grid> 
      <Grid item lg={3}>
      <Card 
      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Chicken-1_275x.jpg?v=1578059253"
      productImage="//cdn.shopify.com/s/files/1/0272/0409/1949/products/Chicken-6_57cba167-7d96-41a1-a4d2-3a6bd0352deb.jpg?v=1578059253"
      productDes="Eggs laying Walking Hen"
      productPrice="1,245"
      />   
      </Grid> 
      <Grid item lg={3}>
      <Card 
      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Musical-house-with-light-2_275x.jpg?v=1576594646"
      productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Musical-house-with-light-3_1024x1024.jpg?v=1576594646"
      productDes="Happy Pony with Electric Flash Lights"
      productPrice="850"
      />   
      </Grid> 
      <Grid item lg={3}>
      <Card 
      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/ATV-3_275x.jpg?v=1578060499"
      productImage="//cdn.shopify.com/s/files/1/0272/0409/1949/products/bike_bac748cc-fa1a-45ff-b7ed-39f1b5fc3a8f.jpg?v=1578060499"
      productDes="Metal Mini - ATV Bike"
      productPrice="750"
      />   
      </Grid> 
      <Grid item lg={3}>
      <Card 
      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Bus-1_01a509fc-b464-4286-bc3f-0796c0da754b_275x.jpg?v=1576236746"
      productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Bus-1_01a509fc-b464-4286-bc3f-0796c0da754b_1024x1024.jpg?v=1576236746"
      productDes="Metal Mini - Bus"
      productPrice="750"
      />   
      </Grid> 
      <Grid item lg={3}>
      <Card 

      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Moter-Travel_275x.jpg?v=1578060319"
      productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Moter-Travel_2bcbb357-47d2-43cb-bddb-372905e5bf73_1024x1024.jpg?v=1578060319"
      productDes="Friction Motor Travel"
      productPrice="450"
      />   
      </Grid> <Grid item lg={3}>
      <Card 
      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Moto-Animal--1_275x.jpg?v=1576233284"
      productImage="//cdn.shopify.com/s/files/1/0272/0409/1949/products/Moto-Animal--2.jpg?v=1576233284"
      productDes="Moto Animal Pressure Car"
      productPrice="499"
      />   
      </Grid> 
      <Grid item lg={3}>
      <Card 
      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Mickey-Mouse_275x.jpg?v=1576231863"
      productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Mickey-Mouse-1_1024x1024.jpg?v=1576231863"
      productDes="Mickey And Minnie Mouse Pressure Car"
      productPrice="499"
      />   
      </Grid> 
      <Grid item lg={3}>
      <Card 
      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Avengers-2_275x.jpg?v=1576231438"
      productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Avengers-1_1024x1024.jpg?v=1576231438"
      productDes="Avengers Pressure Car"
      productPrice="499"
      />   
      </Grid> 
      <Grid item lg={3}>
      <Card 
      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Bubble-1_275x.jpg?v=1576148360"
      productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Bubble-1_1024x1024.jpg?v=1576148360"
      productDes="Bubble Hand Carry Blaster"
      productPrice="850"
      />   
      </Grid> 
      <Grid item lg={3}>
      <Card 

      productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Unicorn-Bubble-Gun-1_275x.jpg?v=1576070317"
      productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Unicorn-Bubble-Gun-1_1024x1024.jpg?v=1576070317"
      productDes="Unicorn Bubble Gun"
      productPrice="999"
      />   
      </Grid> 
      </Grid>
    </center>   
</div>
<FooterPagePro/>
</div>
    )
  }
}

export default BabyToys;