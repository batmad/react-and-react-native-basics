import React from'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faAward, faScrewdriverWrench, faBook, faPersonRunning, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Navlink from '../../atoms/Navlink';

class Sidebar extends React.Component {
    render() {
        return (
            <>
                <ul className="list-unstyled mt-4 ps-2" style={{ marginLeft: '-100px' }}>
                    <li className="mb-3">
                        <Navlink to="/" className="nav-link">
                            <FontAwesomeIcon icon={faHome} className="me-2" /> Home
                        </Navlink>
                    </li>
                    <li className="mb-3">
                        <Navlink to="/about" className="nav-link">
                            <FontAwesomeIcon icon={faInfoCircle} className="me-2" /> About
                        </Navlink>
                    </li>
                    <li className="mb-3">
                        <Navlink to="/experience" className="nav-link">
                            <FontAwesomeIcon icon={faBriefcase} className="me-2" /> Experience
                        </Navlink>
                    </li>
                    <li className="mb-3">
                        <Navlink to="/education" className="nav-link">
                            <FontAwesomeIcon icon={faBook} className="me-2" /> Education
                        </Navlink>
                    </li>
                    <li className="mb-3">
                        <Navlink to="/skills" className="nav-link">
                            <FontAwesomeIcon icon={faScrewdriverWrench} className="me-2" /> Skills
                        </Navlink>
                    </li>
                    <li className="mb-3">
                        <Navlink to="/interest" className="nav-link">
                            <FontAwesomeIcon icon={faPersonRunning} className="me-2" /> Interest
                        </Navlink>
                    </li>
                    <li className="mb-3">
                        <Navlink to="/awards" className="nav-link" >
                            <FontAwesomeIcon icon={faAward} className="me-2" /> Awards
                        </Navlink>
                    </li>
                </ul>
            </>
        )
    }
}

export default Sidebar;