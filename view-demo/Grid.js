import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
class Grid extends React.Component {
  render() {
    return (<Row>
        {this.props.user.map((item, index) => {
          return <Col md={4} xs={12} sm={12} key={index}><div className="block" >
            <img src={item.avatar} alt="user" />
            <p>{item.first_name}</p>
            <p>{item.last_name}</p> 
            <p>{item.email}</p>
            <center><Button>Click me</Button></center>
          </div></Col>
        })}
      </Row>)
  }
}
export default Grid;