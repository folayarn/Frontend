import React,{Component} from 'react';
import {Col,Row,Form ,Button,Card} from 'react-bootstrap'
import Skeleton ,{ SkeletonTheme } from  "react-loading-skeleton"
import {Redirect,Link} from 'react-router-dom'
import axios from 'axios'
import Header from './Header'



class Register extends Component{
  
constructor(props){
super(props)
this.state={
  email:'',
password:'',
confirmed:'',
name:'',
error:'',
success:false,
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
  var User=new FormData()
  User.append('email',this.state.email)
  User.append('password',this.state.password)
  User.append('password_confirmation',this.state.confirmed)
  User.append('name',this.state.name)
  
  return axios
  .post('http://localhost:8000/api/signup',
    User
  ,{
      headers:{'Content-type':'application/json'}

  }).then(res=>{
this.setState({success:true})
      localStorage.setItem('usertoken',res.data.token)
      this.props.history.push('/success')

  }).catch(err=>{
    this.setState({
      error:'Errors has occurred!',
      done:false
  })
      
  })}
  
onChange=(e)=>{
  this.setState({[e.target.name]:e.target.value})
}

onChangePassword=(e)=>{
  this.setState({password:e.target.value

  })
}
onChangeConfirm=(e)=>{
  this.setState({
                 confirmed:e.target.value
  })
}

render(){
  const color={
    color:'red'
}
const blue={
  color:'rgb(0 123 255)'

}
const { password,confirmed,name,email,error} =this.state

        if(localStorage.usertoken || this.state.islog){
        return (<Redirect to='/success'/>)
        }else
        {

  return (
    this.state.done ?
    <div className="text-center drop">
    <SkeletonTheme color="rgb(0 123 255)" highlightColor="white">
      
      <Skeleton circle={true} height={100} width={100} />
     <h3 style={blue} > Signing Up...</h3>
    
      
    </SkeletonTheme>
    
    </div>
        :
    
           <div>
           <Header/>
           <Row>
<Col md={3} sm={1} xs={1}></Col>
<Col md={6} sm={10} xs={10}>
<Card className="bg-default small">
  <Card.Header>
         <span className="fa fa-registered"></span>
</Card.Header>
<Card.Body>
<h6 style={color}>{error}</h6>
<Form >
<Form.Group>
<Form.Label >Name</Form.Label>
<Form.Control type="text" name="name" value={name}  onChange={this.onChange} placeholder="your name" />
</Form.Group>
<Form.Group>
<Form.Label >Email</Form.Label>
<Form.Control type="email" name="email" value={email} onChange={this.onChange} placeholder="@" />
</Form.Group>
<Form.Group>
<Form.Label >Password</Form.Label>
<Form.Control name="password" value={password} onChange={this.onChangePassword} placeholder="*****"
 type="password"/>

</Form.Group>
<Form.Group>
<Form.Label >Confirm Password</Form.Label>
<Form.Control name="ConfirmPassword" value={confirmed} onChange={this.onChangeConfirm} placeholder="*****"
 type="password"/>
 {password !== confirmed ? "Password does not match ":"" }
</Form.Group>
<Link to="/login">Already Registered? login here</Link>
<Button variant="primary" onClick={this.onSubmit} className="pull-right" size="sm">
<span className="fa fa-user"></span>SignUp</Button>
</Form>
</Card.Body>
</Card>
</Col>
<Col  md={3} sm={1} xs={1}></Col>
</Row>
</div>
  )
}
        }
}


export default Register;
