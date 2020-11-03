import { Grid, makeStyles, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import React from 'react';



const useStyles = makeStyles(theme => ({
    root: {
        //flexGrow: 1,
        background: '#242424',
        display: 'flex',
        // minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
}));


function Footer() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item md={4} sm={12}>

                </Grid>
                <Grid item md={12}>
                    <Typography>Cameraworx pvt ltd</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer