import React,{Component} from 'react';
import { Card} from 'react-bootstrap'
import moment from 'moment'




class SideBody extends Component{
  constructor(props){
    super(props)
    this.state={
  
    loading:true
    
    }}
    

render(){
  const {data}=this.props
  const padding={
           padding:'7px'
  }
  const mark={
           color:'white',
           width:'auto',
           height:'auto'
  }
  return (
<div>
{data.map(user=>
<Card key={user.id} className="bg-primary " style={mark}>
<Card.Header>
         <span className="fa fa-registered" style={mark}></span>
</Card.Header>
<Card.Body>
<Card.Text>
  {user.name}
</Card.Text>
<Card.Text>
  {user.email}
</Card.Text>
<Card.Text>
  Age:{user.age}
</Card.Text>
<Card.Text>
  Address: {user.address}
</Card.Text>
<Card.Text>
  <small><i>Registered <span className="fa fa-clock-o" style={padding}>

  </span>{moment(user.created_at).calendar()} </i></small>
</Card.Text>
</Card.Body>
</Card>
)}
</div>
  );
}
}

export default SideBody;
