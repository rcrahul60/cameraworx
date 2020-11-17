import { Grid, makeStyles, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import React from 'react';



const useStyles = makeStyles(theme => ({
    root: {
        //flexGrow: 1,
        // background: '#242424',
        // display: 'flex',
        // minHeight: '100vh',
        //flexDirection: 'column',
        //justifyContent: 'center',
        // alignItems: 'center'
        overflow: "hidden"
    },
}));


function HeroSection() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <img src="image/heroSection.JPG" />
            </Grid>
        </div>
    )
}

export default HeroSection