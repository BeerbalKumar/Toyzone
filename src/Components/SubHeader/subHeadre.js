import React from 'react';
import Grid from '@material-ui/core/Grid';
import './SubHeader.css'
import Logo from './../../images/logo.png'
import { FaSearch, FaPhone } from "react-icons/fa";
import Button from '@material-ui/core/Button';



export default class SubHeader extends React.Component {
  render() {
    return (
      <div className="subHeaderDiv">
        <Grid container justify="center">
          <Grid item lg={2} xs={2}>
            <img src={Logo} width="100%" height="50px" />
          </Grid>
          <Grid item lg={10} xs={8}>
            <center>
            <input type="text" className="searchInput" placeholder="search here..." aria-label="Username" aria-describedby="basic-addon" />
            <Button variant="contained" style={{ backgroundColor: "#b24e56", color: "#c23321", border: "1px solid #e0e0e0", height: "44px", width: "10%" }} disableElevation>
              <FaSearch style={{ color: "white" }} />
            </Button>
            </center>
          </Grid>
        </Grid>
      </div>
    )
  }
}