import React, { Component } from 'react';
import Therapist from './Components/Therapist.js';
import Patient from './Components/Patient.js';

// import './App.css';

class App extends Component {
 state = {
    todos: []
    };
    async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/curriculums/');
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
       <div>
        {this.state.todos.map(item => (
          <div key={item.id}>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}



export default App;
