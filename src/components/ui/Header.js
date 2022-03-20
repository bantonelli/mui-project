import React from 'react'
import {
    AppBar, Toolbar, useScrollTrigger, styled
} from '@mui/material'
import theme from './theme'

import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
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

const Spacer = styled('div')((thing) => {
    return thing.theme.mixins.toolbar
})



// Change keys of toolbar mixin to be 'height' instead of 'minHeight' 
const heightMixin = Object.fromEntries(    
    Object.entries(theme.mixins.toolbar).map(([key, value]) => {
            // Modify key here
            if (typeof(value) === "object") {
                return [key, {height: value.minHeight}];
            } else {
                return ["h" + key.substring(4), value];
            }
        }
    )
)

const StyledLogo = styled('img')(({ theme }) => (heightMixin))

// const Button = (props) => {
//     return (
//         <button className={props.className}>{ props.text }</button>
//     )
// }

// const StyledButton = styled(Button)(({ theme }) => ({
//     color: 'white',
//     backgroundColor: theme.palette.primary.main,
//     height: 50,
//     width: 200 
// }))

const Header = (props) => {
    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <StyledLogo src={logo} alt="Company Logo"></StyledLogo>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Spacer></Spacer>
        </React.Fragment>
    );
}

export default Header