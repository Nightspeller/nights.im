import React, {useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
    cursiveFont: {
        fontFamily: '"Playball", "cursive"',
    },
    headerContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
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

export default function Portfolio() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const classes = useStyles();

    return (
        <main>
            <header className={classes.headerContent}>
                <Container maxWidth="md">
                    <Typography component="h1" variant="h3" align="center" color="textPrimary"
                                gutterBottom
                                className={classes.cursiveFont}>
                        Portfolio
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Through my career I developed more than 20 websites, webapps and libraries,
                        as well as more than 10 backend systems: servers, proxies, APIs, database integrations.
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph style={{fontWeight: 400}}>
                        Only a few of these works are represented here, since some of my projects are under NDA or
                        simply not exist anymore
                    </Typography>
                </Container>
            </header>
            <Container className={classes.cardGrid} maxWidth="lg">
                <Typography variant="h3" align="center" component="h1" gutterBottom
                            className={classes.cursiveFont}>Front-end works</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
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
                    <Grid item xs={12} sm={6}>
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
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="./img/portfolio/lanks/lanks second gen.png"
                                title="Lanks (second generation)"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lanks (second generation)
                                </Typography>
                                <Typography>
                                    Second generation provides the same wide range of possibilities for end users and
                                    admins (like cargo tracking, online support and admin interface), while also
                                    featuring modern Material design, improved UX and speed. It is also optimized for
                                    mobile phones and tablets of any kind.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
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
                    <Grid item xs={12} sm={6}>
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
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="./img/portfolio/ug/poker/carousel_2.png"
                                title="Ultimate Poker"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Ultimate Poker
                                </Typography>
                                <Typography>
                                    In this project, my team and I developed server-driven multi-platform poker game
                                    client, capable of working on Mac, Windows, iPad, Android tablets and in the
                                    browser. During the development, I also participated in creation of a set of
                                    complicated instruments, including: Bots Management Service, Replay Service, Log
                                    Processing Service and more.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="./img/portfolio/hobby/streamViewer10.png"
                                title="StreamViewer 10"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    StreamViewer 10
                                </Typography>
                                <Typography>
                                    An open source Angular application for Windows 10 (WinJS) and the Web, allowing
                                    comfortable browse and view of several video streams from Twitch.tv at the same
                                    time. Works in all modern browsers, including tablets. Source code is available on
                                    GitHub.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="./img/portfolio/lanks/lanksMain.png"
                                title="Lanks (first generation)"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lanks (first generation)
                                </Typography>
                                <Typography>
                                    This is the first generation of Lanks web site my team and I developed back to 2009.
                                    It was designed to inform Russian customers about prices and services of company and
                                    also give them the possibility to calculate price of transportation and track their
                                    package. Additionally, special module allows content managers and operators to
                                    update news and package data without interaction with site crew.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="./img/portfolio/hobby/starJourney.png"
                                title="Star Journey"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Star Journey
                                </Typography>
                                <Typography>
                                    This prototype is my first experience in HTML5 canvas game development. Small
                                    3-levels screen slider game was written in a week and should be considered as
                                    learning via practice. Source code is available on GitHub, but beware - it is quite
                                    outdated and not optimized for end user usage.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="./img/portfolio/lanks/logistics school.png"
                                title="Logistics School website"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Logistics School website
                                </Typography>
                                <Typography>
                                    Simple, but good-looking and well-optimized web site for Logistics School of one of
                                    universities in Voronezh, Russia. It is also mobile friendly and works on wide range
                                    of desktop and mobile devices.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="./img/portfolio/nodeProjects/ALV1.png"
                                title="Alliance of Logistics Specialists"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Alliance of Logistics Specialists
                                </Typography>
                                <Typography>
                                    My first commercial project where I used full power of NodeJs Express server to not
                                    only serve web pages, but also to provide online ordering, RESTful API for partners,
                                    administrator interface, content management system and more.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="./img/portfolio/mySite/desktop1.png"
                                title="Personal web space (v1)"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Personal web space (v1)
                                </Typography>
                                <Typography>
                                    The first version was based on Bootstrap 3 and served me well for years. I tried to
                                    make it as simple and clear as it is possible. It is mobile-friendly and will work
                                    fine on any device from smartphone and tablet to widescreen monitor and TV.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Typography variant="h3" align="center" component="h1" gutterBottom
                            className={classes.cursiveFont}>Libraries</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    GlobalPayments.js
                                </Typography>
                                <Typography>
                                    I wrote one of four gateways and an Apple Pay integration module for the <a
                                    href={"https://github.com/globalpayments/globalpayments-js"} target={"_blank"}
                                    rel="noopener noreferrer">open-sourced banking library GlobalPayments.js.</a><br/>
                                    This plugin allows user to convert a credit card, gift card, or ACH/eCheck account
                                    into a secure token value which can be charged in a PCI friendly way.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Multi-platform Payments Processing system
                                </Typography>
                                <Typography>
                                    This library allows integrator to conduct payments from their web site via Desktop
                                    or Mobile application, specialized stationary or mobile card reader or by entering
                                    card data manually.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    WebSocket communication layer
                                </Typography>
                                <Typography>
                                    I wrote WebSocket-based communication layer between Mobile website and Native Mobile
                                    application.
                                    It allowed seamless data transition between two counterparts on both Android and
                                    iOS.
                                    It was small and fast library with intuitive interface for easy integration with
                                    third-party websites.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Ultimate React Quickseed
                                </Typography>
                                <Typography>
                                    The open-sourced github project I created for easy start of new React 15 projects.
                                    It came with support for TypeScript, React Router, Redux, Actions, Thunk and allowed
                                    quick start of new class-based React applications.
                                    My team and I wrote a few React applications based on this quickseed until moving
                                    forward to React Hooks.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Typography variant="h3" align="center" component="h1" gutterBottom
                            className={classes.cursiveFont}>Back-end projects</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lanks, Ltd. web server on AWS
                                </Typography>
                                <Typography>
                                    I created Node Express application to serve Lanks website. I setup MongoDB as a
                                    database and insured its proper configuration and connection.
                                    <br/>I also wrote several APIs for server-side based price calculations, news
                                    updates, integrations with Warehouse inventory systems and order tracking.
                                    <br/>It is hosted on AWS which I setup and configured from scratch.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Alliance of Logistics Specialists
                                </Typography>
                                <Typography>
                                    I wrote Node Express-based server to support Alliance's web portal and its
                                    functionality.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Server-side application for GP.js support
                                </Typography>
                                <Typography>
                                    I contributed to the creation of server application allowing use of certain features of GlobalPayments.js, including Apple Pay integration.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Logistics School hosting on Google Cloud Platform
                                </Typography>
                                <Typography>
                                    I setup hosting of Logistics School website on Google Cloud Platform, configured it's domains and HTTPS security
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
}
