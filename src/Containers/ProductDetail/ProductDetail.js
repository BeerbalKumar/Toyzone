import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProductSlider from "./../../Components/ProductSlider/ProductSlider";
import Header from './../../Components/Header/Header';
import SubHeader from './../../Components/SubHeader/subHeadre'
import NavbarPage from './../../Components/Navbar/Navbar';
import FooterPagePro from './../../Components/Footer/Footer';
import './ProductDetail.css';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


export default class ProductDetail extends React.Component {
    constructor() {
        super()
        this.state = {
            quantity: 0
        }
    }


    decreaseQuantity=()=>{
       if(this.state.quantity <= 0){
           this.setState({
               quantity:0
           })
       }
       else{
        this.setState({
            quantity:this.state.quantity-1
        })
       }
    }


    render() {
        return (
            <div>
                <Header path={this.props.history} />
                <SubHeader />
                <NavbarPage path={this.props.history} />


                <div className="productDetail">
                    <Grid container justify="center">
                        <Grid item lg={4}>
                            <center>
                                <img src="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/22_de863807-b1d5-414c-bd20-7de787b6736c_large.jpg?v=1578058727" className="productImage" />
                            </center>
                        </Grid>
                        <Grid item lg={5}>
                            <div className="productDetailDiv">
                                <p className="productName">Little Kitchenware Briefcase-Shoulder Bag</p>
                                <p className="productPrice">Your Price: <b>Rs.1,450 </b></p>
                                <p className="productQuantity">Quantity</p>
                                <div className="quantityDiv">
                                    <button className="quantityButton" onClick={() => this.decreaseQuantity()}>-</button>
                                    <span style={{ width: '20%', display: "inline-block",fontWeight:"bold" }}>{this.state.quantity}</span>
                                    <button className="quantityButton" onClick={() => this.setState({ quantity: this.state.quantity + 1 })}>+</button>
                                </div>
                                <Button variant="contained" className="addToCartButton" >ADD TO CART</Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>



                <FooterPagePro />
            </div>
        )
    }
}