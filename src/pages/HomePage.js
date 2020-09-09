import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    cursiveFont: {
        fontFamily: '"Playball", "cursive"',
    },
    headerContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    actionButton: {
        display: 'block',
        margin: `auto`,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(6),
    },
    skillsList: {
        paddingLeft: "2ch",
        width: "max-content",
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        '& > li': {
            listStyleType: 'none',
            '&:before': {
                content: '"\\2713"',
                paddingRight: "0.3em",
            }
        }
    },
    cardGrid: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '65%',
    },
    cardContent: {
        flexGrow: 1,
    },
}));

export default function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const classes = useStyles();

    return (
        <main>
            <div className={classes.headerContent}>
                <Container maxWidth="md">
                    <Typography component="h1" variant="h3" align="center" color="textPrimary"
                                gutterBottom
                                className={classes.cursiveFont}>
                        Sergei Sidorov
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Technical lead, Consultant and Senior Full-Stack Web Developer by day
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph style={{fontWeight: 400}}>
                        open-source contributor, game developer, and technology enthusiast by night
                    </Typography>
                </Container>
            </div>
            <div>
                <Container className={classes.cardGrid} maxWidth="lg">
                    <Typography variant="h3" align="center" component="h1" gutterBottom
                                className={classes.cursiveFont}>Top Skills</Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h5" align="center">On the client-side</Typography>
                            <ul className={classes.skillsList}>
                                <li>HTML, JavaScript, CSS</li>
                                <li>Angular, React, Vue</li>
                                <li>TypeScript, Webpack</li>
                                <li>CSS Pre- and Post-processors, JSS</li>
                                <li>Canvas, SVG, D3, WebGL, Phaser</li>
                                <li data-toggle="tooltip"
                                    data-placement="bottom"
                                    title=""
                                    data-original-title="HTML Video/Audio, Semantic HTML, Stylus, MVC, OOJS, jQuery, Template engines, MDL, Bootstrap, professional CMS and even more!">
                                    <span className="dotted-underline">And much more</span>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h5" align="center">On the server-side</Typography>
                            <ul className={classes.skillsList}>
                                <li>NodeJS, Express, MongoDB</li>
                                <li>DevOps, CI\CD, Docker</li>
                                <li>AWS, Azure, Google cloud (Firebase)</li>
                                <li>API development and consumption</li>
                                <li>Third-party integrations (Apple, FB, Google)</li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h5" align="center">Technical lead</Typography>
                            <ul className={classes.skillsList}>
                                <li>Trained Agile Project Lead</li>
                                <li>Interviewed more than 100 candidates</li>
                                <li>Planned and kicked off 7 projects</li>
                                <li>Countless code reviews</li>
                                <li>Trained a team of 15 devs in web stack</li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h5" align="center">Web apps</Typography>
                            <ul className={classes.skillsList}>
                                <li>Progressive Web Apps (PWA)</li>
                                <li>Hybrid mobile apps (Ionic, Cordova)</li>
                                <li>Desktop apps (Electron)</li>
                                <li>HTML5 Games</li>
                            </ul>
                        </Grid>
                    </Grid>
                    <Link to="/resume">
                        <Button variant="contained" color="primary" className={classes.actionButton}>
                            More in my on-line resume
                        </Button>
                    </Link>
                    <Typography variant="h3" align="center" component="h1" gutterBottom
                                className={classes.cursiveFont}>Portfolio highlights</Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="./img/portfolio/mindtree/pf.jpg"
                                    title="Mindtree"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Integrated Payments
                                    </Typography>
                                    <Typography>
                                        I wrote client side library and marketing web site for a large
                                        international payments provider.<br/>
                                        It could support direct card payments, Apple Pay, Google Pay and Web
                                        Payments API.<br/>
                                        It was easy to customise and integrate on partner's web sites,
                                        robust and secure payment solution.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="./img/index/novartis.png"
                                    title="Novartis"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        BioSpecimen Registration
                                    </Typography>
                                    <Typography>
                                        Complicated single page web application for registration of
                                        biospecimens I developed for Novartis.<br/>
                                        It is a system with numerous interactions with user including not
                                        only UI validation and registration of new biological specimens, but
                                        also search, editing and exploration of existing records.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="./img/index/flypside.png"
                                    title="Flypside"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Flypside
                                    </Typography>
                                    <Typography>
                                        I wrote web-based mobile app for Flypside - free and revolutionary
                                        application for people in motion. It’s a bit like Facebook, but it
                                        looks ahead instead of back.
                                        Create a forward-facing timeline to communicate where you will be in
                                        the future, meet up with the people you choose and find things to do
                                        when you get there.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="./img/index/ug.png"
                                    title="Ultimate Gaming"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Ultimate Gaming
                                    </Typography>
                                    <Typography>
                                        HTML5-based version of casino application I ported from the
                                        desktop-only Ultimate Gaming portal to mobile devices, such as
                                        iPhone, iPad and iPod touch.<br/> It also supported a huge range of
                                        Android devices, was cross-browser, responsive and fast.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Link to="/portfolio">
                        <Button variant="contained" color="primary" className={classes.actionButton}>
                            Even more works in my portfolio
                        </Button>
                    </Link>
                </Container>
            </div>
        </main>
    );
}
