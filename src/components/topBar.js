import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import {Hidden} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    homeLink: {
        fontFamily: '"Playball", "cursive"',
        letterSpacing: 1
    },
    navButtons: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        gap: theme.spacing(1)+'px',
    },
}));

export default function TopBar() {
    const classes = useStyles();

    return (
        <AppBar position="sticky">
            <Toolbar className={classes.toolbar}>
                <Hidden xsDown>
                    <Typography variant="h5" color="inherit" noWrap className={classes.homeLink}>
                        Sergei Sidorov
                    </Typography>
                </Hidden>
                <Hidden smUp>
                    <Typography variant="h5" color="inherit" noWrap className={classes.homeLink}>
                        SS
                    </Typography>
                </Hidden>
                <div className={classes.navButtons}>
                    <Link to="/"><Button variant="outlined">Home</Button></Link>
                    <Link to="/resume"><Button variant="outlined">Resume</Button></Link>
                    <Link to="/portfolio"><Button variant="outlined">Portfolio</Button></Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}
