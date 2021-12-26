import Head from 'next/head'
import Link from 'next/link'  // Link is a component from Material UI
import { AppBar, Typography, Toolbar, Container } from '@material-ui/core'
import useStyles from '../utils/styles'
import { FaBeer, FaShoppingCart } from 'react-icons/fa'
const Layout = ({title ,children, description}) => {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>{title ? `${title} - Next Amazona` : 'Next Amazona'}</title>
                {description && <meta name="description" content={description}></meta>}
            </Head>
            <AppBar position = 'static' className = {classes.navbar}>
                <Toolbar>
                    <Typography className = {classes.brand} variant = 'h6'><Link href = '/'><a>amazona</a></Link></Typography>
                    <div className = {classes.grow}></div>
                    <Typography variant = 'h6'><Link href = '/news'><a><FaShoppingCart /></a></Link></Typography>
                    <Typography className = {classes.margin} variant = 'h6'><Link href = '/news'><a>Login</a></Link></Typography>
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