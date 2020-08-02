
import React,{Component} from 'react'
import {Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'



class HeaderPro extends Component{
  

render(){  
  
  return (
<Col md={12} sm={12} xs={12} className='text-center header'>
<ul>
<li>
<Link to='/profile/home'>
<span className="fa fa-home"></span>Home
</Link>
</li>
<li>
<Link to='/profile'>
<span className="fa fa-user"></span> MProfile
</Link>
</li>
</ul>
</Col>


  
  );
}
}
export default HeaderPro;
