import React from 'react';

function StudentTable(props) {

  return (
    <table className="table-striped">
      <h1>{props.studentList.length}</h1>
      {
        props.studentList.map(item => {
          return <tr key={item.id}>
            <td>{item.first_name + " " + item.last_name} </td>
            <td>{item.email}</td>
            <td>
              {item.gender}<br />
              <span>{item.maths}</span><br />
              <span>{item.history}</span><br />
              <span>{item.science}</span><br />
            </td>
          </tr>
        })
      }
    </table>
  );
}

export default StudentTable;
