import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Header.css'
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch, FaPhone } from "react-icons/fa";
import Badge from '@material-ui/core/Badge';
import Popup from "reactjs-popup";
import Button from '@material-ui/core/Button';


export default class Header extends React.Component {
    render() {
        return (
            <div className="header">

                <Grid container justify="center">
                    <Grid item lg={10} xs={6}>
                        <p style={{ color: "#b24e56", marginLeft: "4%" }}> <FaPhone style={{ color: "#b24e56" }} /> 03211222869</p>
                    </Grid>
                    <Grid item lg={1} xs={4}>
                        <center>
                            <div style={{ cursor: "pointer" }} onClick={() => this.props.path.push("/login")}> My Account</div>
                        </center>
                    </Grid>
                    <Grid item lg={1} xs={2}>
                        <div style={{ textAlign: 'center' }}>
                            <Popup  trigger={
                                <Badge badgeContent={1} color="secondary">
                                    <FaShoppingCart style={{ color: "#b24e56", width: "100%" }} />
                                </Badge>
                            } position="bottom right" on="hover">
                                <div className="popup_content">
                                    <img src="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/71KIFd18MmL._AC_SL1500_e8b2b0c5-9c15-4d35-a075-c8b84628768f_large.jpg?v=1578058323" width="60px" height="50px" />
                                    <p style={{ textAlign: "left" }}>Pretend Play Fashion Briefcase With Shoulder Bag</p>
                                    <b>14,50</b>
                                </div>
                             <Button className="add_cartbtn">add to cart</Button>
                             <Button className="add_cartbtn">view cart</Button>
                            </Popup>
                        </div>
                    </Grid>
                </Grid>

            </div>
        )
    }
}