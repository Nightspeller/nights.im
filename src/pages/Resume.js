import React, {useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
        display: 'flex',
        flexWrap: 'wrap',

        marginBottom: theme.spacing(3),
        '& > div:first-child': {
            flexGrow: 1,
            display: 'grid',
            placeItems: 'center',
        },
        '&:nth-child(odd)': {
            flexDirection: 'row-reverse',
        },
    },
    cardMedia: {
        width: '100%',
        maxWidth: '400px',
        maxHeight: '275px',
        padding: theme.spacing(2),
    },
    cardContent: {
        flexGrow: 999999,
        flexBasis: '500px',
    },
}));

export default function Resume() {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main>
            <header className={classes.headerContent}>
                <Container maxWidth="md">
                    <Typography component="h1" variant="h3" align="center" color="textPrimary"
                                gutterBottom
                                className={classes.cursiveFont}>
                        Resume
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        I have more than 10 years of experience developing customer-facing sites and portals, internal
                        web applications, APIs, libraries and browser games
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph style={{fontWeight: 400}}>
                        I worked at large international corporations, consulting agencies, small businesses and
                        fast-paced startups
                    </Typography>
                </Container>
            </header>
            <Container className={classes.cardGrid} maxWidth="lg">
                <Typography variant="h3" align="center" component="h1" gutterBottom
                            className={classes.cursiveFont}>Job experience</Typography>
                <Card className={classes.card}>
                    <div>
                        <img className={classes.cardMedia} src={"./img/resume/mindtree.png"} alt={"Mindtree logo"}/>
                    </div>
                    <CardContent className={classes.cardContent}>
                        <Typography component="h5" variant="h5">
                            Mindtree, Inc. <small>02.2017 - 06.2020</small>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Senior Consultant
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Mindtree is an international software development company, where I played roles of Technical
                            Consultant, Project Lead and Senior full-stack engineer for different projects of our
                            numerous clients.<br/>
                            As a Senior full-stack lead engineer I:
                            <ul>
                                <li>Choose technology stack for the project, plan <strong>architecture</strong> and setup environment
                                </li>
                                <li>Develop critical parts and components of the system, monitor and optimize
                                    performance
                                </li>
                                <li>Distribute tasks between developers, conduct code reviews upon completion</li>
                                <li>Maintain project health and control technical debt</li>
                                <li>Constantly keep myself and team in shape, aware of new technologies, tools and
                                    approaches
                                </li>
                            </ul>
                            As a Technical Consultant and Project Lead I:
                            <ul>
                                <li>Help create and\or evaluate technical requirements for the projects</li>
                                <li>Prepare job descriptions for HRs and interview candidates</li>
                                <li>Provide training and mentoring for other engineers in Angular, React, NodeJS</li>
                                <li>Consult management on optimal team composition and structure</li>
                                <li>Setup development process and ensure smooth day-to-day operation of a team</li>
                            </ul>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Tech: Angular, React, Ionic, WebSockets, PWA, Express, MongoDB, Firebase, 3ed party APIs,
                            Docker, project tech migration, unit and end-to-end testing, Git.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <div>
                        <img className={classes.cardMedia} src={"./img/resume/flypside.png"} alt={"Flypside logo"}/>
                    </div>
                    <CardContent className={classes.cardContent}>
                        <Typography component="h5" variant="h5">
                            AXTC, Inc. <small>03.2015 - 08.2016</small>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Lead client-side developer
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            I worked as a lead UI\UX developer in a startup company called Flypside – free and
                            revolutionary smartphone application for people in motion. We developed it for Android and
                            iOS devices based on web technologies, Ionic framework and AngularJS.<br/>
                            I was responsible for the creation of client-side part of an app: from concepts and
                            architecture to testing and publishing in the app stores. Under my lead, the client-side
                            team and I created views, services, routing, real-time communication and other social
                            interactions, put to use API provided by our server-side team as well as Facebook, Google
                            maps, FireBase, EvenSeeker and other APIs and services. I also implemented user behavior
                            monitoring and statistics gathering.
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Tech: Ionic, Angular, Nodejs, Firebase, Gulp, Cordova, Stylus, XCode, Google Maps API,
                            Facebook API, Google Analytics, Git, JIRA.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <div>
                        <img className={classes.cardMedia} src={"./img/resume/alv.jpg"} alt={"Alv logo"}/>
                    </div>
                    <CardContent className={classes.cardContent}>
                        <Typography component="h5" variant="h5">
                            Alliance of Logistics Specialists, NGO <small>11.2014 - 03.2015</small>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Project Manager and Full Stack JS developer
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            My team and I built a web portal for an NGO in Russia.<br/>
                            As a project manager, I helped my clients to create concepts, designed services, assembled
                            requirements and wrote documentation. I also coordinated work of other designers, content
                            writers and developers.<br/>
                            As a full stack developer, I did prototyping, set up server-side environment, planed
                            database, developed API, wrote back-end and front-end code, markup pages and stylized it.
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Tech: Node.js (Express), MongoDB, HTML+JS+CSS (+Bootstrap), Git, AWS or dedicated servers,
                            agile.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <div>
                        <img className={classes.cardMedia} src={"./img/resume/ug.png"} alt={"Ultimate gaming logo"}/>
                    </div>
                    <CardContent className={classes.cardContent}>
                        <Typography component="h5" variant="h5">
                            Ultimate Gaming <small>01.2014 – 11.2014</small>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Software Engineer
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            I developed a mobile version of casino application based on existing Ultimate Gaming portal and multi-platform poker client for Ultimate Poker.<br/>
                            Ultimate Casino was designed and written for iOS devices such as iPhone, iPad and iPod touch. It also supported a huge range of Android devices. I did multiple front-end tweaks and optimizations to make it a completely cross-device, pixel perfect application. Ultimate Poker was written for Windows, MacOS, iOS, Android. I also participated in development of client side, logging system, replay service and tests writing.
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Tech: HTML5, CSS3 and JS, AngularJS, Adobe Fireworks, Stylus, Google Chrome Dev tools, Apple Developer Kit, Subversion, JIRA.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <div>
                        <img className={classes.cardMedia} src={"./img/resume/novartis.jpg"} alt={"Novartis logo"}/>
                    </div>
                    <CardContent className={classes.cardContent}>
                        <Typography component="h5" variant="h5">
                            Novartis Institutes for BioMedical Research <small>03.2013 – 12.2013</small>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Front-end web app developer
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            For NIBR, I developed a complicated single page web application for registration of biospecimens. It is a system with numerous interactions with user including not only UI validation and registration of new biological specimens, but also search, editing and exploration of existing records. Application provided different possibilities for users with different roles, like admins, curators and regular scientists.<br/>
                            I also refactored and modified existing app for tracking of experiments workflow. It was a big project with plenty of old code, giving me significant experience of development and maintenance of existing projects.
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Tech: HTML5, CSS3 and JS, Backbone+Marionette, Stylus, Subversion, Node.js Brunch, Datatables, D3 and plenty of other JS libraries (jQuery, Handlebars etc.).
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <div>
                        <img className={classes.cardMedia} src={"./img/resume/lanks.png"} alt={"Lanks logo"}/>
                    </div>
                    <CardContent className={classes.cardContent}>
                        <Typography component="h5" variant="h5">
                            Lanks Ltd <small>2009 - 2013</small>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Web-developer
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            We developed an Android\iOS compatible mobile app based on Ionic framework and AngularJS. I
                            was responsible for a creation of a front-end part of an app. In my work I am using
                            Facebook, Google maps, FireBase and other APIs and services.
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Tech: Ionic, Angular, Nodejs, Firebase, Gulp, Cordova, Stylus, XCode, Google Maps API,
                            Facebook API, Google Analytics, Git, JIRA.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <div>
                        <img className={classes.cardMedia} src={"./img/resume/lanks.png"} alt={"Lanks logo"}/>
                    </div>
                    <CardContent className={classes.cardContent}>
                        <Typography component="h5" variant="h5">
                            Lanks Ltd <small>2005 - 2009</small>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            System administrator and junior web developer
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            My responsibilities were: maintenance of computer networks, hardware and software configuration, technical support and training. Additionally, I obtained my first working experience in web design and basics of web development.
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Tech: Windows and Linux machines, HTML, CSS and JavaScript.
                        </Typography>
                    </CardContent>
                </Card>
                <Typography variant="h3" align="center" component="h1" gutterBottom
                            className={classes.cursiveFont}>Technical education and courses</Typography>
                <Card className={classes.card}>
                    <div>
                        <img className={classes.cardMedia} src={"./img/resume/spbu.jpg"} alt={"Spbu logo"}/>
                    </div>
                    <CardContent className={classes.cardContent}>
                        <Typography component="h5" variant="h5">
                            Saint Petersburg State University, Russia <small>2005 - 2009</small>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Bachelor of Applied Science, Applied Mathematics and Control Processes
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            I learned how to do analysis and computer modeling of the physical and social processes,
                            gained experience in research activities. During the education I applied my programming
                            skills in C++, improved knowledge of JavaScript and HTML. Also I acquired a basic knowledge
                            of statistics, probability theory and game theory.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography component="h5" variant="h5">
                            Building Business Applications with Vue.js and MongoDB, <small>2019</small>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Pluralsight
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography component="h5" variant="h5">
                            Yearly OWASP security trainings and examination, <small>2018 - 2020</small>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            OWASP Foundation
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography component="h5" variant="h5">
                            React Redux development course, <small>2017</small>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Egghead.io
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography component="h5" variant="h5">
                            20+ badges of advanced web dev courses, <small>2016 - 2017</small>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            CodeSchool
                        </Typography>
                    </CardContent>
                </Card>
                <Typography variant="h3" align="center" component="h1" gutterBottom
                            className={classes.cursiveFont}>Non-technical education and courses</Typography>
                <Card className={classes.card}>
                    <div>
                        <img className={classes.cardMedia} src={"./img/resume/rudn.png"} alt={"Rudn logo"}/>
                    </div>
                    <CardContent className={classes.cardContent}>
                        <Typography component="h5" variant="h5">
                            The Peoples' Friendship University of Russia (RUDN) <small>2009-2010</small>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Bachelor of PR and Marketing
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            In RUDN I obtained my second bachelor degree. I took classes in PR management, public
                            speaking and psychology of business communication, among others.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography component="h5" variant="h5">
                            Agile (Scrum) story writing and leadership training with certification, <small>2018</small>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Mindtree Agile Center of Excellence
                        </Typography>
                    </CardContent>
                </Card>
                <Typography variant="h3" align="center" component="h1" gutterBottom
                            className={classes.cursiveFont}>Awards</Typography>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography component="h5" variant="h5">
                            A-team SpotOn award, <small>2018</small>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            for displaying exemplary team spirit
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography component="h5" variant="h5">
                            Hats off SpotOn award, <small>2017</small>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            for achieving extraordinary results
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography component="h5" variant="h5">
                            Hats off SpotOn award, <small>2017</small>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            for achieving extraordinary results
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </main>
    );
}
