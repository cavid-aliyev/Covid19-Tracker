import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";


const Cart = ({ data: {confirmed} } ) => {

    if(!confirmed){
        return 'Loading'
    }


  return (
    <div className="container">
      <Grid container spacing={3} justifyContent="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Yoluxanlar
            </Typography>
            <Typography variant="h5">{confirmed.value}</Typography>
            <Typography color="textSecondary">Muddet</Typography>
            <Typography variant="body2">aktiv xeste sayi</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              sagalanlar
            </Typography>
            <Typography variant="h4">Zaman</Typography>
            <Typography color="textSecondary">Muddet</Typography>
            <Typography variant="body2">aktiv xeste sayi</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Olum
            </Typography>
            <Typography variant="h4">Zaman</Typography>
            <Typography color="textSecondary">Muddet</Typography>
            <Typography variant="body2">aktiv xeste sayi</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
