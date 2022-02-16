import { Typography } from "@material-ui/core";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useContext } from "react";
import { Store } from "../utils/store";

const shipping = () => {
  
  const {state , dispatch} = useContext( Store )
  const router = useRouter()
  useEffect(() => {
    if ( !auth ) router.push('/login');
  },[])
  return (
  <Layout>
      <Typography variant = 'h1'>Shipping</Typography>
      
  </Layout>
  )
};

export default shipping;
