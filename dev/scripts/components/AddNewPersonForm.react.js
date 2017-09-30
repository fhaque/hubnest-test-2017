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
            <form onSubmit={this.handleSubmit}>
                <label>
                    <span>Add New Person</span>
                    <input type="text" name="name" value={name} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Add"/>
            </form>
        );
    }
}

export default AddNewPersonForm;