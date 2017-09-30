import React from 'react';

import DeleteBtn from './DeleteBtn.react.js';

const CardHeader = (props) => {
    const { name, handleClick } = props;
    return (
        <div>
            <p>{name}</p>
            <DeleteBtn handleClick={handleClick} />
        </div>
    );
}

export default CardHeader;