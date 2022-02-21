import Head from 'next/head'
import Link from 'next/link'  // Link is a component from Material UI
import { AppBar, Typography, Toolbar, Container, Badge, createTheme, ThemeProvider, CssBaseline, Switch, Button } from '@material-ui/core'
import useStyles from '../utils/styles'
import { FaShoppingCart, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useContext } from 'react'
import { Store } from '../utils/store'
import Cookies from 'js-cookie'
import { useSnackbar } from 'notistack'
const Layout = ({title ,children, description}) => {

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const {state, dispatch} = useContext(Store)
  const { darkMode, cart } = state

  const signOut = () => {
    enqueueSnackbar('Logged Out', { variant: 'info'})
    Cookies.remove('userInfo')
    dispatch({type: 'SIGN_OUT'})
  }

    const theme = createTheme({
        typography: {
          h1: {
            fontFamily: 'Changa',
            fontSize: '1.6rem',
            fontWeight: 400,
            margin: '.3rem 0',
            marginLeft: '.5rem',
            marginBottom: '.5rem'
          },
          h2: {
            fontFamily: 'Changa',
            fontSize: '1rem',
            fontWeight: 400,
            margin: '.3rem 0',
            marginLeft: '.5rem'
          },
          h4: {
            fontFamily: 'Changa',
            fontSize: '1.4rem',
            fontWeight: 400,
            margin: '.3rem 0',
            marginLeft: '.5rem'
          },
          h5: {
            fontFamily: 'Changa',
            fontSize: '1rem',
            fontWeight: 400,
            margin: '.3rem 0',
          }
        },
        palette: {
          type: darkMode ? 'dark' : 'light',
          primary: {
            main: '#f0c000',
          },
          secondary: {
            main: '#208080',
          },
        },
      })
    const darkModeSwitch = () => {
        dispatch({type: 'TOGGLE_DARK_MODE'})
        const newDarkMode = !darkMode
        Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF')
    } 
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>{title ? `${title} - Next Amazona` : 'Next Amazona'}</title>
                {description && <meta name="description" content={description}></meta>}
            </Head>
            <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position = 'fixed' className = {classes.navbar}>
                <Toolbar>
                    <Typography className = {classes.brand}><Link href = '/'><a>amazona</a></Link></Typography>
                    <div className = {classes.grow}></div>
                    <Switch checked = {darkMode} onChange = {darkModeSwitch} />
                    <Typography variant = 'h6'>
                      <Link href = '/cart'>
                        <a style = {{color: 'white'}}>
                         <Badge color = 'primary' badgeContent={cart.cartItems.length}>
                          <FaShoppingCart />
                         </Badge>
                        </a>
                      </Link>
                    </Typography>

                    {state.userInfo?
                    <>
                      <Button style ={{color: 'wheat', marginLeft: '1rem', cursor: 'pointer', fontSize: '1rem'}}>
                        <FaUser style ={{color: 'wheat', marginRight: '.4rem'}} />{state.userInfo.name}
                      </Button>
                    </>
                    :
                    <Typography className = {classes.margin} variant = 'h6'>
                      <Link href = '/login'>
                        <a style = {{color: 'white'}}>
                          Login
                        </a>
                      </Link>
                    </Typography>}

                </Toolbar>
            </AppBar>
            <Container className ={classes.main}>
                {children}
                {state.userInfo?
                <button onClick={signOut} style ={{bottom: '2rem', right: '2rem', position: 'fixed', fontSize: '1rem', color: 'white', padding: '1rem', borderRadius: '50%', backgroundColor: '#203040'}} >
                  <FaSignOutAlt />
                </button>:
                <>
                </>
                }
            </Container>
            <footer className={classes.footer}>
                <Typography>All rights preserved to &copy; Amazon next dev</Typography>
            </footer>
            </ThemeProvider>
        </div>
    )
}

export default Layout