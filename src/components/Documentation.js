import React from 'react';
import { Row,Col} from 'react-bootstrap'



 function Documentation() {
         
  return (


<Col >
<Row>
<Col md={1} sm={1} xs={1} >


</Col> 
 
<Col className='text-left api' md={10} sm={10} xs={10} >
 <h1>Available Api</h1>

 <ul>
          <li> GET : /api/allusers
          <ul>
         <li> Fetch all users
         
         <p> Example</p>
         <p>http://example.com/api/allusers </p>
         <p>Authicatication is Required for this Api with your Bearer Token</p>
         </li>
</ul>
          
          </li>

          <li> GET : /api/allusers/[number]
          <ul>
         <li> Fetch any amount of users
         <p> Example</p>
         <p>http://example.com/api/allusers/[number] </p>
         <p>Authicatication is Required for this Api with your Bearer Token</p>
         </li>
</ul>
          
          </li>

          <li> GET : /api/alluser/[id]
          <ul>
         <li> Fetch single user
         <p> Example</p>
         <p>http://example.com/api/alluser/[id] </p>
         <p>Authicatication is Required for this Api with your Bearer Token</p>
         </li>
</ul>
          
          </li>
          
          <li> POST: /api/push
          <ul>
         <li> Add user to the list 
         <p> Example</p>
         <p>http://example.com/api/push </p>
         <p>This is an open Api, no Authentication is required</p>
         </li>
</ul>
          </li>

 </ul>










 </Col>
 <Col md={1} sm={1} xs={1}>

 </Col>
</Row>
</Col>

  
  )

}
export default Documentation;
