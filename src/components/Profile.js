import React,{Component} from 'react';
<<<<<<< HEAD
import { Row,Col} from 'react-bootstrap'
=======
import {Redirect } from 'react-router-dom'
import { Row,Col,Form,Button} from 'react-bootstrap'
import axios from 'axios'
>>>>>>> 37c15e85476ef111c9e927a9ecc68ac750b74a28
import Documentation from './Documentation'
import DataBody from './DataBody'
import {Redirect} from 'react-router-dom'

class Profile extends Component{
  
<<<<<<< HEAD
=======
constructor(){
super()
this.state={
  id:'',
  name:'',
  email:'',
  loading:true,
  isnotlog:false
         }
         this.logout=this.logout.bind(this)
     }
 
 
     componentDidMount(){
         axios.get('https://backendj.herokuapp.com/api/user',{
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
 
 
   
 
 
 
 
 
        logout=(e)=>{
          e.preventDefault()
      localStorage.removeItem('usertoken')
      this.setState({
       isnotlog:true
      })
      }
 
 
     
>>>>>>> 37c15e85476ef111c9e927a9ecc68ac750b74a28



<<<<<<< HEAD
render(){
  const user={
    id:this.props.id,
    name:this.props.name,
    email:this.props.email,
    loading:this.props.loading
  }

  if(localStorage.usertoken){
=======
  const {id,name,email,isnotlog}=this.state

         if(localStorage.usertoken||!isnotlog ){
>>>>>>> 37c15e85476ef111c9e927a9ecc68ac750b74a28
  return (
    <div>
<Row>
<Col md={2} sm={1} xs={1}>
<<<<<<< HEAD

</Col>
<DataBody {...user}/>
=======
 <Button className="drop" size='sm' variant="danger" onClick={this.logout.bind(this)}>
 <span className="fa fa-sign-out"></span>Logout</Button>
 
</Col>
<Col md={8} sm={10} xs={10} className="apiback">
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

<Form.Control value={localStorage.usertoken} as="textarea"  cols={60} rows={10}/>
</Form.Group>
</Form>

  </td>
</tr>

</table>
}

</Col>
>>>>>>> 37c15e85476ef111c9e927a9ecc68ac750b74a28
<Col md={2} sm={1} xs={1}></Col>
</Row>

<Col md={12} sm={12} xs={12}>
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
