import React, { Component } from 'react';
class LogIn extends Component {
    constructor(props){
        super(props);
        if(localStorage.getItem("id") == null)
        {
          this.props.history.push('/');
        }
    }

    logOutHandler = () => {
        localStorage.removeItem("id","passWord");
        this.props.history.push('/');
    }

    render() {
        return (
            <>
                <h1> Wel-Come</h1>
                <h3>{localStorage.getItem("id")}</h3>
                <input type="button" value="Logout" onClick={this.logOutHandler} />
            </>
        )
    }
}

export default LogIn;