import { Grid, Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from "@material-ui/core"
import Layout from "../components/Layout"
import data from "../utils/data"
import Link from "next/link"
import useStyles from "../utils/styles"
const Home = () => {
 const classes = useStyles()
  return (
  <Layout>
    <Typography variant = "h3">Products</Typography>
    <Grid container spacing = {3}>
      {data.products.map((product) => {
        return (
          <Grid item md = {3} key = {product.name}>
            <Card>
              <Link href = {`/products/${product.slug}`}>
              <CardActionArea>
                <CardMedia height="350" component = "img" image = {product.image} title = {product.name} />
              </CardActionArea>
              </Link>
              <CardContent>
                <Typography gutterBottom variant = "h1">{product.name}</Typography>
              </CardContent>
              <CardActions>
                <Typography variant = "h2">${product.price}</Typography>
                <div className = {classes.grow}></div>
                <Button size = "medium" variant = 'contained' color= 'primary'><Typography>Add to cart</Typography></Button>
              </CardActions>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  </Layout>)
}

export default Home