import React from 'react';

class AddNewPersonForm extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.handleSubmit(this.state.name);
    }
    
    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({ [name] : value });
    }

    render() {
        const { name } = this.state;

        return (
            <form className="AddNewPersonForm" onSubmit={this.handleSubmit}>
                <label className="AddNewPersonForm__label">
                    <span className="hidden">Add New Person</span>
                    <input className="AddNewPersonForm__input" type="text" name="name" value={name} onChange={this.handleChange}/>
                </label>
                <input className="AddNewPersonForm__submit" type="submit" value="Add" required />
            </form>
        );
    }
}

export default AddNewPersonForm;