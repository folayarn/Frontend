import React,{Component} from 'react'
import {Col,Row,Form ,Button,Card} from 'react-bootstrap'
import {Redirect,Link} from 'react-router-dom'
import {login} from '../Functions'
import Skeleton ,{ SkeletonTheme } from  "react-loading-skeleton"




class Login extends Component{
  
constructor(props){
super(props)
this.state={
  email:'',
password:'',
islog:false,
error:"",
done:false


}
this.onSubmit=this.onSubmit.bind(this)
this.onChange=this.onChange.bind(this)

}



onSubmit=(e)=>{
  e.preventDefault()
  this.setState({
    done:true
})
const user={
email:this.state.email,
password:this.state.password
}
setTimeout(()=>{
login(user).then(res=>{
localStorage.setItem('usertoken',res.user.accessToken)
this.setState({
islog:true
})
this.props.history.push('/profile')
}).catch(err=>{
    console.log(err)
this.setState({
error:"Invalid Credidentials",
done:false
})

})

},1200)

}
onChange=(e)=>{
  this.setState({[e.target.name]:e.target.value})
}


render(){
  const color={
    color:'red'

}
const blue={
  color:'rgb(0 123 255)'

}
const {password,email}=this.state
  if(localStorage.usertoken){
    return (<Redirect to='/profile'/>)
    }else
    {
  return (
    this.state.done ?
<div className="text-center">
<SkeletonTheme color="rgb(0 123 255)" highlightColor="white">
  
  <Skeleton circle={true} height={100} width={100} />
 <h3 style={blue} > Please wait...</h3>

  
</SkeletonTheme>

</div>
    :
    <div>
    <Row>
    <Col md={3} sm={1} xs={1}></Col>
    <Col md={6} sm={10} xs={10}>
  <Card className="bg-default small">
  <Card.Header>
         <span className="fa fa-user"></span>
</Card.Header>
<Card.Body>
<Form >
<h6 style={color}>{this.state.error}</h6>
<Form.Group>
<Form.Label >Email</Form.Label>
<Form.Control type="email" name="email" 
onChange={this.onChange} value={email} placeholder="@" />
</Form.Group>
<Form.Group>
<Form.Label >Password</Form.Label>
<Form.Control name="password" 
onChange={this.onChange} value={password} type="password" placeholder="*****" />

</Form.Group>
<Link to='/register'>Create Account</Link>
<Button variant="primary" 
className="pull-right" onClick={this.onSubmit} size="sm"><span className="fa fa-home"></span>Login
</Button>
</Form>
</Card.Body>
</Card>
</Col>
<Col md={3} sm={1} xs={1}></Col>
</Row>
</div>
  )
}

}
}

export default Login;
