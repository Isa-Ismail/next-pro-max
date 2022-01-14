import { Grid, Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from "@material-ui/core"
import Layout from "../components/Layout"
import Link from "next/link"
import useStyles from "../utils/styles"
import db from '../utils/db'
import Product from '../models/Product'

const Home = ({products}) => {
 const classes = useStyles()
  return (
  <Layout title = 'Home page' description = 'Browse your favorite shirts and other products online and get delivered at your comfort zone in time and for money you can afford'>
    <Typography variant = "h1">Products</Typography>
    <Grid container spacing = {3}>
      {products.map((product) => {
        return (
          <Grid item md = {4} key = {product.name}>
            <Card>
              <Link href = {`/products/${product.slug}`}>
              <CardActionArea>
                <CardMedia height="300" component = "img" image = {product.image} title = {product.name} />
              </CardActionArea>
              </Link>
              <CardContent>
                <Typography gutterBottom variant = "h1">{product.name}</Typography>
              </CardContent>
              <CardActions>
                <Typography variant = "h2">${product.price}</Typography>
                <div className = {classes.grow}></div>
                <Button size = "medium" variant = 'contained' color= 'primary'><Typography variant = 'h2'>Add to cart</Typography></Button>
              </CardActions>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  </Layout>)
}

export default Home

export const getServerSideProps = async (context) => {
  await db.connect()
  const products = await Product.find({}).lean()
  await db.disconnect()
  return {
    props: {
      products: products.map(db.convertDocToObj)
    }
  }
}