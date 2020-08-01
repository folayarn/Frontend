import React,{Component} from 'react';
import {Redirect } from 'react-router-dom'
import { Row,Col,Form} from 'react-bootstrap'
import axios from 'axios'
import Documentation from './Documentation'
import Skeleton from "react-loading-skeleton";



class Profile extends Component{
  
constructor(){
super()
this.state={
  id:'',
  name:'',
  email:'',
  loading:true
         }
         
     }
 
 
     componentDidMount(){
         axios.get('http://localhost:8000/api/user',{
             headers:{Authorization: `Bearer ${localStorage.usertoken}`}
 
         }).then((res)=>{
             this.setState({
             name:res.data.name,
             id:res.data.id,
             email:res.data.email,
             loading:false
             })
         })
     }
 
 
   
 
 
 
 
 
 
 
     


render(){

  const {id,name,email,}=this.state

         if(localStorage.usertoken){
  return (
    <div>
    <Col>
<Row>
<Col md={2} sm={2} xs={2}>
</Col>
<Col md={8} sm={8} xs={8} className="apiback">
<h1>welcome home!!</h1>
{this.state.loading?


<Skeleton count={15} />


:
<table className="table striped">
<tr>
  <td>Client ID:</td>
  <td>{id}</td>
</tr>
<tr>
  <td>Name:</td>
  <td>{name}</td>
</tr>
<tr>
  <td>Email:</td>
  <td>{email}</td>
</tr>
<tr>
  <td>Bearer Token:</td>
  <td>
  <Form>
    <Form.Group>

<Form.Control value={localStorage.usertoken} as="textarea" cols={60} rows={10}/>
</Form.Group>
</Form>

  </td>
</tr>

</table>
}

</Col>


<Col md={2} sm={2} xs={2}></Col>
</Row>
</Col>
<Col>
<Row>
  <Documentation/>
</Row>
</Col>
  </div>
  );
}else{
         return(<Redirect to='/login'/>)
}
}
}
export default Profile;
