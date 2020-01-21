import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './Login.css';
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import FooterPagePro from './../../Components/Footer/Footer';
import Header from './../../Components/Header/Header';
import SubHeader from './../../Components/SubHeader/subHeadre'
import NavbarPage from './../../Components/Navbar/Navbar';
import LoginImage from './../../images/loginImage.png'


export default class Login extends React.Component {
    render() {
        return (
            <div>
                {/* <Header path={this.props.history} />
                <SubHeader />
                <NavbarPage path={this.props.history} /> */}
                <div className="login_div">
                                <p className="loginHeading">Login and Get to Work</p>
                <Grid container justify="center">
                    <Grid className="loginImagePart" item lg={5} xs={10} sm={6} md={6}>
                            <img src={LoginImage} style={{width:"100%",height:"400px"}}/>
                    </Grid>
                    
                    <Grid item lg={4} xs={10} sm={6} md={6}>
                        <div>
                            <center>
                                <br /><br />

                                <Button variant="contained" style={{ backgroundColor: "#2d5073", color: "white", width: "45%", border: "1px solid #e0e0e0",margin:"2% 1% 2% 1%" }} disableElevation>
                                    <FaFacebookF style={{color: "white",marginRight:"10%" }} />
                                    Facebook
                                </Button>
                                
                                <Button variant="contained" style={{ backgroundColor: "white", color: "grey", width: "45%", border: "1px solid #e0e0e0",margin:"2% 1% 2% 1%" }} disableElevation>
                                   <FaGoogle style={{color: "#c23321",marginRight:"15%"  }} />
                                    Google
                                </Button>


                                <br /><br />
                                <input type="text" className="loginInput" placeholder="username" />
                                <br /><br />
                                <input type="text" className="loginInput" placeholder="password" />
                                <br /><br />
                                <Button variant="contained" style={{ backgroundColor: "#b24e56", color: "white", width: "90%" }} disableElevation> Continue </Button>
                                <br /><br />
                                <h6>Don't have an account yet ? <b style={{ cursor: "pointer" }} onClick={() => this.props.history.push("/signup")}>SignUp</b> </h6>
                                <br /><br />
                            </center>
                        </div>
                    </Grid>
                </Grid>
                </div>

                {/* <FooterPagePro /> */}
            </div>
        )
    }
}