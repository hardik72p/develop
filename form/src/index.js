import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Show from './show';

class FormData extends React.Component{
    constructor(props){
        super(props)
        this.state={
            fname :'',
            lname :'',
            mname :'',
            show : false
        }
       
    }

    done=()=>{
        if(!this.state.show)
        {this.setState({show : true});}
        else
        {
            this.setState({show : !this.state.show});
        }
        // console.log(this.state.show)

    }

    submitData=(event)=>{
        event.preventDefault();
        this.setState({[event.target.name] : event.target.value} ); 
    }

    render(){
        return(
        <div>
        <App submitData={this.submitData} done={this.done}/>
        {this.state.show && <Show propsData={this.state}/>}
        
        </div>);
    }


}
ReactDOM.render(<FormData/> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
