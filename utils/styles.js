import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar:{
        backgroundColor: '#203040',
        padding: '.3rem',
    },
    main: {
        minHeight: '80vh'
    },
    footer: {
        textAlign: 'center'
    },
    brand: {
        color: '#fff',
        fontSize: '1.5rem',
        textDecoration: 'none',
        '&:hover': {
            color: 'cyan'
        }
    },
    grow: {
        flexGrow: 1
    },
    margin: {
        marginLeft: '1.5rem'
    },
    card: {
        maxWidth: '350px',
        margin: '2rem'
    }
})

export default useStyles