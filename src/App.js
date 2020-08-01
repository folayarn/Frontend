import React,{Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { Container,Row,Col,Button} from 'react-bootstrap'
import {Route,Switch,Link} from 'react-router-dom'
import Routers from './Routers'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Congrats from './components/Congrats'


class App extends Component{
  constructor(){
    super()
    this.state={
      isnotlog:true
    }
    this.logout=this.logout.bind(this)
  }



  logout=(e)=>{
    e.preventDefault()
localStorage.removeItem('usertoken')
this.setState({
 isnotlog:true
})
}

render(){  
  
  return (

<Container className="body">
<Col >
<Row className='text-left header'>
<Col >
<Link to='/'>
<span className="fa fa-home"></span> HOME
</Link>
</Col> 
 {!localStorage.usertoken|| !this.state.isnotlog ?
 <div className="col ">
 <Row >
<Col className='text-left'>
 <Link to='/register'>
    Register
 </Link>
 </Col>
 <Col className='text-left'>
 <Link to='/login'>
    Login
 </Link>
 </Col>
</Row>
 </div>
 :
 <div>
 <Col className='text-left'>
 <Link to='/profile'>
 <span className="fa fa-user"></span> Profile
 </Link>
 <Button variant="danger" onClick={this.logout.bind(this)}>Logout</Button>
 </Col>
 <Col>
 
 </Col></div>
 }
</Row>
</Col>
<Col>
<Switch>
<Route exact path='/'>

<Routers/>
</Route>
<Route  path='/register'>
<Register/>
</Route>
<Route  path='/login'>
<Login/>
</Route>
<Route  path='/profile'>
<Profile/>
</Route>
<Route  path='/success'>
<Congrats/>
</Route>
</Switch>
</Col>
  </Container>
  
  );
}
}
export default App;
