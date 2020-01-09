import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


export default class Login extends React.Component {
    render() {
        return (
            <Grid container justify="center">
                <Grid item lg={4}>
                    <Paper>
                        <center>
                            <img src="https://img.icons8.com/dusk/64/000000/free-shipping.png" />
                            <br /><br />
                            <h1>Start</h1>
                            <input type="text"
                                style={{
                                    width: "90%",
                                    border: "1px solid grey",
                                    padding: "2%",
                                    borderRadius: "2px"
                                }} />
                            <br /><br />
                            <input type="text"
                                style={{
                                    width: "90%",
                                    border: "1px solid grey",
                                    padding: "2%",
                                    borderRadius: "2px"
                                }} />
                            <Button variant="contained" color="primary" disableElevation>
                                Disable elevation
                            </Button>
                        </center>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}