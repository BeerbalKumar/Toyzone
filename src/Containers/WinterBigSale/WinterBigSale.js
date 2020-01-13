import React from 'react';
import Card from './../../Components/Card/Card'
import Grid from '@material-ui/core/Grid';
import Header from './../../Components/Header/Header';
import SubHeader from './../../Components/SubHeader/subHeadre'
import NavbarPage from './../../Components/Navbar/Navbar';
import FooterPagePro from './../../Components/Footer/Footer';

class WinterBigSale extends React.Component {
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
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_162829_275x.jpg?v=1577368986"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_162829_1024x1024.jpg?v=1577368986"
                  productDes="Metal Souvenir - Makkah Royal Clock Tower"
                  productPrice="1,895"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163138_275x.jpg?v=1577372717"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163115_1024x1024.jpg?v=1577372717"
                  productDes="Metal Souvenir - British Mailbox"
                  productPrice="1,245"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/DSC_0304_2000x_c4960c72-5e20-4b0b-87fe-3f101bc3c2f2_275x.jpg?v=1577370226"
                  productImage="//cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163859.jpg?v=1577370167"
                  productDes="Metal Souvenir - Triumph Arch France"
                  productPrice="1,265"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163305_275x.jpg?v=1577368078"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/15-cm-altura-el-London-Eye-rueda-cielo-Ferris-Inglaterra-recuerdos-edificio-modelo-Color-del-Metal_1024x1024.jpg?v=1577368078"
                  productDes="Metal Souvenir - The London Eye"
                  productPrice="Sold Out"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163738_275x.jpg?v=1577373686"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163723_1024x1024.jpg?v=1577373686"
                  productDes="Metal Souvenir - Pyramid Egyptian 3in1"
                  productPrice="1,250"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163501_275x.jpg?v=1577372264"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163452_1024x1024.jpg?v=1577372264"
                  productDes="Metal Souvenir - Merlion Singapore"
                  productPrice="1,265"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/fde2eb13b81f5080_275x.jpg?v=1577357581"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163633_1024x1024.jpg?v=1577357581"
                  productDes="Souvenir London Telephone Box - Coin Box"
                  productPrice="750"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/fde2eb13b81f5080_275x.jpg?v=1577357581"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163633_1024x1024.jpg?v=1577357581"
                  productDes="Souvenir London Telephone Box - Coin Box"
                  productPrice="750"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_162812_275x.jpg?v=1577365697"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163758_1024x1024.jpg?v=1577373842"
                  productDes="Metal Souvenir - London Big Ben"
                  productPrice="1,275"
                />
              </Grid>
              <Grid item lg={3}>
                <Card

                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163844_275x.jpg?v=1577371807"
                  productImage="//cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163835.jpg?v=1577371807"
                  productDes="Metal Souvenir - Russian Red Square"
                  productPrice="Sold Out "
                />
              </Grid>
              <Grid item lg={3}>
                <Card

                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_164052_275x.jpg?v=1577366748"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_164039_1024x1024.jpg?v=1577366694"
                  productDes="Metal Souvenir - London Tower Bridge Large"
                  productPrice="2,450"
                />
              </Grid>

              <Grid item lg={3}>
                <Card

                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/HTB12lkPNVXXXXaFaFXXq6xXFXXXN_275x.jpg?v=1577365331"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163528_1024x1024.jpg?v=1577365331"
                  productDes="Metal Souvenir - Tower of Pisa Italy"
                  productPrice="1,399"
                />
              </Grid>

              <Grid item lg={3}>
                <Card

                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Die-Cast-Volkswagen-Bus-1_275x.jpg?v=1576241163"
                  productImage="//cdn.shopify.com/s/files/1/0272/0409/1949/products/Die-Cast-Volkswagen-Bus-1.jpg?v=1576241163"
                  productDes="Die-Cast Volkswagen Bus 1:32 Scale"
                  productPrice="1,079"
                />
              </Grid>
              <Grid item lg={3}>
                <Card

                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Moto-Animal--1_275x.jpg?v=1576233284"
                  productImage="//cdn.shopify.com/s/files/1/0272/0409/1949/products/Moto-Animal--2.jpg?v=1576233284"
                  productDes="Moto Animal Pressure Car"
                  productPrice="499"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/25cm-Vintage-Antique-Canton-Tower-office-desktop-ornaments-souvenirs-Metal-Crafts-Bronze-Tower-figurine-Furnishing-articles_275x.jpg?v=1577369516"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_163434_1024x1024.jpg?v=1577369424"
                  productDes="Metal Souvenir - Canton Tower"
                  productPrice="999"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Mandala-Sidewalk-Chalk-Activity-Set-2_275x.jpg?v=1576159490"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Mandala-Sidewalk-Chalk-Activity-Set-1_1024x1024.jpg?v=1576159490"
                  productDes="Mandala Chalk Activity Set"
                  productPrice="1,075"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Slime-4_275x.jpg?v=1576493171"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/02_4c412bd0-b041-42c6-bfaf-3acdfde7d45f_1024x1024.jpg?v=1576493171"
                  productDes="DIY Slime Shaker 3 Pack Glow in The..."
                  productPrice="1,045"
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

                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/DIY_405115ca-c015-4f5a-9e50-da897dddef52_275x.jpg?v=1576327854"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/DIY-1_1024x1024.jpg?v=1576327853"
                  productDes="DIY Shake Slime Glow In The Dark"
                  productPrice="499"
                />
              </Grid> <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Bus-1_01a509fc-b464-4286-bc3f-0796c0da754b_275x.jpg?v=1576236746"
                  productImage="//cdn.shopify.com/s/files/1/0272/0409/1949/products/Bus-1_01a509fc-b464-4286-bc3f-0796c0da754b.jpg?v=1576236746"
                  productDes="Metal Mini - Bus"
                  productPrice="750"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Mickey-Mouse_275x.jpg?v=1576231863"
                  productImage="//cdn.shopify.com/s/files/1/0272/0409/1949/products/Mickey-Mouse-1.jpg?v=1576231863"
                  productDes="Mickey And Minnie Mouse Pressure Car"
                  productPrice=""
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/El-nuevo-hogar-muebles-Iran-Milad-Tower-metal-artesan-as-7-25-cm-modelo-de-construcci_275x.jpg?v=1577374361"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/20191224_164016_1024x1024.jpg?v=1577374317"
                  productDes="Metal Souvenir - Burj-e-Milad"
                  productPrice="1,045"
                />
              </Grid>
              <Grid item lg={3}>
                <Card
                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Hello-Kitty-ATM_275x.jpg?v=1576929625"
                  productImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Hello-Kitty-ATM_1024x1024.jpg?v=1576929625"
                  productDes="ATM Money Box - Hello Kitty"
                  productPrice="1,875"
                />
              </Grid>
              <Grid item lg={3}>
                <Card

                  productHoverImage="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Slime-Glittering-Pearlescent-Mud-5_275x.jpg?v=1576493590"
                  productImage="//cdn.shopify.com/s/files/1/0272/0409/1949/products/05_92d342d1-4cd4-45de-8540-a58a0045c713.jpg?v=1576493590"
                  productDes="Slime Glittering Pearlescent Mud"
                  productPrice="499"
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

export default WinterBigSale;