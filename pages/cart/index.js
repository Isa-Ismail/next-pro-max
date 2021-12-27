import Layout from "../../components/Layout"
import { Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, Button, Grid } from "@material-ui/core"
import { FaBeer, FaBuyNLarge } from "react-icons/fa"
import Link from "next/link"
import { useRouter } from "next/router"

const Cart = () => {
    return (
        <Layout>
            <Grid container spacing = {3}>
                <Grid item md = {6}>
                    <Card style = {{backgroundColor: '#dd3e54'}}>
                        <CardContent>
                            <Typography>Hello</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default Cart
