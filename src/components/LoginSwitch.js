import React,{Component} from 'react';

import {Col,Button} from 'react-bootstrap'
import {Route,Switch} from 'react-router-dom'
import axios from 'axios'
import Profile from './Profile'
import Home from './Home'
import HeaderPro from './HeaderPro'




class LoginSwitch extends Component{
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
                   
                   
                          logout=(e)=>{
                            e.preventDefault()
                        localStorage.removeItem('usertoken')
                        this.setState({
                         isnotlog:true
                        })
                        }
                   
                   
                       

render(){  
         
         const user={
           id:this.state.id,
           name:this.state.name,
           email:this.state.email,
           loading:this.state.loading,
           
         }
       
  return (
           <div>
           <HeaderPro/>
         <Button className="drop_one" size='sm' variant="danger" onClick={this.logout.bind(this)}>
         <span className="fa fa-sign-out"></span>Logout</Button>
         
<Col md={12} sm={12} xs={12}>
<Switch>
<Route exact path='/profile'>
<Profile {...user}/>
</Route>
<Route exact path='/profile/home'>
<Home name={this.state.name}/>
</Route>
</Switch>
</Col>
 </div> 
  );


}
}
export default LoginSwitch;
