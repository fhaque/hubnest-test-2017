import React from 'react';
import ReactDOM from 'react-dom';

import DeleteBtn from './components/DeleteBtn.react.js';
import CardHeader from './components/CardHeader.react.js';
import AddNewPhoneForm from './components/AddNewPhoneForm.react.js';
import PhoneList from './components/PhoneList.react.js';

import Card from './components/Card.react.js';

class App extends React.Component {
    handleClick(e) {
        console.log('btn working');
    }

    handleSubmit(data) {
        console.log(data);
    }

    handleCardDeletion() {
        console.log("Card Deletion Handle");
    }

    handlePhoneNumDeletion() {
        console.log("Phone Num Deletion Handle");
    }

    handleAddPhoneNum() {
        console.log("Add Phone Num handle");
    }

    render() {
        const person = {
            name: "Bob",
            phoneData: [{label: "home", numArray: ["12","31413","123123"]},{label: "cell", numArray: ["12344","13","123123"]} ],
        };

        return (
            <div>
                <Card 
                    person={person}
                    handleCardDeletion={this.handleCardDeletion}
                    handlePhoneNumDeletion={this.handlePhoneNumDeletion}
                    handleAddPhoneNum={this.handleAddPhoneNum}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));