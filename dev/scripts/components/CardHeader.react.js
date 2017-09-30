import React from 'react';

import DeleteBtn from './DeleteBtn.react.js';

const CardHeader = (props) => {
    const { name, handleClick } = props;
    return (
        <div className="CardHeader">
            <p className="CardHeader__title">{name}</p>
            <div className="CardHeader__btn">
                <DeleteBtn handleClick={handleClick} />
            </div>
        </div>
    );
}

export default CardHeader;