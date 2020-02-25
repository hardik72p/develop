import React from 'react';
import './App.css';
import Grid from './Grid';
import List from './List.js';
import { Container, Row, Button,  Nav} from 'react-bootstrap';
class Demo extends React.Component {
  state = {
    show: true,
    user: []
  }
  handleClick = () => {
    this.setState({
      show: !this.state.show
    })
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then(response => this.setState({ user: response.data }))
      .catch((error) => console.log)
  }
  render() {
    if (this.state.show) {
      Element = <Grid handleClick={this.handleClick} show={this.state.show} user={this.state.user} />
    }
    else {
      Element = <List handleClick={this.handleClick} show={this.state.show} user={this.state.user} />
    }
    return (
      <Container>
          <Nav variant="tabs" defaultActiveKey="/profile">
            <Nav.Item>
              <Nav.Link>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link >Services</Nav.Link>
            </Nav.Item>
          </Nav>
          <div>
            <Row>
              <center><Button onClick={this.handleClick}>Toggle</Button></center>
            </Row>
            <div className='scroll'>
              <Container>
                {Element}
              </Container>
            </div>
          </div>
      </Container>)
    }
  }
  export default Demo;
