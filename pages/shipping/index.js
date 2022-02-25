import { Card, CardContent, Button, TextField, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@material-ui/core";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useContext } from "react";
import { Store } from "../../utils/store"
import Image from "next/image";

const Shipping = () => {
  
  const {state , dispatch} = useContext( Store )
  const router = useRouter()
  useEffect(() => {
    if ( !state.userInfo ) router.push('/login');
  },[state.userInfo])
  return (
  <Layout>
      <Grid container spacing = {2}>
        <Grid item md = {7} sm = {12}>
        <div>
        <Typography variant = 'h1'>
              Customer info
        </Typography>
          <Card>
            <CardContent>
              <div className="flex space-x-20">
              <TextField
              variant="outlined"
              margin="normal"
              required
              halfWidth
              id="firstName"
              label="first name"
              name="firstName"
              autoFocus
              />
              <TextField
              variant="outlined"
              margin="normal"
              required
              halfWidth
              id="lastName"
              label="last name"
              name="lasstName"
              />
              </div>
              <div className="flex space-x-20">
              <TextField
              variant="outlined"
              margin="normal"
              required
              halfWidth
              id="email"
              label="email address"
              name="email"
              />
              <TextField
              variant="outlined"
              margin="normal"
              required
              halfWidth
              id="firstName"
              label="first name"
              name="firstName"
              />
              </div>
            </CardContent>
          </Card>
          </div>
          <div className = "my-10">
          <Typography className = "" variant = 'h1'>
              Shipping address
          </Typography>
          <Card>
            <CardContent>
              <div className="flex space-x-20">
              <TextField
              variant="outlined"
              margin="normal"
              required
              halfWidth
              id="firstName"
              label="first name"
              name="firstName"
              autoFocus
              />
              <TextField
              variant="outlined"
              margin="normal"
              required
              halfWidth
              id="lastName"
              label="last name"
              name="lasstName"
              />
              </div>
              <div className="flex space-x-20">
              <TextField
              variant="outlined"
              margin="normal"
              required
              halfWidth
              id="email"
              label="email address"
              name="email"
              />
              <TextField
              variant="outlined"
              margin="normal"
              required
              halfWidth
              id="firstName"
              label="first name"
              name="firstName"
              />
              </div>
            </CardContent>
          </Card>
          </div>
        </Grid>
        <Grid item md = {5} sm = {12} style = {{position: 'sticky'}}>
          <Typography variant = 'h1'>Your order</Typography>
          <Card>
            <Table>
            <TableHead className = '!bg-amber-300'>
              <TableCell>
                <Typography variant = 'h4'>
                  item
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant = 'h4'>
                  quantity
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant = 'h4'>
                  price ($)
                </Typography>
              </TableCell>
              
            </TableHead>
              <TableBody>
                {state.cart.cartItems.map(item=>(
                  <TableRow key = {item._id}>
                    <TableCell>
                      <Image src={item.image} width={40} height={40}/>
                      <Typography variant = 'h5'>{item.name}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant = 'h5'>{item.quantity}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant = 'h5'>{item.quantity*item.price}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              </Table>
              <TableCell>
                  <Typography variant = 'h5'>Enter coupon</Typography>
                    <TextField />
                  <Button color = 'primary' variant = 'contained'>
                    Apply
                  </Button>
              </TableCell>
              <div>
                <div className='flex p-2'>
                  <Typography variant = 'h2' className = 'text-blue-800'>
                    Subtotal
                  </Typography>
                  <Typography variant = 'h2' className = 'pl-20 text-blue-800'>
                    ${state.cart.cartItems.reduce((a, b) => a + b.quantity*b.price,0)}
                  </Typography>
                </div>
                <div className='flex p-2'>
                  <Typography variant = 'h2' className = 'text-blue-800'>
                    Tax
                  </Typography>
                  <Typography variant = 'h2' className = 'pl-28 text-blue-800'>
                    $0
                  </Typography>
                </div>
                <div className='flex border-y-2'>
                  <Typography variant="h2" color = 'primary'>
                    Total
                  </Typography>
                  <Typography variant="h2" className = 'pl-28' color = 'primary'>
                    ${state.cart.cartItems.reduce((a, b) => a + b.quantity*b.price,0)} USD
                  </Typography>
                </div>
              </div>
          </Card>
        </Grid>
      </Grid>
  </Layout>
  )
};

export default Shipping;
