import React, { Component } from "react";
import { hot } from "react-hot-loader";

import "./App.css";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            error: false
        };

        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    }

    decrementCounter() {
        this.setState((prevState) => {
            if (prevState.counter === 0) {
                return { error: true };
            } else {
                return { counter: prevState.counter - 1 };
            }
        });
    }

    incrementCounter() {
        this.setState((prevState) => {
            if (prevState.error) {
                return { error: false, counter: prevState.counter + 1 };
            } else {
                return { counter: prevState.counter + 1 };
            }
        });
    }


    render() {

        const errorClass = this.state.error ? '' : 'hidden';

        return (
            <div data-test="component-app">
                <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
                <div data-test="error-message" className={`error ${errorClass}`}>
                    The counter cannot go below 0
                </div>
                <button
                    data-test="increment-button"
                    onClick={this.incrementCounter}
                >
                    Increment counter
                </button>
                <button
                    data-test="decrement-button"
                    onClick={this.decrementCounter}
                >
                    Decrement counter
                </button>
            </div>
        );
    }
}

export default hot(module)(App);