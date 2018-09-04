// import React, { Component } from 'react';


// class Patient extends Component {
//   render() {
//     return (
//       <h1>WELCOME Patient</h1>
//     );
//   }
// }

// export default Patient;


import React from 'react';
import { List, Card } from 'antd';



const Patients = (props) => {
    return (

        <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
        dataSource={props.data}
        renderItem={item => (
          <List.Item>
            <Card title={item.patientprofile.id}> 
              <p>{item.patientprofile.etiology}</p> 
            </Card>
          </List.Item>
        )}
      />
    )
}

export default Patients;