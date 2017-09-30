import React from 'react';

//props:
    //handleSubmit(data): where data contains object with properties:
    // - phoneNum: string
    // - phoneType: string
class AddNewPhoneForm extends React.Component {
    constructor() {
        super();

        this.state = {
            phoneNum: '',
            phoneType: 'home',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const { phoneNum, phoneType } = this.state;

        this.props.handleSubmit({ phoneNum, phoneType });
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({ [name]: value });
    }

    render() {
        const { phoneNum, phoneType } = this.state;

        return (
            <form className="AddNewPhoneForm" onSubmit={this.handleSubmit}>
                <label className="AddNewPhoneForm__selectContainer">
                    <span className="hidden">Phone Number Type</span>
                    <select className="AddNewPhoneForm__select" name="phoneType" value={phoneType} onChange={this.handleChange}>
                        <option value="home">Home</option>
                        <option value="work">Work</option>
                        <option value="cell">Cell</option>
                    </select>
                </label>
                <label className="AddNewPhoneForm__inputContainer">
                    <span className="hidden">Phone Number</span>
                    <input className="AddNewPhoneForm__input" type="text" name="phoneNum" value={phoneNum} placeholder="555.555.5555" pattern="^\d{3}.\d{3}.\d{4}$" onChange={this.handleChange} required />
                </label>
                <input className="AddNewPhoneForm__submit" type="submit" value="Submit"/>
            </form>
        );
    }
}

export default AddNewPhoneForm;