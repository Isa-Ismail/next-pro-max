import { useState } from "react"
import { Typography } from "@material-ui/core"
import Layout from "../components/Layout"

const Home = () => {
  const [name, setName] = useState('')

  return (
  <Layout>
    <Typography>Products</Typography>
  </Layout>)
}

export default Home