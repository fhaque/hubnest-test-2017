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
        //handleClick: for the delete button
    const { label, numArray } = props;

    return (
        <div>
            <p>{label}</p>
            <ul>
                {numArray.map( (num) => 
                    <li key={num}>
                        <p>{num}</p>
                        <DeleteBtn handleClick={(e) => handleClick(e, { [label]: num }, props.handleClick)} />
                    </li>
                )}
            </ul>
        </div>
    );
}

export default PhoneList;