import React from 'react'
import {
    Link as RouterLink,
} from "react-router-dom";
import { useState, useEffect } from 'react'
import {
    AppBar,
    Button,
    Tabs,
    Tab,
    Toolbar,
    styled,
    useScrollTrigger,
} from "@mui/material";
import theme from "./theme"
import utils from './utilities'
import logo from "../../assets/logo.svg"


/**********************
 * HELPER COMPONENTS 
 **********************/

const Spacer = styled("div")((thing) => {
    return thing.theme.mixins.toolbar;
});


const StyledLogo = styled("img")(({ theme }) => heightMixin);

const ElevationScroll = (props) => {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
        // target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 2 : 0,
    });
}

/**********************
 * CONFIG DATA  
 **********************/
// Change keys of toolbar mixin to be 'height' instead of 'minHeight'
const heightMixin = Object.fromEntries(
    Object.entries(theme.mixins.toolbar).map(([key, value]) => {
        // Modify key here
        if (typeof value === "object") {
            return [key, { height: value.minHeight }];
        } else {
            return ["h" + key.substring(4), value];
        }
    })
);

const styles = {
    tabContainer: {
        marginLeft: "auto",
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px",
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
};

const routes = [
    '/',
    '/services',
    '/customsoftware',
    '/mobileapps',
    '/websites',
    '/revolution',
    '/about',
    '/contact',
    '/estimate'
]


/**********************
 * MAIN COMPONENT 
 **********************/
const Header = (props) => {
    // Get active route to determine active tab state

    const routeMatch = utils.useRouteMatch(routes);

    const [active, setActive] = useState(routeMatch?.pattern?.path)

    useEffect(() => {
        // console.log("active: ", active);
        if (
            window.location.pathname !== "/" &&
            window.location.pathname !== "/services" &&
            window.location.pathname !== "/revolution" &&
            window.location.pathname !== "/about" &&
            window.location.pathname !== "/contact"
        ) {
            setActive(false);
        }
    }, []);

    const handleChange = (event, nextPath) => {
        setActive(nextPath)
    }

    const homeClick = (event) => {
        setActive('/')
    }

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button
                            disableRipple
                            onClick={homeClick}
                            sx={styles.logoContainer}
                            component={RouterLink}
                            to="/"
                        >
                            <StyledLogo
                                src={logo}
                                alt="Company Logo"
                            ></StyledLogo>
                        </Button>
                        <Tabs
                            value={active}
                            onChange={handleChange}
                            sx={styles.tabContainer}
                            textColor="inherit"
                            indicatorColor="primary"
                        >
                            <Tab
                                component={RouterLink}
                                to="/"
                                value="/"
                                sx={styles.tab}
                                label="Home"
                                {...utils.a11yProps("/")}
                            ></Tab>
                            <Tab
                                component={RouterLink}
                                to="/services"
                                value="/services"
                                sx={styles.tab}
                                label="Services"
                                {...utils.a11yProps("/services")}
                            ></Tab>
                            <Tab
                                component={RouterLink}
                                to="/revolution"
                                value="/revolution"
                                sx={styles.tab}
                                label="The Revolution"
                                {...utils.a11yProps("/revolution")}
                            ></Tab>
                            <Tab
                                component={RouterLink}
                                to="/about"
                                value="/about"
                                sx={styles.tab}
                                label="About Us"
                                {...utils.a11yProps("/about")}
                            ></Tab>
                            <Tab
                                component={RouterLink}
                                to="/contact"
                                value="/contact"
                                sx={styles.tab}
                                label="Contact Us"
                                {...utils.a11yProps("/contact")}
                            ></Tab>
                        </Tabs>
                        <Button
                            component={RouterLink}
                            to="/estimate"
                            value="/estimate"
                            color="secondary"
                            variant="contained"
                            sx={styles.button}
                        >
                            Free Estimate
                        </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Spacer></Spacer>
        </React.Fragment>
    );
};

export default Header