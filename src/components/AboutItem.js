import { Grid, makeStyles, Typography, Paper } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import React from 'react';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import AssignmentIcon from '@material-ui/icons/Assignment';
import VideocamIcon from '@material-ui/icons/Videocam';
import MovieIcon from '@material-ui/icons/Movie';
import LaptopIcon from '@material-ui/icons/Laptop';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#ffffff',
        overflow: 'hidden'
        // padding: '4em'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        //color: theme.palette.text.secondarVideocamIcony,
        backgroundColor: '#f0f0f0',
        // margin:'10px',
        // maxWidth:'15%',
        borderRadius: '7px',
        // boxShadow: '5px 5px #ffd3d0'

    },

}));

function AboutItem() {
    const classes = useStyles()
    return (
        <div className={classes.root}>

            <Grid container spacing={3}>
                <img src="image/about1.jpg" height='800px' width='1600px' />
                <Grid item md={12}>
                    <Typography style={{ fontSize: '25px', textAlign: 'center' }}>
                        We are Cameraworx</Typography>
                </Grid>
                <Grid item md={12} style={{ textAlign: 'justify', fontSize: '20px', padding: '25px' }}>
                    <Typography>Welcome to Cameraworx. We have been involved in photography since 1984. Our photography experience ranges from e-commerce, general white background, Fashion photography, bauty and cosmetics photography, creative photography, corporate photography, model shoot and apparel, to handbags, shoes, and other fashion accessories. </Typography>
                    <Typography style={{ marginTop: '15px' }}>We are extremely confident that we offer the best value out there. Our end results speak for them self !
Working with small and large businesses, as well as individuals. We provide a fast product photography service with courier pickup and an online portal to ensure you can start viewing your photos as soon as they are ready.</Typography>
                    <Typography style={{ marginTop: '15px' }}>Our studio is located on  D-359 3rd Floor Defence Colony, Delhi.  However, we work nationwide and can service businesses throughout the India and around the world.</Typography>
                </Grid>
            </Grid>
        </div >
    )
}

export default AboutItem