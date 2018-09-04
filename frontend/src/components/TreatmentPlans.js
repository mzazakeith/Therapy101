import React, { Component } from 'react';
// import Therapist from './components/Therapist.js';
// import Patients from './components/Patients.js';
// import Layout from './containers/Layout';

// import './App.css';

import { Table, Divider, Tag } from 'antd';

const columns = [{
  title: 'Patient',
  dataIndex: 'patient',
  key: 'patient',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Diagnosis',
  dataIndex: 'diagnosis',
  key: 'diagnosis',
}, {
  title: 'Curriculum',
  key: 'curriculum',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
  ),
}];

// const data = [{
//   key: '1',
//   name: 'John Brown',
//   age: 32,
//   address: 'New York No. 1 Lake Park',
//   tags: ['nice', 'developer'],
// }, {
//   key: '2',
//   name: 'Jim Green',
//   age: 42,
//   address: 'London No. 1 Lake Park',
//   tags: ['loser'],
// }, {
//   key: '3',
//   name: 'Joe Black',
//   age: 32,
//   address: 'Sidney No. 1 Lake Park',
//   tags: ['cool', 'teacher'],
// }];


class Curriculum extends Component {
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
            {/* <Layout></Layout> */}
            <h1 style={{color:'white'}}>TREATMENT PLANS</h1>
            <Table columns={columns}  />
            {/* dataSource={data} */}
          </div>
        ))}
        
      
      </div>
    );
  }
}

export default Curriculum;
