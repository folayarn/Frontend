import React,{Component} from 'react';
import Skeleton from "react-loading-skeleton";
import { Row,Col} from 'react-bootstrap'
import BelowTwo from './BelowTwo'
import UserSubmit from './UserSubmit'
import axios from 'axios'
import {Redirect} from 'react-router-dom'


class Home extends Component{
  
  constructor(){
    super()
    this.state={
      data:[],
      loading:true
         
    }
    }
componentDidMount(){
  
    this.getAll()
}
    getAll=()=>{
      return axios
      .get('https://backendj.herokuapp.com/api/allusers',{
          headers:{'Content-Type':'application/json',
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFhYTg5M2M3ODJjMGQxODE2NzMxZTMzNTE4Y2YwMWFlM2FjMTE2ODEzNDhmZDE2OTVlNTZkOTUwN2ZiZWM5OTBhMjg5NTA3MTY3N2MxODdmIn0.eyJhdWQiOiIxIiwianRpIjoiYWFhODkzYzc4MmMwZDE4MTY3MzFlMzM1MThjZjAxYWUzYWMxMTY4MTM0OGZkMTY5NWU1NmQ5NTA3ZmJlYzk5MGEyODk1MDcxNjc3YzE4N2YiLCJpYXQiOjE1OTY0MTUzNjAsIm5iZiI6MTU5NjQxNTM2MCwiZXhwIjoxNjI3OTUxMzYwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.F32tiIpHF1fDVIN_iVaowdKfnBx2SCFkqFCpxtmBeBp6K99BoDWtDtlVxIExJkDD-TpV9iX57IYs0XNq56Ml3leW_7dAh8VNts6qxdx8K14QWlNYSdCNg0qBDzma2h4jQgju7SSMvb2KS297WCVV6zl1xaDytyaVkKSTZLUKhQVYMS1LtIyxyD11xHAnNzxLeNoVOxJkYCvUA3IuOQmd_rDfH0nhAiXkZdsDHaljmUZcnp1CvVhKj2DQqldrJYm4AncGatYoQiA-gA8nQTEcj6U_y9hZ4SGQ7UtX_idl3zzsk2IsTFB16QZeBeJE1e2g8pcDtvUhwcou5VjdQpEAqCzLvw7LiV8cHyD153fKSOO1Uq7hTWmwgOlr674q7yifhhL3aSqzWPt7FhMSikVxGJ1bEUpjglQP8dyoOshGehvk0JgqXZHXWjIaagwi7v_BbT5KEv2-TXc7Oe7jDM3vh1oqyE9StvC61izo6eliweTB9HibN8p73IwUu-0eL-Q-Za01FzU28luaRHXXikqy1Wc6Nq7nst_MTM9hsAq4UFOqnbY75OaFMvtQnOxWS_6NQph1broACMFDPUfo2orvABFKFhCCLvieEKWmTIYX8OO8x02s1P1jKu4jdXFp_56PVlR8o_VR0R_EmcTVfB05K6T2UNsnarCaM9eGZgnPVsk

        `}
      }).then(res=>{
        this.setState({
          data:res.data,
loading:false
      })
      }).catch(err=>{
          console.log(err)

      })
      }
render(){
  const {data}=this.state
  if(localStorage.usertoken){
  return (
<div>
<Row>
<Col md={12} sm={12} xs={12} >
<Row>
           <Col md={2} > 
</Col>
           <Col md={8} sm={12} xs={12}> 
<BelowTwo name={this.props.name}/>
</Col>
<Col md={2} >
</Col>
</Row>
</Col>


{this.state.loading?
  
  <Skeleton count={5} />
  

:
<Col md={12} sm={12} xs={12}> 

<UserSubmit data={data} getAll={this.getAll}/>

</Col>
}

</Row>
  </div>
  );
}else{
  return(<Redirect to='/login'/>)
}
}
}
export default Home;
