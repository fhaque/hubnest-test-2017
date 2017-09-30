import React from 'react';

import DeleteBtn from './DeleteBtn.react.js';

function handleClick(e, data, cb) {
    e.preventDefault();

    cb(data);
}

const PhoneList = (props) => {
    //props:
        //label: Such as Home, Work, Cell
        //numArray: array of phone numbers
        //handleClick: that takes argument of {phoneType: string, phoneNum: string }
            //ie. {phoneType: "home", phoneNum: "123.123.1234"}
    const { label, numArray } = props;

    return (
        <div className="PhoneList">
            <p className="PhoneList__label">{label}</p>
            <ul className="PhoneList__list">
                {numArray.map( (num) => 
                    <li key={num} className="PhoneList__item">
                        <p className="PhoneList__itemValue">{num}</p>
                        <div className="PhoneList__btn">
                            <DeleteBtn handleClick={(e) => handleClick(e, { phoneType: label,  phoneNum: num }, props.handleClick)} />
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default PhoneList;