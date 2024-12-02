/* eslint-disable react/prop-types */
import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <div className="content" style={{ marginLeft: '250px', padding: '20px', flex: 1 }}>
                {this.props.children}
            </div>
        )
    }
}

export default Content;