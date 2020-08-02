import React from 'react';
import { Col,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'



 function BelowTwo(props) {
         
  
  return (

 <Col className='text-center below'>
 <p>You can contribute to the RestFul
  Api by adding more meaningful Data to the list.</p>
  <Link to='/profile'>

<Button variant="primary"><span className="fa fa-user"></span> {props.name}</Button>
  </Link>
</Col>

  
  )

}
export default BelowTwo;
