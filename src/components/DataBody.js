import React,{Component} from 'react';
import { Col,Form,Table} from 'react-bootstrap'

import Skeleton,{SkeletonTheme} from "react-loading-skeleton";



class DataBody extends Component{

     


render(){

  const {id,name,email,loading}=this.props

  return (
<Col md={8} sm={10} xs={10} className="apiback">
<h1>welcome home!!</h1>
{loading?


  <SkeletonTheme color="grey" highlightColor="white">
  <Skeleton count={2} />
  <h5 className="text-center">Loading...</h5>
    </SkeletonTheme>

:
<Table  striped bordered hover variant="dark">
<tbody>
<tr>
  <td>Client ID:</td>
  <td>{id}</td>
</tr>
<tr>
  <td>Name:</td>
  <td>{name}</td>
</tr>
<tr>
  <td>Email:</td>
  <td>{email}</td>
</tr>
<tr>
  <td>Bearer Token:</td>
  <td>
  <Form>
    <Form.Group>

<Form.Control value={localStorage.usertoken} as="textarea"  cols={60} rows={10} readOnly/>
</Form.Group>
</Form>

  </td>
</tr>
</tbody>
</Table>
}
</Col>

  )

}

}
export default DataBody
