import React from 'react';
import Card from './../../Components/Card/Card'
import Grid from '@material-ui/core/Grid';
import Header from './../../Components/Header/Header';
import SubHeader from './../../Components/SubHeader/subHeadre'
import NavbarPage from './../../Components/Navbar/Navbar'
import CarouselPage from './../../Components/Slider/Slider';
import CardSlider from './../../Components/CardSlider/CardSlider';
import './Home.css'


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [
        {
          src: "https://cdn.shopify.com/s/files/1/0272/0409/1949/collections/Toys-For-Baby_1024x1024.png?v=1575626558"
        },
        {
          src: "https://cdn.shopify.com/s/files/1/0272/0409/1949/collections/Action-Figures_1024x1024.png?v=1575626649"
        },
        {
          src: "https://cdn.shopify.com/s/files/1/0272/0409/1949/collections/Remote-Cars_1024x1024.png?v=1575626679"
        },
        {
          src: "https://cdn.shopify.com/s/files/1/0272/0409/1949/collections/Girls-Costume_1024x1024.png?v=1575626717"
        },
        {
          src: "https://cdn.shopify.com/s/files/1/0272/0409/1949/collections/Boys-Costume_1024x1024.png?v=1575626743"
        },
        {
          src: "https://cdn.shopify.com/s/files/1/0272/0409/1949/collections/Toys-For-Baby_1024x1024.png?v=1575626558"
        },
        {
          src: "https://cdn.shopify.com/s/files/1/0272/0409/1949/collections/Toys-For-Baby_1024x1024.png?v=1575626558"
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Header />
        <br />
        <SubHeader />
        <NavbarPage />
        <CarouselPage />

        <div style={{ margin: "5%" }}>

          {/* <center>
     <Grid container justify="center" >
     <Grid item lg={3} xs={12}>
      <Card 
      productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/lol_275x.jpg?v=1578057758"
      productDes="I am a very simple card. I am good at containing small bits of"
      productPrice="14,50"
      />   
      </Grid> 
      <Grid item lg={3} xs={12}>
      <Card 
      productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/lol_275x.jpg?v=1578057758"
      productDes="I am a very simple card. I am good at containing small bits of"
      productPrice="14,50"
      />   
      </Grid>
      <Grid item lg={3} xs={12}>
      <Card 
      productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/lol_275x.jpg?v=1578057758"
      productDes="I am a very simple card. I am good at containing small bits of"
      productPrice="14,50"
      />   
      </Grid>
      </Grid>
    </center>    */}
        </div>
        <h1 className="cartHeading">Popular Categories</h1>
        <CardSlider>
          {
            this.state.images.map((v, i) => {
              return (
                <div>
                  <div>
                    <img src={v.src} style={{ margin: "auto", width: "80%" }} />
                  </div>
                </div>
              )
            })
          }
        </CardSlider>
        <br /><br /><br />



        <h1 className="cartHeading">Flash Deals</h1>
        <CardSlider>
          {
            this.state.images.map((v, i) => {
              return (
                <div>
                  <div>
                    <center>
                      <Card
                        productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Holland-Popular-Famous-Lardmark-Souvenir-Windmill-Metal-Model-For-Decor_1024x1024_de9a46f1-0027-4d4b-ad4f-cf0aa5cf62e3_275x.jpg?v=1578056720"
                        productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163244_275x.jpg?v=1578056720"
                        productDes="I am a very simple card. I am good at containing small bits of"
                        productPrice="14,50"
                      />
                    </center>
                  </div>
                </div>
              )
            })
          }
        </CardSlider>

      </div>
    )
  }
}

export default Home;
