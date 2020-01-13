import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Header.css'
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch, FaPhone } from "react-icons/fa";
import InputBase from '@material-ui/core/InputBase';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">

                <Grid container justify="center">
                    <Grid item lg={10} xs={6}>
                        {/* <center> */}
                        <p style={{ color: "#b24e56", marginLeft: "4%" }}> <FaPhone style={{ color: "#b24e56" }} /> 03211222869</p>
                        {/* </center> */}
                    </Grid>
                    <Grid item lg={1} xs={4}>
                        <center>
                            <div style={{ cursor: "pointer" }} onClick={() => this.props.path.push("/login")}> My Account</div>
                        </center>
                    </Grid>
                    <Grid item lg={1} xs={2}>
                        <center>
                            <div><FaShoppingCart style={{ color: "#b24e56", width: "30%" }} /></div>
                        </center>
                    </Grid>
                </Grid>

            </div>
        )
    }
}