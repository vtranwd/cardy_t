import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import User from './components/showUser/showUser.js';
import createUser from './components/createUser/createUser.js';
import { classes } from '@material-ui/styles';
import useStyles from './styles';

function App() {
    const classes = useStyles();
    return (
        <div className="App">
            <h1>App</h1>
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit" >
                    <Typography className={classes.heading} variant="h2" align="center">Users Create & Show</Typography>
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch">
                            <Grid item xs={12} sm={7}>
                                <AppBar className={classes.appBar} position="static" color="inherit">
                                    <User />
                                </AppBar>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                 <AppBar className={classes.appBar} position="static" color="inherit">
                                    <CreateUser />
                                </AppBar>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    );
}

export default App;