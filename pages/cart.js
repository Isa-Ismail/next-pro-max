import Layout from "../components/Layout"
import { Typography, Card, Grid, Button, Select, MenuItem, List, ListItem } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { useContext } from "react"
import { Store } from "../utils/store"
import { FaTrash } from "react-icons/fa"
import { useRouter } from 'next/router'
import dynamic from "next/dynamic"

const useStyles = makeStyles({
    table: {
      Width: 650,
    },
  })

const Cart = () => {
    const router = useRouter ()
    const {state, dispatch} = useContext (Store)

    const checkoutHandler = () => {
        router.push('/shipping')
    }

    const classes = useStyles()

    if(state.cart.cartItems.length ===0){
        return  <Layout description = 'Check out your products here' title = 'Cart'>
                    <Typography variant="h1">Cart empty</Typography>
                </Layout>
    }

    return (
        <Layout description = 'Check out your products here' title = 'Cart'>
            <Grid container spacing = {3}>
                <Grid item md = {8}>
                    <Card className = '!to-red-100'>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead className = '!bg-lime-600' >
                            <TableRow>
                                <TableCell className = '!text-xl' align="right">product</TableCell>
                                <TableCell className = '!text-xl' align="right">Quantity</TableCell>
                                <TableCell className = '!text-xl' align="right">Price</TableCell>
                                <TableCell className = '!text-xl' align="right">Sum</TableCell>
                                <TableCell className = '!text-xl' align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                state.cart.cartItems.map( item => {
                                    return (
                                        <TableRow key = {item.name}>
                                            <TableCell align="right">{item.name}</TableCell>
                                            <TableCell align="right">
                                                <Select value={item.quantity} onChange={(e) => dispatch({type: 'CART_ADD_ITEM', payload: { ...item, quantity: e.target.value }})}>
                                                {[...Array(item.countInStock).keys()].map((x) => (
                                                    <MenuItem key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                    </MenuItem>
                                                ))}
                                                </Select>           
                                            </TableCell>
                                            <TableCell align="right">{item.price}</TableCell>
                                            <TableCell align="right">{item.price*item.quantity}</TableCell>
                                            <TableCell><FaTrash onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item._id})} className = '!ml-12 !cursor-pointer'/></TableCell>
                                        </TableRow>
                                        )
                                })
                            }
                        </TableBody>
                    </Table>
                    </Card>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Card>
                    <List>
                        <ListItem>
                        <Typography variant="h1">
                            Subtotal ({state.cart.cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                            items) : $
                            {state.cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                        </Typography>
                        </ListItem>
                        <ListItem>
                        <Button
                            onClick={checkoutHandler}
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Check Out
                        </Button>
                        </ListItem>
                    </List>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default dynamic(() => Promise.resolve(Cart), { ssr: false })
