import React from 'react';
import axios from 'axios';
import Patients from '../components/Patients';
import { Card } from 'antd';



class PatientDetail extends React.Component{

    state = {
        patientprofile : []
    }

    componentDidMount() {
        const patientID = this.props.match.params.articleID;
        axios.get('http://127.0.0.1:8000/api/${id}')
        .then(res => {
            this.setState({
                patients: res.data
            });
            console.log(res.data);
        })
    }

    render () {
        return (
            <div>
                 <Patients data={this.state.patientprofile}/>
                 <Card title={this.state.patientprofile.patient}>
                    <p>{this.state.patientprofile.id}</p>
                 </Card>

            </div>
           
        )
    }
}

export default PatientList; 