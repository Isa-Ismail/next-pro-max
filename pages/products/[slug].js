import { Card, CardActionArea, CardContent, CardActions, CardMedia, Typography, Button, Grid } from "@material-ui/core"
import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import data from "../../utils/data"
import useStyles from "../../utils/styles"
import { Rating } from "@material-ui/lab"

const Product = () => {
    const router = useRouter()
    const { slug } = router.query
    const product = data.products.find(product => product.slug === slug)
    const classes = useStyles()
    return (
        <>
            { !product ? (<Typography>Product not found</Typography>) :
             <Layout title = {product.name} description = {product.description}>
                <div>
                <Grid container spacing = {1}>
                    <Grid item md = {6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia height="350" component = "img" image = {product.image} title = {product.name} />
                            </CardActionArea>
                            <CardContent>
                                <Typography variant = "h6">{product.name}</Typography>
                                <Typography variant = "h7">brand - {product.brand}</Typography><br/>
                                <Typography variant = "h7">{product.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md ={3}>
                        <Card>
                        <Typography variant = 'h1'>product description</Typography>
                        <Typography variant = 'h2'>name - {product.name}</Typography>
                        <Typography variant = 'h2'>brand - {product.brand}</Typography>
                        <Typography variant = 'h2'>description - {product.description}</Typography>
                        <Rating name = "read-only" value = {product.rating} readOnly precision={0.1} />
                        <Typography variant = 'h2'>total reviews - {product.numReviews}</Typography>
                        </Card>
                    </Grid>
                    <Grid item md ={3}>
                        <Card>
                            <CardContent>
                                <Typography variant = 'h1'>price - ${product.price}</Typography>
                                <Typography variant = 'h1'>status - {product.countInStock>0?'In stock':'Out of stock'}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick = {() => {}} variant = 'contained' color = 'primary'>Add to cart</Button>
                            </CardActions>
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