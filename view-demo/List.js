import React from 'react';
import { Button, Table, Row } from 'react-bootstrap';
class List extends React.Component { 
  constructor(props){
    super(props);
    this.state={
      ...this.props,
      checkBox:[]
    }
  }
  handleClick=(p1,e)=>{
    const {checkBox}=this.state;
    const {checked ,name }=e.target;

    if (checked){
      this.setState({[name]:{...this.state,[name]:p1} }) 
    }
  }
  render() {
    return (
      <Table/>
      )
  }
}
export default List;


// <Row>
//     <Table sm={12} xs={12}>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Email</th>
//           {/* <th>Image</th> */}
//           <th></th>
//         </tr>
//         {this.props.user.map((item, index) => {
//           return <tr key={index}>
//             <td><input type="checkbox" name="checkBox" onClick={(e)=>this.handleClick(item.id,e)}/></td>
//             <td>{item.first_name}</td>
//             <td>{item.last_name}</td>
//             <td>{item.email}</td>
//             {/* <td><img src={item.avatar} /></td> */}
//             {/* <td><center><Button>Click me</Button></center></td> */}
//           </tr>
//         })}
//         <tr>
//           <td colSpan={4}><center><Button>View</Button></center></td>
//         </tr>
//       </Table> 
//       </Row>
      