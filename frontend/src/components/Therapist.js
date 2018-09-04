import React, { Component } from 'react';


class Therapist extends Component {
  
  state = {
    toggle : false
  }

  toggle = () =>{
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render() {
    const {name, hospital} = this.props;
    return (
      <div >
        <h1>WELCOME {name} of {hospital}</h1>
        
        { this.state.toggle && <p>Hide this!</p>
        }
        <button onClick={this.toggle}> Peek-a-boo!</button>
      </div>
      
     
     
    );
  }
}

export default Therapist;