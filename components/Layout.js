import React from 'react'
import Head from 'next/head'
import { AppBar, Typography, Toolbar, Container } from '@material-ui/core'
import useStyles from '../utils/styles'

const Layout = ({children}) => {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>Next Project</title>
            </Head>
            <AppBar position = 'static' className = {classes.navbar} style ={{padding: '1rem'}}>
                <Typography>amazon</Typography>
            </AppBar>
            <Container className ={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>All rights preserved to Amazon next dev</Typography>
            </footer>
        </div>
    )
}

export default Layout
