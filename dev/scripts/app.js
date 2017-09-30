import React from 'react';
import ReactDOM from 'react-dom';

import DeleteBtn from './components/DeleteBtn.react.js';
import CardHeader from './components/CardHeader.react.js';
import AddNewPhoneForm from './components/AddNewPhoneForm.react.js';
import PhoneList from './components/PhoneList.react.js';

import Card from './components/Card.react.js';
import AddNewPersonForm from './components/AddNewPersonForm.react.js';

class App extends React.Component {
    constructor() {
        super();

        this.state = {

            persons: [
                {
                    name: "Bob",
                    phoneData: {
                        "home" : ["12","31413","123123"],
                        "cell": ["12344","13","123123"]
                    },
                },
                {
                    name: "Alice",
                    phoneData: {
                        "home" : ["12334234234","3141233","12323123"],
                    },
                },
            ],
        }

        this.handleAddPhoneNum = this.handleAddPhoneNum.bind(this);
        this.handlePhoneNumDeletion = this.handlePhoneNumDeletion.bind(this);
        this.handleCardDeletion = this.handleCardDeletion.bind(this);
        this.handleAddPerson = this.handleAddPerson.bind(this);

    }

    handleClick(e) {
        console.log('btn working');
    }

    handleSubmit(data) {
        console.log(data);
    }

    handleCardDeletion(index) {
        console.log("Card Deletion Handle");

        const { persons } = Object.assign({} ,this.state);

        persons.splice(index, 1);

        this.setState({ persons });
    }

    handlePhoneNumDeletion(index, data) {
        console.log("Phone Num Deletion Handle");

        const { persons } = Object.assign({} ,this.state);
        const person = persons[index];
        const phoneData = person.phoneData;

        const { phoneNum, phoneType } = data;

        const phoneIndex = phoneData[phoneType].indexOf(phoneNum);
        phoneData[phoneType].splice(phoneIndex,1);

        this.setState({ persons });

    }

    handleAddPhoneNum(index, data) {
        console.log("Add Phone Num handle");

        const { persons } = Object.assign({} ,this.state);
        const person = persons[index];
        const phoneData = person.phoneData;

        const { phoneNum, phoneType } = data;

        if (phoneType in phoneData) {
            phoneData[phoneType].push(phoneNum);
        } else {
            phoneData[phoneType] = [phoneNum];
        }

        this.setState({ persons });
    }

    handleAddPerson(name) {
        const { persons } = Object.assign({} ,this.state);

        persons.push(this.createPersonObj(name));

        this.setState({ persons });
    }

    createPersonObj(name) {
        return {
            name: name,
            phoneData: {},
        }
    }

    phoneDataTransformToArray(phoneData) {
        //convert {home: ["123.123.1234"], cell: ["123.123.1231"]}
        // to [{label: "home", numArray: ["123.123.1234"]}, {label: "cell",["123.123.1231"]}]

        const phoneDataArray = [];

        for (let phoneType in phoneData) {
            phoneDataArray.push({ label: phoneType, numArray: phoneData[phoneType] });
        }

        return phoneDataArray;
    }

    render() {
        const { persons } = Object.assign({}, this.state);

        return (
            <div>
                {persons.map( (person, index) => {
                    //transform the phone data for rendering
                    const transformedPerson = Object.assign({}, person);
                    transformedPerson.phoneData = this.phoneDataTransformToArray(transformedPerson.phoneData);

                    return <Card 
                        person={transformedPerson}
                        handleCardDeletion={() => this.handleCardDeletion(index)}
                        handlePhoneNumDeletion={(data) => this.handlePhoneNumDeletion(index, data)}
                        handleAddPhoneNum={(data) => this.handleAddPhoneNum(index, data)}
                    />
                })}

                <AddNewPersonForm handleSubmit={this.handleAddPerson} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));