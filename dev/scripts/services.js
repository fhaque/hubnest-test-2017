import firebase from './firebase.js';

const personsRef = firebase.database().ref('persons');

const services = {};

services.addDBListenHandle = function(handle) {
    personsRef.on('value', (snapshot) => handle( snapshot.val() ));
}

services.addPerson = function(person) {
    personsRef.push(person);
} 

services.updatePerson = function(person) {
    personsRef.child(person.id).set(person);
}

services.removePerson = function(person) {
    personsRef.child(person.id).remove();
}

export default services;