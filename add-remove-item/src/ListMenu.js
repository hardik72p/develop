import React from 'react';
import { Form } from 'react-bootstrap';

function ListMenu(props) {
  return (
    <div>
      {
        props.list.map((item, key) => {
          return (
            <div className="item">
              <Form.Check class='item'
                id={item}
                key={key}
                label={item}
                checked={props.selectList.includes(item)}
                value={item}
                onChange={props.onChange}
                />
            </div>
          )
        })
      }
    </div>
  );
}

export default ListMenu;

