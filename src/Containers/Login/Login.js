import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './Login.css';
import { FaFacebookF,FaGoogle } from "react-icons/fa";


export default class Login extends React.Component {
    render() {
        return (
            <div>
                <br /><br /><br /><br />
                <Grid container justify="center">
                    <Grid item lg={4} xs={10} sm={10} md={6}>
                        <div>
                            <center>
                                <img src="https://img.icons8.com/dusk/64/000000/free-shipping.png" />
                                <br /><br />
                                <p className="loginHeading">Log in and get to work</p>
                                <input type="text" className="loginInput" placeholder="username" />
                                <br /><br />
                                <input type="text" className="loginInput" placeholder="password"/>
                                      <br /><br />

                                <Button variant="contained"
                                    style={{
                                        backgroundColor: "#37a000",
                                        color: "white",
                                        width: "90%"
                                    }}
                                    disableElevation>
                                    Continue
                            </Button>
                            <br /><br />

                            <Button variant="contained"
                                    style={{
                                        backgroundColor: "white",
                                        color: "#2d5073",
                                        width: "90%",
                                        border:"1px solid #e0e0e0"
                                    }}
                                    disableElevation>
                                    Login With Facebook
                                    <FaFacebookF style={{marginLeft:"50%",color:"#2d5073"}}/>
                            </Button>
                           <br/><br/>
                            <Button variant="contained"
                                    style={{
                                        backgroundColor: "white",
                                        color: "#c23321",
                                        width: "90%",
                                        border:"1px solid #e0e0e0"
                                    }}
                                    disableElevation>
                                    Login With Google
                                   <FaGoogle style={{marginLeft:"50%",color:"#c23321"}}/>
                            </Button>
                            </center>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}