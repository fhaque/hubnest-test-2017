import React        from 'react';

import CardHeader   from './CardHeader.react.js';
import CardBody     from './CardBody.react.js';

const Card = (props) => {
    //props:
        //person: data object of a person with properties
            // - name: string
            // - phoneData: array of objects of form:
            //  - {label:"home", numArray: ['123.123.1234','321.321.3234']}
        //handleCardDeletion
        //handlePhoneNumDeletion
        //handleAddPhoneNum: that takes argument of {phoneNum: string, phoneType: string}

    const { person, handleCardDeletion, handlePhoneNumDeletion, handleAddPhoneNum } = props;

    return (
        <article>
            <header>
                <CardHeader name={person.name} handleClick={handleCardDeletion}/>
            </header>
            <section>
                <CardBody 
                    phoneData={person.phoneData} 
                    handleClick={handlePhoneNumDeletion}
                    handleSubmit={handleAddPhoneNum}
                />
            </section>
            
        </article>
    );
}

export default Card;