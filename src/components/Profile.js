import React,{Component} from 'react';
import { Row,Col,Button} from 'react-bootstrap'
import Documentation from './Documentation'
import DataBody from './DataBody'
import {Redirect} from 'react-router-dom'
import HeaderPro from './HeaderPro'

class Profile extends Component{
  constructor(){
  super()
  this.state={
    
    isnotlog:false
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
  const user={
    id:this.props.id,
    name:this.props.name,
    email:this.props.email,
    loading:this.props.loading
  }

  if(localStorage.usertoken || this.props.isnotlog){

  return (
    <div>
    <HeaderPro/>
    <Button size='sm' variant="danger" 
          onClick={this.logout}>
         <span className="fa fa-sign-out"></span>Logout</Button>
<Row>
<Col md={2} sm={1} xs={1}>

</Col>
<DataBody {...user}/>

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
