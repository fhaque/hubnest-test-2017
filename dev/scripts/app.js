import React from 'react';
import ReactDOM from 'react-dom';

import services from './services.js';

import Card from './components/Card.react.js';
import AddNewPersonForm from './components/AddNewPersonForm.react.js';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            persons: []
        }

        this.handleAddPhoneNum = this.handleAddPhoneNum.bind(this);
        this.handlePhoneNumDeletion = this.handlePhoneNumDeletion.bind(this);
        this.handleCardDeletion = this.handleCardDeletion.bind(this);
        this.handleAddPerson = this.handleAddPerson.bind(this);

        this.dBListenHandle = this.dBListenHandle.bind(this);

    }

    handleCardDeletion(index) {
        const { persons } = Object.assign({} ,this.state);

        services.removePerson(persons[index]);
    }

    handlePhoneNumDeletion(index, data) {
        const { persons } = Object.assign({} ,this.state);
        const person = persons[index];
        const phoneData = person.phoneData;

        const { phoneNum, phoneType } = data;

        const phoneIndex = phoneData[phoneType].indexOf(phoneNum);
        
        phoneData[phoneType].splice(phoneIndex,1);

        services.updatePerson(person);
    }

    handleAddPhoneNum(index, data) {
        const { persons } = Object.assign({} ,this.state);
        const person = persons[index];
        const phoneData = person.phoneData;

        const { phoneNum, phoneType } = data;

        if (phoneType in phoneData) {
            phoneData[phoneType].push(phoneNum);
        } else {
            phoneData[phoneType] = [phoneNum];
        }

        services.updatePerson(person);
    }

    handleAddPerson(name) {
        const { persons } = Object.assign({} ,this.state);

        services.addPerson( this.createPersonObj(name) );
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

    dBListenHandle(persons) {
        const newPersons = [];
        
        for (let key in persons) {
            const person = persons[key];
            person.id = key;
            if ( !('phoneData' in person ) ) {
                person.phoneData = {};
            }
            newPersons.push(person);
        }

        this.setState({ persons: newPersons });
    }

    componentDidMount() {
        services.addDBListenHandle(this.dBListenHandle);
    }

    render() {
        const { persons } = Object.assign({}, this.state);

        return (
            <div className="wrapper">
                {persons.map( (person, index) => {
                    //transform the phone data for rendering
                    const transformedPerson = Object.assign({}, person);
                    transformedPerson.phoneData = this.phoneDataTransformToArray(transformedPerson.phoneData);

                    return <Card key={transformedPerson.id}
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