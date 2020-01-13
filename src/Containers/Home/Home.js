import React from 'react';
import Card from './../../Components/Card/Card'
import Grid from '@material-ui/core/Grid';
import Header from './../../Components/Header/Header';
import SubHeader from './../../Components/SubHeader/subHeadre'
import NavbarPage from './../../Components/Navbar/Navbar'
import CarouselPage from './../../Components/Slider/Slider';
import CardSlider from './../../Components/CardSlider/CardSlider';
import './Home.css';
import Toyzone from './../../images/toyzone.png';
import FooterPagePro from './../../Components/Footer/Footer'


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
      <div style={{margin:"0px"}}>
        <Header />
        <br />
        <SubHeader />
        <NavbarPage />
        <CarouselPage />

        <div style={{width:"98%",margin:"auto"}}>
       
        <h1 className="cartHeading">Popular Categories</h1>
        <CardSlider>
          {
            this.state.images.map((v, i) => {
              return (
                <div>
                    <img src={v.src} style={{ margin: "auto", width: "80%" }} />
                </div>
              )
            })
          }
        </CardSlider>
  
        </div>




        <div className="flashDeals">
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





        <div className="newArrivals">
          <h1 className="cartHeading">New Arrivals</h1>
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




        <div className="bestSellers">
          <h1 className="cartHeading">Best Sellers</h1>
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


        <div className="shopBrands">
          <h1 className="cartHeading">Shop By Brands</h1>
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
        </div>


      <div className="">
        <Grid container justify="center">
          <Grid item lg={6} xs={8}>
           <img src={Toyzone} className="toyzoneImage"/>
          </Grid>
          <Grid item lg={6} xs={8}>
            <div className="paragraph">
              <h4>Buy Toys For Kids & Baby Toys Online In Pakistan</h4>
              <p>Buy Toys for Kids & Babies Online at Toy Zone. Toy Zone offers wide range of Baby Toys, Remote Control Cars, Kids Kitchen Sets, Doll Houses which include Barbie Dream Houses, Car Toys, Dolls & all other Toys for kids. So feel free to Buy Toys Online in Pakistan because the toy story is about to begin.</p>
              <p>Toys play a crucial role in the upbringing and character development of a child. As your child grows, he or she tries to stretch their imagination, and seek multiple conclusions regarding how various toys work, which in return gives them an enjoyable time. From keeping your kids busy in a productive activity to fostering physical, mental, social, and emotional development, no doubt, toys have a pivotal role when it comes to constructing a positive personality in your little one.</p>
              <p>At Toy Zone, we fulfill all the “play time” needs of your children by providing them with the best toys in Pakistan. As you explore our online store, you will find all types of toys from educational ones like puzzles, board games, to remote control RC cars, stuffed animals, Barbie dolls for girls, Lego (for both boys and girls), drones, and you name it!</p>
              <p>Regardless of whether you have toddlers or older kids, we have a plethora of high-quality toys for sale just a few simple clicks away.</p>
              <p>Choose from a Wide Range of High-Quality Toys for Sale</p>
              <p>At Toy Zone, you can take your time to explore our captivating kid’s world online, which boasts an array of unique and amazing collection of toys for toddlers, infants, and preschool kids. We have everything you are searching for to make your kid’s playtime a fun and exciting one. For outdoor fun activities, you can buy flexible slides and swimming pools. To make indoor activities interesting, explore our collection of board games, play sets, blocks and stacking and much more.</p>
              <p>For your little girls, we have playsets like kitchen sets, Barbie dolls, play makeup sets, and more. Explore our collection of amazing toys that you can buy from the comfort of your home and have them delivered to your doorstep in no time.</p>
              <p>Browse Our Categories</p>
              <p>Toy Zone is here to make parenting easier so that you can keep your kids busy. As you explore our store online, you will find high-quality toys for sale that fit all age groups and moods. When you browse our categories, you will find:</p>
              <p>Frozen Toys for Sale in Pakistan</p>
              <p>Dolls, house sets, kitchen sets, lunch box and water bottle sets, and more, we have a category dedicated to the special Disney cartoon “Frozen toys” for your little girl. Find some unique toys like Frozen Fever Anna Doll with Carriage, Frozen Angel Girl | Flashing Light & Sound, Frozen Fever Anna Fashion Doll and much more at best prices in Pakistan.</p>
              <p>Lego</p>
              <p>Welcome to our Lego shop, where you can find some interesting puzzles and much more to keep your little ones busy. Choose from special Lego box sets like LEGO Super Heroes, Lego Duplo, Lego Ninjago, Lego NEXO Knights, Lego Star Wars, Lego City, Lego Disney and more.</p>
              <p>Other categories you can buy toys online in Pakistan from at Toy Zone include Barbie Dreamotpia, Hasbro Game Channel, Fisher Price, and more.</p>
              <p>The options are quite endless here at Toy Zone. Our toys and baby products for sale in Pakistan give you the chance to bond well with your child and understand them much better. With easy online shopping options, re-live a little bit of your childhood with your little ones. Make time to not just place an order here, but to play with your kids!</p>
            </div>
          </Grid>
        </Grid>
      </div>



      <FooterPagePro/>

      </div>
    )
  }
}

export default Home;
