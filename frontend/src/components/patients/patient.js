import React, {Component} from 'react';

class Patient extends Component {
    state = {
        todos: []
    };
    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/patients/$(id)');
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
                <h1 style = {{color: 'black'}} > PATIENT details </h1>
                 {/* {
                    this.state.todos.map(item => (


                        <div key = {item.id} >
                        <Card style = {{
                                width: 300,
                                marginTop: 16}}
                            actions = {
                                [ <Icon type = "setting" /> , 
                                <Icon type = "edit" /> , 
                                <Icon type = "ellipsis"/> 
                                ]}>
                        <Skeleton avatar active >
                        <Meta
                        // avatar={<Avatar src="http://127.0.0.1:8000/patients/$(id)" />}
                        title = {
                            item.id
                        }
                        description = {
                            item.diagnosis
                        }
                        slta = {
                            item.slta
                        }
                        />
                        </Skeleton> 
                        </Card> 
                        </div>

                    ))
                } */}
            </div>
        );
    }
}

export default Patient;