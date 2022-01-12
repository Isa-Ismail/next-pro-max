import { Card, CardActionArea, CardContent, CardActions, CardMedia, Typography, Button, Grid } from "@material-ui/core"
import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import data from "../../utils/data"
import useStyles from "../../utils/styles"
import { Rating } from "@material-ui/lab"
import TextField from '@material-ui/core/TextField';
import { useState } from "react"

const Product = () => {
    const router = useRouter()
    const { slug } = router.query
    const product = data.products.find(product => product.slug === slug)
    const classes = useStyles()
    const [comment, setComment] = useState('')

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
                                <Button onClick = {() => {}} variant = 'contained' color = 'primary'>Add to cart</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md = {12} spacing = {1}>
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
                                    </Card>
                    </Grid>
                    <Grid item md = {12} spacing = {1}>
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
                    </Grid>
                </Grid>
                </div>
            </Layout>
            }
        </>
    )
}
export default Product