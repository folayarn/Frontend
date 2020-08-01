import React,{Component} from 'react';
import {Col,Row,Form ,Card,Button} from 'react-bootstrap'
import Skeleton,{ SkeletonTheme } from "react-loading-skeleton";
import SideBody from './SideBody'
import Below from './Below'
import axios from 'axios'


class UserSubmit extends Component{
  
constructor(props){
super(props)
this.state={
  
      name:'',
      email:'',
      age:0,
      address:'',
      visibility:false,
      sending:false,
      success:'',
  error:'',
  iserror:null
  
}
this.onSubmit=this.onSubmit.bind(this)
this.onClick=this.onClick.bind(this)
this.onChange=this.onChange.bind(this)
}

onClick=()=>{
this.setState({
         visibility:!this.state.visibility
})
}

onSubmit=(e)=>{
  e.preventDefault()
  this.setState({
    sending:true
})
let detail={
  name: this.state.name,
  email:this.state.email,
  age:this.state.age,
  address:this.state.address,
}

 return axios
            .post('https://backendj.herokuapp.com/api/push',
              detail
            , {
                headers: {
                    'Content-Type':'application/json' }
            }).then(res=>{
  this.setState({
    iserror:false,
    sending:false,
    success:'Pushed successfully to the List',
     name:'',
      email:'',
      age:0,
      address:'',
 })

this.props.getAll()

}).catch(err=> {
             this.setState({
               iserror:true,
 sending:false,
    error:'Error occur!!'

 })    

            })
}

onChange=(e)=>{
  this.setState({
    [e.target.name]:e.target.value
    })
  
  } 

render(){
  const green={
  color:'green'

}
const red={
  color:'red'

}
const {visibility,success,error,iserror,name,email,address,age}=this.state
const {data}=this.props
  return (
           <div>
           <Row className="body">
         <Col md={6} sm={6} xs={6} >
         <SideBody data={data}/>
         </Col>
         <Col md={6} sm={6} xs={6}> 
         <Row>
         <Col>
<Button variant="primary"  onClick={this.onClick} className="pull-right button" size="lg">
       {!visibility?<span className="fa fa-plus-circle">Add Users</span>:'Hide'}</Button>
{visibility? 
  <Card className='submit'>
  <Card.Header>
         <h4><span className="fa fa-book"></span>Push User to the List</h4>
</Card.Header>
<Card.Body>{iserror?<h4 style={red}>
{error}</h4>:
<h4 style={green}>
{success}</h4>
}
<Form >
<Form.Group>
<Form.Label >Name</Form.Label>
<Form.Control type="text" name="name" value={name} onChange={this.onChange}   placeholder="your name" />
</Form.Group>
<Form.Group>
<Form.Label >Email</Form.Label>
<Form.Control type="email" name="email" value={email} onChange={this.onChange} placeholder="@" />
</Form.Group>
<Form.Group>
<Form.Label >Age</Form.Label>
<Form.Control name="age" onChange={this.onChange} value={age} type="range"/>
{this.state.age}
</Form.Group>
<Form.Group>
<Form.Label > Address</Form.Label>
<Form.Control name="address" as="textarea" value={address} onChange={this.onChange} rows={4}/>
{this.state.sending?<SkeletonTheme color="rgb(0 123 255)" highlightColor="white">
   <Skeleton/>
</SkeletonTheme>:""}
</Form.Group>
<Button variant="primary" onClick={this.onSubmit} className="pull-right" size="lg"><span className="fa fa-plus-circle"></span>Push</Button>
</Form>
</Card.Body></Card>:''}
</Col>
</Row>

<Row>
<Below/>
</Row>
</Col>
</Row>
</div>
  );
}

}


export default UserSubmit;
