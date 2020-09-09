import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import {Description, GitHub, LinkedIn} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    credentials: {
        paddingTop: theme.spacing(2),
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
                Contact me:
            </Typography>
            <Typography variant="subtitle1" align="center" component="p">
                serj.nights@gmail.com +1 352 (870) 9463
            </Typography>
            <Grid container justify="center" spacing={2} >
                <Grid item>
                    <a href="./downloads/Resume Sidorov Sergei 07.2020.docx"><Button color="primary" variant="contained" startIcon={<Description/>}>Resume</Button></a>
                </Grid>
                <Grid item>
                    <a target={"_blank"} rel="noopener noreferrer" href="https://github.com/Nightspeller"><Button color="primary" variant="contained" startIcon={<GitHub/>}>GitHub</Button></a>
                </Grid>
                <Grid item>
                    <a target={"_blank"} rel="noopener noreferrer" href="https://www.linkedin.com/in/sergei-sidorov/"><Button color="primary" variant="contained" startIcon={<LinkedIn/>}>LinkedIn</Button></a>
                </Grid>
            </Grid>
            <Typography variant="body2" color="textSecondary" align="center" className={classes.credentials}>
                Designed and developed by Sergei "Nights" Sidorov, 2020
            </Typography>
        </footer>
    );
}
