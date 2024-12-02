import React from'react';

class Skills extends React.Component {
    render() {
        return (
            <div className="card mb-4 mt-4">
                <div className="card-body">
                    <h5 className="card-title">Skills</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <i className="fas fa-code me-2"></i> HTML, CSS, JavaScript
                        </li>
                        <li className="list-group-item">
                            <i className="fab fa-react me-2"></i> React.js
                        </li>
                        <li className="list-group-item">
                            <i className="fab fa-node me-2"></i> Node.js
                        </li>
                        <li className="list-group-item">
                            <i className="fas fa-database me-2"></i> SQL, MongoDB
                        </li>
                        <li className="list-group-item">
                            <i className="fas fa-paint-brush me-2"></i> UI/UX Design
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Skills;   