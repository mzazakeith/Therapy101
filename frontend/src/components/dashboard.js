import React, {Component} from 'react';
import Menu from '../components/menu.js';
import Patientlist from './patients/patientlist.js';
import Patient from './patients/patient.js';
import Assistantlist from './assistants/assistantlist.js';
import Assistant from './assistants/assistant.js';
import Curriculums from './curriculums/curriculums.js';
import TreatmentPlans from './treatmentplans/treatmentplans.js';
import Reports from './reports/reports.js';



class Dashboard extends Component {
    
    render() {
        return (
            <div>
                <h1>Semafrica</h1>
                    <Menu/>
                    <Patientlist/>
                    <Assistantlist/>
                    <Curriculums/>
                    <TreatmentPlans/>
                    <Reports/>
                    <Patient/>
                    <Assistant/>
            </div>
        );
}
}

export default Dashboard;