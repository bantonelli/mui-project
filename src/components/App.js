import React from 'react'
import { ThemeProvider } from "@mui/material/styles";
import theme from './ui/theme';
import Header from './ui/Header'


class App extends React.Component {
    
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Header></Header>
                Some text
            </ThemeProvider>
        );
    }
}

export default App 