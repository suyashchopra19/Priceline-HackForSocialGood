import React  from 'react';
import { NavLink  } from 'react-router-dom';

export default function Topbar (props) {
    return (
        <div>
       
            <NavLink className="header" to='/' id='homeLink'>
                {/*<span className="headerLeft">Welcome to the</span> */}
                <span className="headerMain"> Priceline</span>
                <span className="headerSub"> Hack For Social Good </span>
            </NavLink>
            
            <div className='nav-container'>
                <ul className="nav nav-tabs nav-justified">
                    <li className="nav-item"><NavLink className="nav-link" to="/campuses">Counselors</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/students">Students</NavLink></li>
                </ul>
            </div>
        </div>
    );
}