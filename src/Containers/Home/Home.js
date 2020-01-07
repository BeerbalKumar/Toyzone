import React from 'react';
import Card from './../../Components/Card/Card'
import Grid from '@material-ui/core/Grid';

class Home extends React.Component{
  render(){
    return(
<div>
  
   <center>
     <Grid container justify="center" spacing={3}>
     <Grid item lg={2}>
      <Card/>   
      </Grid> 

      </Grid>
    </center>   
</div>
    )
  }
}

export default Home;
