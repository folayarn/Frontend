import React,{Component} from 'react';
import Skeleton from "react-loading-skeleton";
import { Row,Col,Alert} from 'react-bootstrap'

import UserSubmit from './components/UserSubmit'
import axios from 'axios'


class Router extends Component{
  
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
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYwZDM1MDkwYjU4NWYxYTA3ZGMyM2IzZWVkM2M2YTNlMzgyZWVkZjc2YzgxZmYwOTBmZmZmNzQzNjJhZjBkZGJmNmIyOGM2NGRmNDY0Yzk4In0.eyJhdWQiOiIxIiwianRpIjoiNjBkMzUwOTBiNTg1ZjFhMDdkYzIzYjNlZWQzYzZhM2UzODJlZWRmNzZjODFmZjA5MGZmZmY3NDM2MmFmMGRkYmY2YjI4YzY0ZGY0NjRjOTgiLCJpYXQiOjE1OTYzMDgyMTYsIm5iZiI6MTU5NjMwODIxNiwiZXhwIjoxNjI3ODQ0MjE2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.OnUzRb5wFGU_yJqmUiTzNFpWnfN1CqhlHCVie1a2RlWfUiVkvC_1MOHcDzgCtS2KtNUUJFKptIDPJsaiUPNg9sZcyDqr3NbkLeMoGxTdx_-OLlj1sg304ynmCmsDXElRy7HB5nhw7-GA4u635F8ymqjPUR5rLVyWQyvpYr0hYTLRUFQ4jC4hBPdfLJmQNkZvnz9nHA5-K8cC79i6wnLXSTTVmfMdV9XitfMg8fsWyg0XvidxzGvdlPzeGSPvbMB6_GlUQzdCg79De5kfnG408B5-5-YRCmzm3MpHsOD0pE6vtT2FWyiCiL7-C7SSI9tXX2BQT0Yq8JAqzMJ8KbHKXb7jPR96q-szR7_iwGXVeMeBSol6f_Ac6WhJUbaqUVkigi8a0GWTK7Pl79DtreVYDKoHl329Lfv7OGSkzwzYiIpoMdaVz-bLDB1F0NlsnxDxGJhbq-r0KVhRxg8tXdft8nkA1e5l14EKk1dFxG-V2oDLNHGM2bvULyz6bgOgyFhoif0bQja7XHwXf7yAI9rNf54SeZn8LYWyaW6M2-W59KpbBTPpekKyHcYtYhOedmzsp1HFbNT-Wng7L7Kdge67eI5TKwnFRdcM0cCn3b-uQRWIZ-ToHMuXJOr8pn0R9g1Gct0f25o8mSooFrJGBzfOyYm62s4koHrhuN7LvtXfUF8   `}


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
  return (
<div>
<Row>
<Col >
<h3 className="text-center"><Alert variant="primary">
<strong>Working With Restful API</strong></Alert></h3>
</Col>
</Row>
{this.state.loading?


<Skeleton count={20} />


:
<UserSubmit data={data} getAll={this.getAll}/>
}


  </div>
  );
}
}
export default Router;
