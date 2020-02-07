import React, { Component } from "react";
import student from './students_data.json';

class Details extends Component {
    render() {
        const { params } = this.props.match;
        let data = student.filter(stud => stud.id == params.id)
        return (
            <>
                <h3>{data[0].first_name}</h3>
                <h3>{data[0].last_name}</h3>
                <h3>{data[0].DOB}</h3>
                <h3>{data[0].father}</h3>
                <h3>{data[0].mother}</h3>
                <h3>{data[0].email}</h3>
                <h3>{data[0].standard}</h3>
                <h3>{data[0].gender}</h3>
            </>
        );
    }
}

export default Details;