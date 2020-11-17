import { Grid, makeStyles, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import React from 'react';



const useStyles = makeStyles(theme => ({
    root: {
        //flexGrow: 1,
        background: '#000',
        display: 'flex',
        // minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
}));


function Footer() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item md={12} sm={12} style={{ padding: '20px' }}>
                    <Typography style={{ textAlign: 'center', fontSize: '17px', color: '#fff' }}>Cameraworx Pvt Ltd &copy; 2020 All Right Reserved</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer