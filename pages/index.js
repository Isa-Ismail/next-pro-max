import { Grid, Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from "@material-ui/core"
import { Rating } from "@material-ui/lab"
import Layout from "../components/Layout"
import Link from "next/link"
import useStyles from "../utils/styles"
import db from '../utils/db'
import Product from '../models/Product'
import axios from "axios"
import { useContext} from "react"
import { Store } from "../utils/store"

const Home = ({products}) => {
  const {state , dispatch} = useContext( Store )
  const {query} = state
  const classes = useStyles()
  return (
  <Layout title = 'Home page' description = 'Browse your favorite shirts and other products online and get delivered at your comfort zone in time and for money you can afford. So go on.'>
    <Typography variant = "h1">Products</Typography>
    <Grid container spacing = {3}>
      {products.filter(item=> query?item.name.toLowerCase().indexOf(query)!==-1:item).map((product) => {
        return (
          <Grid item md = {4} key = {product.name}>
            <Card>
              <Link href = {`/products/${product._id}`}>
              <CardActionArea>
                <CardMedia className = '!h-[300px]' component = "img" image = {product.image} title = {product.name} />
              </CardActionArea>
              </Link>
              <CardContent>
                <Typography gutterBottom variant = "h1">{product.name}</Typography>
                <Rating name = "read-only" value = {product.rating} readOnly precision={0.1} />
              </CardContent>
              <CardActions>
                <Typography variant = "h2">${product.price}</Typography>
                <div className = {classes.grow}></div>
                <Button size = "medium" variant = 'contained' color= 'primary'><Link href = {`/products/${product._id}`} ><Typography variant = 'h2'>View Product</Typography></Link></Button>
              </CardActions>
            </Card>
          </Grid>
        )
      })
      }
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
