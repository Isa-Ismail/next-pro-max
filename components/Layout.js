import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { AppBar, Typography, Toolbar, Container } from '@material-ui/core'
import useStyles from '../utils/styles'

const Layout = ({children}) => {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>Next Project</title>
            </Head>
            <AppBar position = 'static' className = {classes.navbar}>
                <Toolbar>
                    <Typography variant = 'h6'>amazon</Typography>
                    <Link href = '/cart'>Cart</Link>
                </Toolbar>
            </AppBar>
            <Container className ={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>All rights preserved to &copy; Amazon next dev</Typography>
            </footer>
        </div>
    )
}

export default Layout
