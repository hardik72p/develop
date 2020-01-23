import React from 'react';

class Event extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
        }
        this.eventHandlerCounstructor = this.eventHandlerCounstructor.bind(this);
    }

    eventHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    eventHandlerInline(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    eventHandlerCounstructor(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    eventHandlerParam(p1, p2, event) {
        this.setState({ [event.target.name]: p1 + ` ${p2}  ${event.target.value} welcome  !!!!` });
    }

    render() {
        const { user } = this.state;

        return (
            <div>
                <h1> Event Handling </h1><br /><br />

                <h3> Arrow Binding </h3>
                <label>Enter Name:</label>
                <input type="text" name="user" onChange={this.eventHandler} /><br />

                <h3> Inline Binding </h3>
                <label>Enter Name:</label>
                <input type="text" name="user" onChange={this.eventHandlerInline.bind(this)} /><br />

                <h3> Binding in Constructor</h3>
                <label>Enter Name:</label>
                <input type="text" name="user" onChange={this.eventHandlerCounstructor} /><br />

                <h3> Bind method parameters</h3>
                <label>Enter Name:</label>
                <input type="text" name="user"
                    onChange={this.eventHandlerParam.bind(this, this.state.user, '**')} /><br />

                <h3>  Parameters using Arrow function</h3>
                <label>Enter Name:</label>
                <input type="text" name="user"
                    onChange={(event) => { this.eventHandlerParam(this.state.user, '**', event) }} /><br />

                {user}
            </div>
        );
    }
}

export default Event;