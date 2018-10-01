import React, {Component} from 'react';

class Menu extends Component {

    render() {
        return ( 
            <div >
                <nav>
                    <ul>
                        <li>Assistants</li>
                        <li>Patients</li>
                        <li> Treatment Plans</li>
                        <li>Curriculums</li>
                        <li>Reports</li>
                        <li>Logout</li>

                    </ul>
                </nav>

            </div>
        );
    }
}

export default Menu;