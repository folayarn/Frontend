import React from 'react';
import { Col,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'



 function Below() {
         
  
  return (

 <Col className='text-center below'>
 <p>This App help developers with an effective and efficient RestFul
  Api for Projects utilisation.</p>
  {!localStorage.usertoken?
  <div>
<Link to="/register"><Button variant="primary"> Register to use our Api</Button></Link>
<br/> Or <br/>
<Link to="/login"><Button variant="primary">Login to view available Api</Button>
</Link>
</div>
:
<Link to="/profile"><Button variant="primary"><span className="fa fa-user"></span>Visit Your Profile</Button>
</Link>}
</Col>

  
  )

}
export default Below;
