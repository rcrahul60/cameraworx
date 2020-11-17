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
        padding: '4em'
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

function HomeService() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={2} justify="center"
                alignItems="center">
                <Grid item md={12} style={{ textAlign: "center", fontSize: "25px" }}>
                    <Typography style={{ fontSize: "30px" }}> Services </Typography>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={4}  >
                        <Paper
                            className={classes.paper}>
                            {/* <EmojiObjectsIcon fontSize="large" /> */}
                            <Typography variant="h5">Product  Photography</Typography>
                            <Typography>Product Photography is really important for e-commerce companies selling product online like Flipkart, Amazon, Snapdeal, Ebay, Paytm and many more e-commerce websites. We have the right experience to help and grow your business with our creativity as we capture the product in a way which shows its use without comprising it’s appeal. We are based best product photographer in gurgaon.</Typography></Paper>

                    </Grid>
                    <Grid item sm={12} md={4} >
                        <Paper className={classes.paper}>
                            {/* <QuestionAnswerIcon fontSize="large" /> */}
                            <Typography variant="h5">360° Product  Photoshoot</Typography>
                            <Typography>360 degree product photography can be effectively used for a variety of products such as consumer electronics, computer accessories, jewellery, clothes, footwear, toys, art and handicraft items, personal care products and so on. There are different benefits that 3D & 360 degree product photography offers both the business owners and the customers.</Typography>
                        </Paper>

                    </Grid>
                    <Grid item sm={12} md={4} >
                        <Paper className={classes.paper}>
                            {/* <AssignmentIcon fontSize="large" /> */}
                            <Typography variant="h5">Fashion Photography</Typography>
                            <Typography>Fashion photography is devoted to displaying garment, footwear and other fashion accessories. fashion photography has developed its own aesthetic in which the clothes and fashions accessories are enhanced by studio and exotic locations and story lines. Fashion photography is most often conducted for advertisements, ecommerce website, catalogs, banners and magazines.</Typography>
                        </Paper>

                    </Grid>
                    {/* <Grid item sm={12} md={3} >
                        <Paper className={classes.paper}>
                            
                            <Typography variant="h5">Image Editing</Typography>
                            <Typography>The real is never unique in the photographic world. To make the pictures more appealing there has to be a lot of re-touching to go in the making. Photo editing services like background removal, re-fixing the size, adjusting the color brightness and giving it an animated look are too much required to give an outstanding look to the merchandise.</Typography>
                        </Paper>

                    </Grid> */}
                </Grid>


                {/* <Grid item sm={12} md={3} >
                        <Paper className={classes.paper}>
                            
                            <Typography variant="h5">E commerce Photography</Typography>
                            <Typography>

                                Ck studio offers white background e commerce photoshoot near me Delhi at great quality and low prices. mostly e-commerce websites required product whether on white background or coloured background is precisely captured by our experienced e-commerce photographer with professional lances. We are doing best e commerce product photography in our photography studio for e-commerce companies like Flipkart and Amazon.
</Typography>
                        </Paper>

                    </Grid> */}
                <Grid item sm={12} md={4} >
                    <Paper className={classes.paper}>
                        {/* <ThumbUpIcon fontSize="large" /> */}
                        <Typography variant="h5">Wedding Photography</Typography>
                        <Typography>The term “lookbook photography” is a broad one. Basically, it’s putting fully styled “looks” together for your customer to help them make purchase decisions. Most customers will buy the whole look if they like it, or be inspired to purchase an item they might not have otherwise, because you showed them how to wear it and style it.</Typography>

                    </Paper>
                </Grid>
                <Grid item sm={12} md={4} >
                    <Paper className={classes.paper}>
                        {/* <LaptopIcon fontSize="large" /> */}
                        <Typography variant="h5">Catalouge photography</Typography>
                        <Typography>What is the first and foremost thing that you would do if you are planning to showcase your products to a wider audience? The obvious answer is to make a product catalog. A catalog is nothing but a platform for you to showcase your products. A good catalog inadvertently leads to a spike in sales.</Typography>
                    </Paper>

                </Grid>
                <Grid item sm={12} md={4} >
                    <Paper className={classes.paper}>
                        {/* <ThumbUpIcon fontSize="large" /> */}
                        <Typography variant="h5">Sports photography</Typography>
                        <Typography>What is the first and foremost thing that you would do if you are planning to showcase your products to a wider audience? The obvious answer is to make a product catalog. A catalog is nothing but a platform for you to showcase your products. A good catalog inadvertently leads to a spike in sales.</Typography>

                    </Paper>
                </Grid>

            </Grid >
        </div >
    )
}

export default HomeService