import { Card, CardActionArea, CardContent, CardActions, CardMedia, Typography, Button, Grid } from "@material-ui/core"
import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import data from "../../utils/data"
import useStyles from "../../utils/styles"
import { Rating } from "@material-ui/lab"
import TextField from '@material-ui/core/TextField';
import { useContext, useState } from "react"
import Modal from '../../components/Modal'
import db from '../../utils/db'
import Product from '../../models/Product'
import { Store } from "../../utils/store"
import axios from "axios"
import { useSnackbar } from 'notistack'

export const getStaticProps = async (context) => {

    const {params} = context
    const {id} = params
    const { data } = await axios.get(`https://next-pro-max.vercel.app/api/products/${id}`)
    return {
      props: {
        product: data
        },
        revalidate: 60
    }
}

export const getStaticPaths = async (context) => {

    const { data } = await axios.get(`https://next-pro-max.vercel.app//api/products`)
    return {
    paths: data.map( item => ({params: {id: item._id.toString()}})),
    fallback: true
    }
}

// hotfix
// export async function getServerSideProps(context) {
//   const { params } = context;
//   const { id } = params;

//   await db.connect();
//   const product = await Product.findOne({ id }).lean();
//   await db.disconnect();
//   return {
//     props: {
//       product: product ? db.convertDocToObj(product) : null,
//     },
//   };
// }

const IndiProduct = ({product}) => {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
    const router = useRouter()
    const {slug} = useRouter().query
    const classes = useStyles()
    const [comment, setComment] = useState('')
    const [value, setValue] = useState(0)
    const {state, dispatch} = useContext(Store)
    const addToCartHandler = async () => {
        const existItem = state.cart.cartItems.find((x) => x._id === product._id)
        const quantity = existItem ? existItem.quantity + 1 : 1
        dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })
        enqueueSnackbar('Item added to Cart', {variant: 'success'})
        router.push('/cart')
      }
    return (
        <>
            { !product ? (<Typography>Product not found</Typography>) :
            <Layout title = {product.name} description = {product.description}>
                <div>
                <Grid container spacing = {3}>
                    <Grid item md = {6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia height="550" component = "img" image = {product.image} title = {product.name} />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item md ={3}>
                        <Card style = {{padding: '.5rem'}}>
                        <Typography variant = 'h1'>product description</Typography>
                        <Typography variant = 'h2'>name - {product.name}</Typography>
                        <Typography variant = 'h2'>brand - {product.brand}</Typography>
                        <Typography variant = 'h2'>description - {product.description}</Typography>
                        <Rating name = "read-only" value = {product.rating} readOnly precision={0.1} />
                        <Typography variant = 'h2'>total reviews - {product.numReviews}</Typography>
                        </Card>
                    </Grid>
                    <Grid item md ={3}>
                        <Card style = {{padding: '.5rem'}}>
                            <CardContent>
                                <Typography variant = 'h1'>price - ${product.price}</Typography>
                                <Typography variant = 'h1'>status - {product.countInStock>0?'In stock':'Out of stock'}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick = {addToCartHandler} variant = 'contained' color = 'primary'>Add to cart</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    {/* <Grid item md = {12}>
                                    <Card>
                                        <CardContent>
                                            <TextField
                                            id="outlined-multiline-flexible"
                                            label="Review Product"
                                            style={{width: '50rem'}}
                                            multiline
                                            maxRows={4}
                                            value = {comment}
                                            onChange = { (e)=> setComment(e.target.value) }
                                            variant="outlined"
                                            /><br/><br/>
                                            <Button variant = 'contained' color = 'primary'>Submit</Button>
                                        </CardContent>
                                        <CardActions>
                                            <Typography variant = 'h1'>Rate this product</Typography>
                                            <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(e) => {setValue(e.target.value)}}
                                            />
                                        </CardActions>
                                    </Card>
                    </Grid> */}
                    {/* <Grid item md = {12}>
                        <Card>
                            <CardContent>
                                <Typography variant = 'h1'>Reviews</Typography>
                                <Card style = {{width: '20rem', backgroundColor: 'lightblue'}}>
                                    <CardContent>
                                        <Typography variant = 'h2'>Here is a comment</Typography>
                                        <Typography variant = 'h2'>-Fahim</Typography>
                                    </CardContent>
                                </Card>
                            </CardContent>
                        </Card>
                    </Grid> */}
                </Grid>
                </div>
            </Layout>
            }
        </>
    )
}
export default IndiProduct
