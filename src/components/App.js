import React from 'react'
import StyledButton from "./ui/Example";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from './ui/theme';
import Header from './ui/Header'


class App extends React.Component {
    
    render() {
        return (
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Header></Header>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <StyledButton text="home"></StyledButton>
                            }
                        ></Route>
                        <Route
                            path="/services"
                            element={
                                <StyledButton text="services"></StyledButton>
                            }
                        ></Route>
                        <Route
                            path="/customsoftware"
                            element={
                                <StyledButton text="customsoftware"></StyledButton>
                            }
                        ></Route>
                        <Route
                            path="/mobileapps"
                            element={
                                <StyledButton text="mobileapps"></StyledButton>
                            }
                        ></Route>
                        <Route
                            path="/websites"
                            element={
                                <StyledButton text="websites"></StyledButton>
                            }
                        ></Route>
                        <Route
                            path="/revolution"
                            element={
                                <StyledButton text="revolution"></StyledButton>
                            }
                        ></Route>
                        <Route
                            path="/about"
                            element={<StyledButton text="about"></StyledButton>}
                        ></Route>
                        <Route
                            path="/contact"
                            element={
                                <StyledButton text="contact"></StyledButton>
                            }
                        ></Route>
                        <Route
                            path="/estimate"
                            element={
                                <StyledButton text="estimate"></StyledButton>
                            }
                        ></Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        );
    }
}

export default App 