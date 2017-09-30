import React from 'react';
import ReactDOM from 'react-dom';

import DeleteBtn from './components/DeleteBtn.react.js';
import CardHeader from './components/CardHeader.react.js';
import AddNewPhoneForm from './components/AddNewPhoneForm.react.js';
import PhoneList from './components/PhoneList.react.js'

class App extends React.Component {
    handleClick(e) {
        console.log('btn working');
    }

    handleSubmit(data) {
        console.log(data);
    }

    render() {
        return (
            <div>
                <DeleteBtn handleClick={this.handleClick} />

                <CardHeader name="Bob" handleClick={this.handleClick} />

                <AddNewPhoneForm handleSubmit={this.handleSubmit} />

                <PhoneList label="HOME" numArray={['123','43242']} handleClick={this.handleClick} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));