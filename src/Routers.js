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
      .get('http://localhost:8000/api/allusers',{
          headers:{'Content-Type':'application/json',
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ4MTYxMmYyN2E0MjI2Nzc5ZGI5NTgwYTZmNWYxYzkyNTE3NGE0OThmZDQ4NjRlZjNlNjY2YzJjMTMzOTZjM2EzNmMyZWQyNzMyZTkyMDgyIn0.eyJhdWQiOiIxIiwianRpIjoiNDgxNjEyZjI3YTQyMjY3NzlkYjk1ODBhNmY1ZjFjOTI1MTc0YTQ5OGZkNDg2NGVmM2U2NjZjMmMxMzM5NmMzYTM2YzJlZDI3MzJlOTIwODIiLCJpYXQiOjE1OTYxMDM4MzgsIm5iZiI6MTU5NjEwMzgzOCwiZXhwIjoxNjI3NjM5ODM3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.pNymjK9wQOW1rhKCdDx1Hr30CZtRcv-8fvEDIdJZp-9gQF1hiPzjig_-_X6v999DxrQsBEzvY0nbngUqwtRWeLmb3BX0RTW0bhND_AWZSsCvbBn6uOYppbi-BulPUUByGZi0r8gkz0VkIgM_Y9SaNcD2MGleJDEab90pOtMGXlSFu4sexIk3lJidX9fE_yNz2Nffn3r_9aNQlH-I8nkoUMzG_0fQiSduylfFFyBKoTFLDn6Goi4qQM8pkGwLgI8tgOB4R02VVj5t5K9h4HNgmg4YbNj15X31FTlw4WVdEETnpTnJ8olm4zVm9wE8CpcqyfACJcx-ACA5P6_lpS5NOcAJ0X1LfCpsAe6MKINKAF-5mXaXZAZqxR0GN9H737Ja-5t_Zk7389YpIa8RAPQ81g7xhuKfM1Y5Vz3X-pra_FGEM7co4wQNKwQEBubCnYlV-YvVFP_f6tlZ_DQqVdnUGHrxHu26GpayAiSKtqj5pzcomW1XqMcLZ8o-EYGXVGE7donnqKXy8eySfEhh8XBLSEF3UO0923pWCthA5LM0ucqavja2tHd8LxjGZrqwGuh-rPCLpTfVCE_Wz0JHjwBGO0MBTY2MSw35_RWms2hNGwzqRn_iUR8VSCxwRPLJjPXHwBW4nyp57Dor27rSQSD2NW3F5kW9j_txm57966tvApA

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
