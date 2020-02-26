import React, { Component, createRef } from "react";
import './App.scss';
import ListMenu from "./ListMenu";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftSelectList: [],
      rightSelectList:[],
      rightList: [],
      leftList: ['a', 'b', 'c', 'd', 'e']
    };
    this.list = ['a', 'b', 'c', 'd', 'e']
  }
  // btnRight = createRef();

  dataHandlerLeft = (e) => {
    const { value, checked } = e.target;
    let array = this.state.leftSelectList;

    checked
      ? array.push(value)
      : array = array.filter(x => x !== value);
    this.setState({ leftSelectList: array });
  }

  dataHandlerRight = (e) => {

    const { value, checked } = e.target;
    let array = this.state.rightSelectList;

    checked
      ? array.push(value)
      : array = array.filter(x => x !== value);

    // if (array.length !== 0)
    //   this.btnRight.current.disabled = true;
    // else
    //   this.btnRight.current.disabled = false;

    this.setState({ rightSelectList: array });
  }

  addRightHandler = () => {
    let l;
    const { leftSelectList, leftList, rightList } = this.state;
    if (leftSelectList.length === 0)
      return;
    else {
      leftSelectList.map((i) => {
        rightList.push(i);
      })

      l = leftList.filter((i) => {
        if (!leftSelectList.includes(i))
          return i;
      })
      this.setState({ leftList: l, leftSelectList: [] });//, () => { this.setState({ leftList: l }) });
    }
  }

  addLeftHandler = () => {
    // this.btnRight.current.disabled = false;

    let updateRight, updateLeft;
    const { list } = this;
    const { rightSelectList, leftList, rightList } = this.state;
    if (rightSelectList.length === 0)
      return;

    else {
      rightSelectList.map((i) => {
        leftList.push(i);
      })

      updateLeft = list.filter((i) => {
        if (leftList.includes(i))
          return i;
      })

      updateRight = rightList.filter((i) => {
        if (!rightSelectList.includes(i))
          return i;
      })

      this.setState({ rightList: updateRight, rightSelectList: [], leftList: updateLeft })//, () => { this.setState({ rightList: updateRight }) });
    }
  }

  shiftHandler = (e) => {
    // this.btnRight.current.disabled = false;

    const { value, checked } = e.target;
    let array = this.state.rightSelectList;
    const { rightList, rightSelectList } = this.state;
    let tempList = rightList;
    let index;

    checked
      ? array.push(value)
      : array = array.filter(x => x !== value);

    if (array.length !== 0)
      this.setState({ rightSelectList: array }, () => {
        let tempValue;
        index = rightSelectList.map((i) => tempList.indexOf(i))

        if (index == 0) {
          let l = tempList.length;
          tempValue = tempList[0];
          for (let i = 0; i < l - 1; i++)
            tempList[i] = tempList[i + 1];
          tempList[l - 1] = tempValue
        }
        else if (rightList.length >= 2) {
          tempValue = tempList[index - 1]
          tempList[index - 1] = tempList[index]
          tempList[index] = tempValue
        }
        this.setState({ rightList: tempList })//, () => { this.setState({ rightList: tempList }) });
      });
  }

  render() {
    const{leftList,leftSelectList, rightList,rightSelectList}=this.state
    return (
      <>
        <div className="container">
          <ListMenu
            list={leftList}
            selectList={leftSelectList}
            onChange={this.dataHandlerLeft}
          />
          <div className="btn">
            <input type='button'  value="  >  " onClick={this.addRightHandler} />
            <input type='button' value="  <  " onClick={this.addLeftHandler} />
            <input type='button' disabled={this.state.rightSelectList.length > 1 || this.state.leftSelectList.length !== 0} value=" UP " onClick={this.shiftHandler} />
          </div>
          <ListMenu
            list={rightList}
            selectList={rightSelectList}
            onChange={this.dataHandlerRight}
          />
        </div>
      </>
    );
  }
}

export default App;