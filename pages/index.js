import { useState } from "react"
import { Grid, Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from "@material-ui/core"
import Layout from "../components/Layout"
import data from "../utils/data"
import Link from "next/link"

const Home = () => {

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
                <CardMedia component = "img" image = {product.image} title = {product.name} />
              </CardActionArea>
              </Link>
              <CardContent>
                <Typography gutterBottom variant = "h5">{product.name}</Typography>
              </CardContent>
              <CardActions>
                <Typography variant = "h6">${product.price}</Typography>
                <Button size = "medium" style = {{ marginLeft: '8rem', backgroundColor: 'wheat', color: '#203040'}}>Add to cart</Button>
              </CardActions>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  </Layout>)
}

export default Home