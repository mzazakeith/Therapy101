import React, { Component } from 'react';
// // import Therapist from './components/Therapist.js';
// // import Patients from './components/Patients.js';
// // import Layout from './containers/Layout';

// // import './App.css';

// // import { Table, Divider, Tag } from 'antd';
// import { Table } from 'antd';

// // const columns = [{
// //   title: 'Patient',
// //   dataIndex: 'id',
// //   render: text => `${patient}`,
// // }, {
// //   title: 'Curriculum',
// //   className: 'column-money',
// //   dataIndex: 'document',
// // },];

// // const data = [{
// //   key: '1',
// //   name: 'John Brown',
// //   money: '￥300,000.00',
// //   address: 'New York No. 1 Lake Park',
// // }, {
// //   key: '2',
// //   name: 'Jim Green',
// //   money: '￥1,256,000.00',
// //   address: 'London No. 1 Lake Park',
// // }, {
// //   key: '3',
// //   name: 'Joe Black',
// //   money: '￥120,000.00',
// //   address: 'Sidney No. 1 Lake Park',
// // }];



// class Curriculum extends Component {
//  state = {
//     data: []
//     // pagination:{},
//     };
//     async componentDidMount() {
//     try {
//       const res = await fetch('http://127.0.0.1:8000/curriculums/');
//       const todos = await res.json();
//       this.setState({
//         todos
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   render() {
//     return (
//        <div>
//         {this.state.todos.map(item => (
//           <div key={item.id}>
//             <span>{item.description}</span>
//             {/* <Layout></Layout> */}
//             <h1 style={{color:'white', paddingTop:100 }}>CURRICULUMS</h1>
//             <Table
//                 columns={columns}
//                 // dataSource={data}
//                 bordered
//                 title={() => 'Header'}
//                 footer={() => 'Footer'}
//               />,
//             {/* dataSource={data} */}
//           </div>
//         ))}
        
      
//       </div>
//     );
//   }
// }

// export default Curriculum;


// import Therapist from './Components/Therapist.js';
// import Patient from './Components/Patient.js';

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