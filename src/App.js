import React, { Component } from "react";
import Form from "./components/Form";
import Message from "./components/Message";

class App extends Component {
    state = {
        isFormValid: false,
    }

    updateFormValidation = (isFormValid) => {
        this.setState({ isFormValid })
    }

    render() {
        return (
            <div>
                <Form isFormValid={this.updateFormValidation} />
                <Message isFormValid={this.isFormValid} />
            </div>
        );
    }
}

export default App
