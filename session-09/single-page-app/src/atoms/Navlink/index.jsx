/* eslint-disable react/prop-types */
import React, { StrictMode } from "react";
import { Link } from "react-router-dom";

class Navlink extends React.Component {
    render() {
        return (
            <StrictMode>
                <Link to={this.props.to} className={this.props.className}>
                    {this.props.children}
                </Link>
            </StrictMode>
        )
    }
}

export default Navlink;