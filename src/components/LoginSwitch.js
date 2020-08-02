import React,{Component} from 'react';
import {Col} from 'react-bootstrap'
import {Route,Switch} from 'react-router-dom'
import axios from 'axios'
import Profile from './Profile'
import Home from './Home'





class LoginSwitch extends Component{
         constructor(){
                  super()
                  this.state={
                    id:'',
                    name:'',
                    email:'',
                    loading:true
    
                           }
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
                   
                   
       
  
                  
                   
                   
                       

render(){  
         
         const user={
           id:this.state.id,
           name:this.state.name,
           email:this.state.email,
           loading:this.state.loading,
           
         }
       
  return (
           <div>
           
          




<Col md={12} sm={12} xs={12}>
<Switch>
<Route path='/profile'>
<Profile {...user}/>
</Route>
<Route path='/profile/home'>
<Home name={this.state.name}/>
</Route>
</Switch>
</Col>
 </div>
  )


}
}
export default LoginSwitch;
