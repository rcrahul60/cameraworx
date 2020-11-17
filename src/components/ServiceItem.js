import { Grid, makeStyles, Typography, useTheme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // display: 'block'
        //background: 'image/service2.jpg',
        overflow: 'hidden'


    },
    boxItem: {
        //    backgroundColor: "#f0f0f0",
        //display: 'flex',
        //  padding: '50px',
        textAlign: 'center',
        zIndex: '-1'



    },
    title: {
        padding: '25px',
        // fontSize: '50px',
        // direction: 'column'
    },
    infoText: {
        fontSize: '17px',
        textAlign: "justify"

    }

}));

function ServiceItem() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2} justify="center" alignContent="center">
                <Grid item md={12} style={{ overflow: 'hidden', height: '90vh', alignItems: 'center' }}>
                    <img src="image/sport11.JPG" />
                </Grid>

                <Grid item md={6} sm={12} style={{ paddingLeft: '15px' }}>
                    <img src="image/product1.jpg" />
                </Grid>
                <Grid item md={6} sm={12} className={classes.boxItem} style={{ padding: '25px' }}>

                    <Typography style={{ fontSize: '20px' }}>Product Photography</Typography>

                    <Typography className={classes.infoText}>Product Photography is really important for e-commerce companies selling product online like Flipkart, Amazon, Snapdeal, Ebay, Paytm and many more e-commerce websites. We have the right experience to help and grow your business with our creativity as we capture the product in a way which shows its use without comprising it’s appeal. We are based best product photographer in Delhi.</Typography>
                </Grid>


                <Grid item md={6} sm={12} className={classes.boxItem} style={{ padding: '25px' }}>
                    <Typography style={{ fontSize: '20px' }}>Wedding Photography</Typography>

                    <Typography className={classes.infoText}>Often people only care for wedding photography, but what they also should acknowledge is Wedding Cinematography. People might mistake it for wedding videography. But they both are two very different things. The videos that we see of our parent's weddings are an example of Wedding Videography. It is a more casual and boring approach to covering a wedding. This has been out of trend for some time now and what has taken its place is Wedding Cinematography. A usual Wedding Video is in 16:9 aspect ratio and is very plain looking, but when we talk about Wedding Cinematography, these videos make your wedding look like a scene out of a Bollywood Film. This video is shot with the aspect ratio of 18:9 or 21:9 aspect ratios which gives it its major cinematic feel. There is also a lot of editing involved and some of the cameras that are used to shoot these are Red Dragon and Black Magic. So if we have got you on board to get a cinematic video for your wedding then we can provide you with a fine Wedding Cinematographer in Delhi.</Typography>
                </Grid>
                <Grid item md={6} sm={12}>
                    <img src="image/wedding31.jpeg" />
                </Grid>

                <Grid item md={6} sm={12} style={{ alignItems: 'center', paddingLeft: '15px' }}>
                    <img src="image/sport21.JPG" />
                </Grid>
                <Grid item md={6} sm={12} className={classes.boxItem} style={{ padding: '25px' }}>

                    <Typography style={{ fontSize: '20px' }}>Sport Photography</Typography>

                    <Typography className={classes.infoText}>Thinking of a perfect plan to share your social message? Documentary films are the ideal approach. Benefit from our trusted documentary film production services that are bound to disseminate your social message to the large userbase. Make your message factful and stats based rather than fictional statements to add power to your message. At Cameraworx, we produce well-thought-out and deep-researched documentary films that leave a long-lasting impression on viewers.</Typography>

                </Grid>

                <Grid item md={6} className={classes.boxItem} style={{ padding: '25px' }}>
                    <Typography style={{ fontSize: '20px' }}>Fashion Photography</Typography>

                    <Typography className={classes.infoText}>We offer on-site action photography services to sporting events around the country, where all of the participants get the opportunity to purchase unique, one of a kind, action photos which makes the parents and athletes happy!

We offer on-site printing with custom-made templates for each event.  We can use your logo, sponsors logos and more!  We offer a generous kickback to the host, images for websites and social media to be used and more!  Call us today to discuss your options.</Typography>
                </Grid>
                <Grid item md={6} sm={12}>
                    <img src="image/fashion1.JPG" />
                </Grid>
            </Grid>
        </div >
    );
}

export default ServiceItem