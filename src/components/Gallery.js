import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Grid, Typography } from '@material-ui/core';
//import tileData from './tileData';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,

    },
    gridList: {
        width: 500,
        height: 450,
    },
    title: {
        textAlign: 'center'
    }
}));


const tileData = [
    {
        img: 'image/wedding1.jpg',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: 'image/wedding2.png',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: 'image/wedding3.jpeg',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: 'image/wedding4.jpg',
        title: 'Image',
        author: 'author',
        cols: 4,
    },


];

const sport = [
    {
        img: 'image/sport1.JPG',
        title: 'Image',
        author: 'author',
        cols: 12,
    },
    {
        img: 'image/sport2.JPG',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: 'image/sport3.jpg',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: 'image/sport4.jpg',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
];
const dance = [
    {
        img: 'image/dance1.JPG',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: 'image/dance2.JPG',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: 'image/dance3.jpg',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: 'image/dance4.jpg',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: 'image/dance5.jpg',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
];
const baby = [
    {
        img: 'image/baby1.jpg',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: 'image/baby2.jpeg',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: 'image/baby3.jpg',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: 'image/baby4.jpeg',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: 'image/baby5.jpg',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
];
const politics = [
    {
        img: 'image/politics1.JPG',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: 'image/politics2.JPG',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: 'image/politics3.JPG',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: 'image/politics4.JPG',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: 'image/politics5.JPG',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
];
const event = [
    {
        img: 'image/event1.JPG',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: 'image/event2.JPG',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: 'image/event3.JPG',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: 'image/event4.JPG',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: 'image/event5.JPG',
        title: 'Image',
        author: 'author',
        cols: 4,
    },
];


export default function Gallery() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Grid container spacing={2} justify="center"
                alignItems="center">
                <Grid item md={12} sm={12} className={classes.title}>
                    <Typography style={{ fontSize: '25px' }}>Gallery</Typography>
                </Grid>

                <GridList cellHeight={160} className={classes.gridList} cols={4}>
                    {tileData.map((tile) => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    ))}
                </GridList>
                <GridList cellHeight={160} className={classes.gridList} cols={4}>
                    {dance.map((tile) => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    ))}
                </GridList>
                <GridList cellHeight={160} className={classes.gridList} cols={4}>
                    {baby.map((tile) => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    ))}
                </GridList>



                <GridList cellHeight={160} className={classes.gridList} cols={4}>
                    {sport.map((tile) => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    ))}
                </GridList>
                <GridList cellHeight={160} className={classes.gridList} cols={4}>
                    {event.map((tile) => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    ))}
                </GridList>
                <GridList cellHeight={160} className={classes.gridList} cols={4}>
                    {politics.map((tile) => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    ))}
                </GridList>


            </Grid>
        </div >
    );
}
