import React,{Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { Container,Row,Col} from 'react-bootstrap'
import {Route,Switch,Link} from 'react-router-dom'
import Routers from './Routers'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Congrats from './components/Congrats'



class App extends Component{
  

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
 <div className="col ">
 <Row >
<Col className='text-left'>
 
 </Col>
 <Col className='text-left'>

 </Col>
</Row>
 </div>
 
 <div>
 
 <Col>
 
 </Col></div>
 
</Row>
</Col>
<Col md={12} sm={12} xs={12}>
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
