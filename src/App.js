import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from "./components/footer.js";
import TopBar from "./components/topBar.js";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import {ThemeProvider} from "@material-ui/core/styles";
import {theme} from "./theme.js";
import Resume from "./pages/Resume.js";
import Portfolio from "./pages/Portfolio.js";

export default function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Router>

                    <TopBar/>
                    <Switch>
                        <Route exact path="/resume">
                            <Resume/>
                        </Route>
                        <Route exact path="/portfolio">
                            <Portfolio/>
                        </Route>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                    </Switch>
                    <Footer/>

                </Router>
            </ThemeProvider>
        </React.Fragment>
    );
}
