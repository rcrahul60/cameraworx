import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from "@material-ui/core/Button";
import { Grid } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        [theme.breakpoints.down('xs')]: {
            flexGrow: 1,
        }

    },
    headerOptions: {
        display: "flex",
        flex: 1,
        justifyContent: "flex-end"
    }



}));

const Navbar = props => {
    console.log(props);
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    console.log(isMobile);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = pageURL => {
        history.push(pageURL);
        setAnchorEl(null);
    };

    const handleButtonClick = pageURL => {
        history.push(pageURL);

    };
    const menuItems = [
        {
            menuTitle: "Home",
            pageURL: "/"
        },
        {
            menuTitle: "Contact",
            pageURL: "/contact"
        },
        {
            menuTitle: "Services",
            pageURL: "/services"
        }
    ];

    return (
        <div className={classes.root}>

            <AppBar position="static" style={{ backgroundColor: 'white' }}>
                <Toolbar>


                    <Grid item className={classes.title}>
                        <img src="logo1.png" onClick={() => handleButtonClick('/')} width="85px" height="50px" />
                    </Grid>



                    {isMobile ? (
                        <>
                            <IconButton edge="start" className={classes.menuButton} onClick={handleMenu} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                {menuItems.map(menuItem => {
                                    const { menuTitle, pageURL } = menuItem;
                                    return (
                                        <MenuItem onClick={() => handleMenuClick(pageURL)}>
                                            {menuTitle}
                                        </MenuItem>
                                    );
                                })}
                            </Menu>
                        </>) : (
                            <div className={classes.headerOptions}>
                                <Button onClick={() => handleButtonClick('/')}>Home</Button>
                                <Button onClick={() => handleButtonClick('/about')}>About Us</Button>
                                <Button onClick={() => handleButtonClick('/services')}>Services</Button >
                                <Button onClick={() => handleButtonClick('/contact')}>Contact</Button >
                            </div>
                        )}


                </Toolbar>
            </AppBar>
        </div >
    );
}


export default withRouter(Navbar);