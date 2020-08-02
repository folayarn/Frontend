import React from 'react';
import { Row,Col,Alert} from 'react-bootstrap'



 function Documentation() {
         
  return (


<Col >
<Row>
<Col md={1} sm={1} xs={1} >


</Col> 
 
<Col className='text-left api' md={10} sm={10} xs={10} >
 <h1>Available Api</h1>

 <Alert variant="dark">
          <Alert.Heading> 
         Fetch all users
         </Alert.Heading>
       <p>  GET : /api/allusers</p>
         <p> Example</p>
         <p>http://example.com /api/allusers </p>
         <p className="mb-0">Authicatication is Required for this Api with your Bearer Token</p>
         </Alert>
          
         <Alert variant="primary">
          <Alert.Heading> 
          Fetch any amount of users
          </Alert.Heading>
        <p>  GET : /api/allusers/[number]</p>
          
         
         <p> Example</p>
         <p>http://example.com /api/allusers/[number] </p>
         <p className="mb-0">Authicatication is Required for this Api with your Bearer Token</p>
        
          
          </Alert>

          <Alert variant="success">
          <Alert.Heading>
          Fetch single user
          </Alert.Heading>
         <p> GET : /api/alluser/[id]</p>
         <p> Example</p>
         <p>http://example.com /api/alluser/[id] </p>
         <p className="mb-0">Authicatication is Required for this Api with your Bearer Token</p>
        </Alert>
          <Alert variant="secondary">
          <Alert.Heading> 
          Add user to the list 
          </Alert.Heading>

          <p>POST: /api/push</p>
        
         
         <p> Example</p>
         <p>http://example.com /api/push </p>
         <p className="mb-0">This is an open Api, no Authentication is required</p>
  </Alert>










 </Col>
 <Col md={1} sm={1} xs={1}>

 </Col>
</Row>
</Col>

  
  )

}
export default Documentation;
