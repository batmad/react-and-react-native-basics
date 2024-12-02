import React from "react";

class Button extends React.Component {
    render() {
        return (
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                {this.props.children}
            </button>
        )
    }
}

export default Button;