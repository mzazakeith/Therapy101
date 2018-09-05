import React, { Component } from 'react';
import Therapist from './Components/Therapist.js';
import Patient from './Components/Patient.js';
// import './App.css';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Therapist name="Naliaka" hospital="Gertrudes"/>
                <Patient/>
            </div>
        );
    }
}
export default App;