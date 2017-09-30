import React from 'react';

import PhoneList        from './PhoneList.react.js';
import AddNewPhoneForm  from './AddNewPhoneForm.react.js';

class CardBody extends React.Component {
    //props:
        //phoneData: array of objects of form:
            // - {label:"home", numArray: ['123.123.1234','321.321.3234']}
        //handleClick: that takes argument of {phoneType: string, phoneNum: string }
            //ie. {phoneType: "home", phoneNum: "123.123.1234"}
        //handleSubmit: that takes argument of {phoneNum: string, phoneType: string}
    render() {
        const { handleClick, handleSubmit, phoneData } = this.props;

        return (
            <div>
                <ul>
                    {phoneData && phoneData.map( (phone) => 
                        <li key={phone.label}>
                            <PhoneList 
                                label={phone.label} 
                                numArray={phone.numArray}
                                handleClick={handleClick} 
                            />
                        </li>
                     )}
                </ul>
                <AddNewPhoneForm handleSubmit={handleSubmit} />
            </div>
        );
    }
}

export default CardBody;