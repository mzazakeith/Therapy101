import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import Layout from './containers/Layout';
// import PatientList from './containers/PatientList';
// import BaseRouter from './routes';
// import Dashboard from './containers/Layout';
import Curriculum from './components/Curriculum';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Router> */}
        
        {/* <Layout/> */}
            <Curriculum/>
          {/* <PatientList/> */}
      {/* </Router> */}
        
      </div>
    );
  }
}

export default App;
