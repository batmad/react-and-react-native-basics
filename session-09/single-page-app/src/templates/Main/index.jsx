/* eslint-disable react/prop-types */
import React from'react';
import Header from '../../organisms/Header';
import Content from '../../organisms/Content';
import Footer from '../../organisms/Footer';
// import './index.css';


class Main extends React.Component {
    render() {
        return (
            <>
                {/* <Header />
                <div className="container mt-4">
                    {this.props.children}
                </div> */}

                <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
                    <div className="d-flex">
                        <Header />
                        <Content>
                            {this.props.children}
                        </Content>
                    </div>

                    <Footer />
                </div>
            </>
        )
    }
}

export default Main;