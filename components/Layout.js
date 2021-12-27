import Head from 'next/head'
import Link from 'next/link'  // Link is a component from Material UI
import { AppBar, Typography, Toolbar, Container, createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core'
import useStyles from '../utils/styles'
import { FaBeer, FaShoppingCart } from 'react-icons/fa'
const Layout = ({title ,children, description}) => {
    const theme = createMuiTheme({
        typography: {
          h1: {
            fontSize: '1.6rem',
            fontWeight: 400,
            margin: '.3rem 0',
            marginLeft: '.5rem',
            marginBottom: '.5rem'
          },
          h2: {
            fontSize: '1.4rem',
            fontWeight: 400,
            margin: '.3rem 0',
            marginLeft: '.5rem'
          }
        },
        palette: {
        //   type: darkMode ? 'dark' : 'light',
          primary: {
            main: '#f0c000',
          },
          secondary: {
            main: '#208080',
          },
        },
      })
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>{title ? `${title} - Next Amazona` : 'Next Amazona'}</title>
                {description && <meta name="description" content={description}></meta>}
            </Head>
            <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position = 'static' className = {classes.navbar}>
                <Toolbar>
                    <Typography className = {classes.brand} variant = 'h6'><Link href = '/'><a style = {{color: 'white'}}>amazona</a></Link></Typography>
                    <div className = {classes.grow}></div>
                    <Typography variant = 'h6'><Link href = '/news'><a style = {{color: 'white'}}><FaShoppingCart /></a></Link></Typography>
                    <Typography className = {classes.margin} variant = 'h6'><Link href = '/news'><a style = {{color: 'white'}}>Login</a></Link></Typography>
                </Toolbar>
            </AppBar>
            <Container className ={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>All rights preserved to &copy; Amazon next dev</Typography>
            </footer>
            </ThemeProvider>
        </div>
    )
}

export default Layout