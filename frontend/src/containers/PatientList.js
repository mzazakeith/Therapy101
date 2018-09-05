import React from 'react';
import axios from 'axios';
import Patients from '../components/Patients';

// const data = [
//     {
//       title: 'Title 1',
//     },

//     {
//       title: 'Title 2',
//     },

//     {
//       title: 'Title 3',
//     },

//     {
//       title: 'Title 4',
//     },

//     {
//       title: 'Title 5',
//     },

//     {
//       title: 'Title 6',
//     },
    
//   ];

class PatientList extends React.Component{

    state = {
        patients : []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
        .then(res => {
            this.setState({
                patients: res.data
            });
            console.log(res.data);
        })
    }

    render () {
        return (
            <Patients data={this.state.patients}/>
        )
    }
}

export default PatientList; 