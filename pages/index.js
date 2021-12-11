import { useState } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Button } from "@material-ui/core"

const Home = () => {
  const [name, setName] = useState('')

  // useEffect(() => {
  //   setTimeout(() => {
  //     alert('hello alert')
  //   }, 1000)
  // }, [])
  
  return (
  <div style = {{textAlign: 'center'}}>
    <Button color="secondary" variant="contained" onClick = {() => setName('vaiya')}>Click me</Button>
    <h2>Welcome {name} to next Witcher 3</h2>
    <div style = {{display: 'grid',justifyContent: 'center'}}>
    <img style ={{width: '40rem', height: '25rem'}} src='https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2021/10/20/the-witcher-3-ps5.jpg' alt =''></img>
    <img style ={{width: '40rem', height: '25rem'}} src='https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2021/10/20/the-witcher-3-ps5.jpg' alt =''></img>
    <img style ={{width: '40rem', height: '25rem'}} src='https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2021/10/20/the-witcher-3-ps5.jpg' alt =''></img>
    </div>
  </div>)
}
export default Home