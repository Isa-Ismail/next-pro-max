import { Card, CardContent, Button, TextField, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography, Select, MenuItem } from "@material-ui/core";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Store } from "../../utils/store"
import Image from "next/image";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";
const Shipping = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const {state , dispatch} = useContext( Store )
  const router = useRouter()
  useEffect(() => {
    if ( !state.userInfo ) router.push('/login');
  },[state.userInfo])
  const [form, setForm] = useState (
    {
      firstName:'',
      lastName:'',
      email:'',
      telephone:'',
      fullName:'',
      country:'',
      city:'',
      address:'',
      postalCode:'',
      paymentMethod: 'paypal'
    }
  )
  const {
    firstName,
    lastName,
    email,
    telephone,
    fullName,
    country,
    city,
    address,
    postalCode,
    paymentMethod,
  } = form

  const handleChange = (e) => {
    setForm({
      ...form, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(firstName&&lastName&&email&&telephone&&fullName&&city&&country&&address&&postalCode){
      dispatch({type: 'SAVE_SHIPPING_ADDRESS', payload: form})
      Cookies.set('shippingAddress', JSON.stringify(form))
      router.push('/shipping/order')
      enqueueSnackbar('Order placed successfully', {variant: 'success'})
    }else{
      alert('fill up form correctly')
    }
  }
  return (
  <Layout>
      <Grid container spacing = {2}>
        <Grid item md = {7} sm = {12}>
        <form onSubmit={handleSubmit}>
        <div>
        <Typography variant = 'h1'>
              Customer info
        </Typography>
          <Card>
            <CardContent>
              <div className="flex space-x-28">
              <TextField
              variant="outlined"
              margin="normal"
              required
              halfWidth
              id="firstName"
              label="First name"
              value={form.firstName}
              name='firstName'
              autoFocus
              onChange={handleChange}
              />
              <TextField
              variant="outlined"
              margin="normal"
              required
              halfWidth
              id="lastName"
              label="Last name"
              value={form.lastName}
              name='lastName'
              onChange={handleChange}
              />
              </div>
              <div className="flex space-x-28">
              <TextField
              variant="outlined"
              margin="normal"
              required
              halfWidth
              id="email"
              label="Email address"
              value={form.email}
              name='email'
              onChange={handleChange}
              />
              <TextField
              variant="outlined"
              margin="normal"
              required
              halfWidth
              id="telephone"
              label="Telephone"
              value={form.telephone}
              name='telephone'
              onChange={handleChange}
              />
              </div>
            </CardContent>
          </Card>
          </div>
          <div className = "my-10">
          <Typography variant = 'h1'>
              Shipping address
          </Typography>
          <Card>
            <CardContent>
              <div>
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="fullName"
              label="Full Name"
              value={form.fullName}
              name='fullName'
              autoFocus
              onChange={handleChange}
              />
              </div>
              <div className="flex space-x-28">
              <TextField
              variant="outlined"
              margin="normal"
              required
              halfWidth
              id="country"
              label="Country"
              value={form.country}
              name='country'
              onChange={handleChange}
              />
              <TextField
              variant="outlined"
              margin="normal"
              required
              halfWidth
              id="city"
              label="City"
              value={form.city}
              name='city'
              onChange={handleChange}
              />
              </div>
              <div className="flex space-x-28">
              <TextField
              variant="outlined"
              margin="normal"
              required
              halfWidth
              id="address"
              name='address'
              label="Address"
              value={form.address}
              onChange={handleChange}
              />
              <TextField
              variant="outlined"
              margin="normal"
              required
              halfWidth
              id="postal code"
              label="Postal code" 
              value={form.postalCode}
              name='postalCode'
              onChange={handleChange}
              />
              </div>
              <div className = "my-10  space-x-6">
              <Typography variant = 'h1'>
                Payment Method
                </Typography>
                <Select className='ml-14' name = 'paymentMethod' value={form.paymentMethod} onChange= {handleChange}>
                <MenuItem value = 'paypal'>
                  Paypal
                </MenuItem>
                <MenuItem value = 'cashOnDelivery'>
                  Cash on Delivery
                </MenuItem>
                </Select>
                <Button color = 'primary' type = 'submit' variant = 'contained'>
                  Proceed to pay
                </Button>
              </div>
            </CardContent>
          </Card>
          </div>
          </form>
        </Grid>
        <Grid item md = {5} sm = {12} style = {{position: 'sticky'}}>
          <Typography variant = 'h1'>Your order</Typography>
          <Card>
            <Table>
            <TableHead className = '!bg-amber-300'>
              <TableRow>
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
              </TableRow>
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
                  <Typography variant = 'h2'>
                    Subtotal
                  </Typography>
                  <Typography variant = 'h2' className = 'pl-20'>
                    ${state.cart.cartItems.reduce((a, b) => a + b.quantity*b.price,0)}
                  </Typography>
                </div>
                <div className='flex p-2'>
                  <Typography variant = 'h2' className = ''>
                    Tax
                  </Typography>
                  <Typography variant = 'h2' className = 'pl-28'>
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
