import React, { Component } from "react"
import { validateName, validateEmail, validatePhone, validateUrl } from "../validators"

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
        }
    }

    onChangeName = (event) => {
        const isNameValid = validateName(event.target.value)
        this.setState({ isNameValid })
    }

    onChangeEmail = (event) => {
        const isEmailValid = validateEmail(event.target.value)
        this.setState({ isEmailValid })
    }

    onChangePhone = (event) => {
        const isPhoneValid = validatePhone(event.target.value)
        this.setState({ isPhoneValid })
    }

    onChangeBlog = (event) => {
        const isUrlValid = validateUrl(event.target.value)
        this.setState({ isUrlValid })
    }

    onSubmit = () => {
        const areAllValid = Object
            .values(this.state)
            .every(field => field === true)

        this.props.isFormValid(areAllValid)
    }

    render() {
        return (
            <div className="row">
                <h1 className="text-center">Form Validation</h1>
                <form >
                    <h3>Name:</h3>
                    <input onChange={this.onChangeName} className='name' />
                    <h3>Email:</h3>
                    <input onChange={this.onChangeEmail} className='email' />
                    <h3>Phone:</h3>
                    <input onChange={this.onChangePhone} className='phone' />
                    <h3>Blog URL:</h3>
                    <input onChange={this.onChangeBlog} className='url' />
                    <div className="small-6 small-centered text-center columns">
                        <a href='#' className="button success expand round text-center" onClick={this.onSubmit}>
                            Verify
                        </a>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
