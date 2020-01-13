import React from 'react';
import Card from './../../Components/Card/Card'
import Grid from '@material-ui/core/Grid';
import Header from './../../Components/Header/Header';
import SubHeader from './../../Components/SubHeader/subHeadre'
import NavbarPage from './../../Components/Navbar/Navbar';
import FooterPagePro from './../../Components/Footer/Footer';

class FlashSale extends React.Component {
  render() {
    return (
      <div>
        <Header path={this.props.history} />
        <SubHeader />
        <NavbarPage path={this.props.history} />
        <div style={{ margin: "5%" }}>
          <center>
            <Grid container justify="center" >


              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163244_275x.jpg?v=1578056720"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Holland-Popular-Famous-Lardmark-Souvenir-Windmill-Metal-Model-For-Decor_1024x1024_de9a46f1-0027-4d4b-ad4f-cf0aa5cf62e3_1024x1024.jpg?v=1578056720"
                  productDes="Metal Souvenir - Windmill Holland"
                  productPrice="1,745"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163021_275x.jpg?v=1578057045"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163021_1024x1024_06894094-c0a5-4cbc-a037-972849d7f71a_1024x1024.jpg?v=1578057045"
                  productDes="Metal Souvenir - Twin Tower Malaysia"
                  productPrice="1,745 "
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163947_275x.jpg?v=1578057214"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163947_8d6f3235-9fca-4fb2-bd1e-8a59a1ce8bc7_1024x1024.jpg?v=1578057214"
                  productDes="Metal Souvenir - Burj Khalifa"
                  productPrice="725"
                />
              </Grid>

              <Grid item lg={3}>
                <Card

                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163034_275x.jpg?v=1578057364"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163034_50922f37-75c4-4946-af84-c350ef329c11_1024x1024.jpg?v=1578057364"
                  productDes="Metal Souvenir - Statue of Liberty USA"
                  productPrice="1,295"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_162525_275x.jpg?v=1578057502"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_162525_a4dc13ab-df94-4d58-aa6f-44530758f271_1024x1024.jpg?v=1578057502"
                  productDes="Metal Souvenir - Eiffel Tower"
                  productPrice="350"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/lol_275x.jpg?v=1578057758"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Capture_1024x1024.jpg?v=1578057758"
                  productDes="LOL Super Bigse"
                  productPrice="4,995"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/71KIFd18MmL._AC_SL1500_275x.jpg?v=1578058323"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/71KIFd18MmL._AC_SL1500_e8b2b0c5-9c15-4d35-a075-c8b84628768f_1024x1024.jpg?v=1578058323"
                  productDes="Pretend Play Fashion Briefcase With Shoulder Bag"
                  productPrice="1,450 "
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/HTB1AZAyaUGF3KVjSZFmq6zqPXXaP_275x.jpg?v=1578058484"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/46b534f0-9f92-45df-a941-1adfd111b518.jpg_600x800x80_4dd7642a-9f95-47ef-be7c-05f1471a0b2d_1024x1024.jpg?v=1578058484"
                  productDes="Pretend Play Tool Briefcase With Shoulder Bag"
                  productPrice="1,450"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Kitchen-008-931A-4_275x.jpg?v=1578058727"
                  productImage="//cdn.shopify.com/s/files/1/0272/0409/1949/products/22_de863807-b1d5-414c-bd20-7de787b6736c.jpg?v=1578058727"
                  productDes="Little Kitchenware Briefcase - Shoulder Bag"
                  productPrice="1,450"
                />
              </Grid>
              <Grid item lg={3}>
                <Card

                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Chicken-1_275x.jpg?v=1578059253"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Chicken-6_57cba167-7d96-41a1-a4d2-3a6bd0352deb_1024x1024.jpg?v=1578059253"
                  productDes="Eggs laying Walking Hen"
                  productPrice="1,245"
                />
              </Grid>
              <Grid item lg={3}>
                <Card

                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/SM-1_275x.jpg?v=1578059412"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/SM-1_74b29ab9-3bd6-4ca2-8191-5c16b52605ed_1024x1024.jpg?v=1578059412"
                  productDes="Avengers Mask Sunglasses - Iron Man"
                  productPrice="550"
                />
              </Grid>

              <Grid item lg={3}>
                <Card

                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/C-1_275x.jpg?v=1578059570"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/C-1_0e303eec-b924-46c2-996a-a81d5deb4d98_1024x1024.jpg?v=1578059570"
                  productDes="Avengers Mask Sunglasses - Captain America"
                  productPrice="550"
                />
              </Grid>
              <Grid item lg={3}>
                <Card

                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Cream-mud_275x.jpg?v=1578059841"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Cream-mud_1b0ab90f-9364-406c-986a-ac577096fa6d_1024x1024.jpg?v=1578059841"
                  productDes="Magic Fruits Cream Slime Mud"
                  productPrice="495"
                />
              </Grid>
              <Grid item lg={3}>
                <Card

                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Unicorn-1_275x.jpg?v=1578059686"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Unicorn-1_8471813f-92ea-4f84-be86-25deeea34d39_1024x1024.jpg?v=1578059686"
                  productDes="Unicorn Surprise Egg"
                  productPrice="350"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/535c3068-ecd0-467c-be93-c26695cf7fb0_275x.jpg?v=1576742465"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Small-Sand_1024x1024.jpg?v=1576742465"
                  productDes="Amazing Fantastic Sand - Small"
                  productPrice="650"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Roller-1_275x.jpg?v=1578059933"
                  productImage="//cdn.shopify.com/s/files/1/0272/0409/1949/products/Roller-1_653db034-bdee-45d3-b665-f6bebca91bb2.jpg?v=1578059933"
                  productDes="DIY Truck Assembly - Roller"
                  productPrice="1,595"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Mixer-1_275x.jpg?v=1578060099"
                  productImage="//cdn.shopify.com/s/files/1/0272/0409/1949/products/mixer.jpg?v=1578060099"
                  productDes="DIY Truck Assembly - Mixer"
                  productPrice="1,595"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Dumper_275x.jpg?v=1578060210"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Dumper_b585da97-16b5-47c3-a7f3-c2500072afee_1024x1024.jpg?v=1578060210"
                  productDes="DIY Truck Assembly - Dumper"
                  productPrice="1,595"
                />
              </Grid>
              <Grid item lg={3}>
                <Card

                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/ATV-3_275x.jpg?v=1578060499"
                  productImage="//cdn.shopify.com/s/files/1/0272/0409/1949/products/bike_bac748cc-fa1a-45ff-b7ed-39f1b5fc3a8f.jpg?v=1578060499"
                  productDes="Metal Mini - ATV Bike"
                  productPrice="750"
                />
              </Grid> <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Moter-Travel_275x.jpg?v=1578060319"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Moter-Travel_2bcbb357-47d2-43cb-bddb-372905e5bf73_1024x1024.jpg?v=1578060319"
                  productDes="Friction Motor Travel"
                  productPrice="450"
                />
              </Grid>

            </Grid>
          </center>
        </div>
        <FooterPagePro />
      </div>
    )
  }
}

export default FlashSale;