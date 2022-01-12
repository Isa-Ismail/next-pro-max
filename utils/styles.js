import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar:{
        backgroundColor: '#203040',
        padding: '.1rem',
    },
    main: {
        padding: '1rem',
        minHeight: '80vh',
        maxWidth: '170vh'
    },
    footer: {
        textAlign: 'center'
    },
    brand: {
        color: '#fff',
        fontSize: '2rem',
        textDecoration: 'none',
        '&:hover': {
            color: '#f0c000'
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