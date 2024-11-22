import React from "react";

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            time: new Date()
        };
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }


    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <>
                <h1>Class Clock : {this.state.time.toLocaleTimeString()}</h1>
            </>
        )
    }
}

export default Clock;