import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './Signup.css';
import { FaFacebookF,FaGoogle } from "react-icons/fa";
import FooterPagePro from './../../Components/Footer/Footer';
import Header from './../../Components/Header/Header';
import SubHeader from './../../Components/SubHeader/subHeadre'
import NavbarPage from './../../Components/Navbar/Navbar';


export default class Signup extends React.Component {
    render() {
        return (
            <div>
                <Header  path={this.props.history}/>
                <SubHeader/>
                <NavbarPage  path={this.props.history}/>
                <Grid container justify="center">
                    <Grid item lg={4} xs={10} sm={10} md={6}>
                        <div>
                            <center>
                                <p className="loginHeading">Signup and get to work</p>
                                <Button variant="contained" style={{ backgroundColor: "#2d5073", color: "white", width: "90%", border: "1px solid #e0e0e0" }} disableElevation>
                                    <FaFacebookF style={{color: "white",marginRight:"10%" }} />
                                    Login With Facebook
                                </Button>
                                <br/>
                                <Button variant="contained" style={{ backgroundColor: "white", color: "grey", width: "90%", border: "1px solid #e0e0e0" }} disableElevation>
                                   <FaGoogle style={{color: "#c23321",marginRight:"15%"  }} />
                                    Login With Google
                                </Button>
                            <br /><br />
                                <input type="text" className="loginInput" placeholder="Firstname" />
                                <br /><br />
                                <input type="text" className="loginInput" placeholder="Lastname"/>
                                 <br /><br />
                                 <input type="text" className="loginInput" placeholder="Email"/>
                                 <br /><br />
                                 <input type="password" className="loginInput" placeholder="password"/>
                                 <br /><br />
                                 <Button variant="contained" style={{backgroundColor: "#b24e56",color: "white",width: "90%"}}disableElevation>
                                    Continue
                                </Button>
                                <br/><br/>
                              <h6>Already have an account ? <b style={{cursor:"pointer"}} onClick={()=>this.props.history.push("/login")}>Login</b> </h6>
                               <br/><br/>
                            </center>
                        </div>
                    </Grid>
                </Grid>
                <FooterPagePro/>
            </div>
        )
    }
}