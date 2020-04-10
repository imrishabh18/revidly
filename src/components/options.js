import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faBell,faUserCircle,faPlus,faAddressBook} from '@fortawesome/free-solid-svg-icons'
import './css/options.css';

class Options extends Component{
    render(){
        return(
            <div className="footer">
                <ul>
                    <li><FontAwesomeIcon icon={faHome} /></li>
                    <li><FontAwesomeIcon icon={faAddressBook} className="feed" /></li>
                    <li><FontAwesomeIcon icon={faPlus} /></li>
                    <li><FontAwesomeIcon icon={faBell} /></li>
                    <li><FontAwesomeIcon icon={faUserCircle} /></li>
                </ul>
            </div>
        )
    }
}

export default Options;