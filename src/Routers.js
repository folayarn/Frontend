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
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImUzMTE4YTZjMzI1MzI3NDI0ZDIzNzE3Y2Y1Y2ZhMjc5YzE0NTE3MGRhYzRkMjY4OTQ2Mjg4OGE0MzY0Yzk4NDQwOGYxMWI0NWEzOGUzNzU1In0.eyJhdWQiOiIxIiwianRpIjoiZTMxMThhNmMzMjUzMjc0MjRkMjM3MTdjZjVjZmEyNzljMTQ1MTcwZGFjNGQyNjg5NDYyODg4YTQzNjRjOTg0NDA4ZjExYjQ1YTM4ZTM3NTUiLCJpYXQiOjE1OTYyOTM0MjYsIm5iZiI6MTU5NjI5MzQyNiwiZXhwIjoxNjI3ODI5NDI2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.gSOe29DMB5ulc16SdpHbJDaFztxH0hLW3QaqJR6pCMu-WUMy2055gT59oNrfc8I2sQ-IGFNTfrtGADCMm3wZOTh2LLxrN_AQBs5ZHMpsVIgPjSNUebotfnjkPfG2jL3uiCimgPsr8MVTHn4xqvUpZBXItF3SFFpk2_12F4MwnlEFCG2O2zABRxKuXLgeGPFjMSMfauezzGjNWeuBNOBeunbu0-wHF9dHuk3eWWA1NzADFAJ1iQpZ7rmhWLcLF1kN4ul9--qesceTDwUtdvsqluvGerAUGMivjMVarLzb0oZVaNOcKw8c7KYppHofqsilcKb27Pk3A5qe8SMUFgKdAlgyIL9UpQvikZNpkOs7ye1SJpPYLoX9BGFiol4wvrrliHls7fcDf58FnZMgcrY8q8S9nHTZ4HhoZgZsdYXY8veYFQ9GMf07ls8EqrBHXatu-Krc2_T2RxfDMJ9q-99iSN2e5_Nxdr0mt243MRxxwUArkoCDlUuqJtkKh5YJko0iTsNW7aezKRr_a_j4JuVvVhRT4-mkIiqywiNU6Ph6MGtWdPUPt-q4azajCGeeKNKcP9HCdo3He7_4ExuOQ2sGvrsIqhUxt0CD3WHCcAcUzImsQ8PR4tofV2Heu0PbyYVN6XP8powDO7qsfKa02KEt9NS1X-XB9Tljnm1DDiZD3sU
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
