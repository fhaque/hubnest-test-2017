import React from 'react';

import PhoneList        from './PhoneList.react.js';
import addNewPhoneForm  from './addNewPhoneForm.react.js';

class CardBody extends React.Component {
    //props:
        //phoneData: array of objects of form:
            // - {label:"home", numArray: ['123.123.1234','321.321.3234']}
        //handleClick: that takes argument of {phoneType: phoneNum }
            //ie. {"home": "123.123.1234"}
        //handleSubmit: that takes argument of {phoneNum: string, phoneType: string}
    render() {
        const { handleClick, handleSubmit } = this.props;

        return (
            <div>
                <ul>
                    {phoneData.map( (phone) => 
                        <li key={phone.label}>
                            <PhoneList 
                                label={phone.label} 
                                numArray={phone.numArray}
                                handleClick={handleClick} 
                            />
                        </li>
                    )}
                </ul>
                <addNewPhoneForm handleSubmit={handleSubmit} />
            </div>
        );
    }
}

export default CardBody;