import React from "react";
import Sidebar from "../../molecules/Sidebar";

class Header extends React.Component {
    render() {
        return (
            <>
                <div className="sidebar bg-light p-2 position-fixed" style={{ width: '250px', height: '100vh' }}>
                    <div className="d-flex flex-column align-items-center mt-4">
                        <img src="https://avatars.githubusercontent.com/u/58181035?v=4" alt="Portfolio"
                            className="img-fluid rounded-circle mb-3 border border-dark"
                            style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                        <h4>Bobby Atmadja</h4>

                        <Sidebar/>
                    </div>
                </div>
            </>
        )

    }
}

export default Header;