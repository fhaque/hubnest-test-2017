import React from 'react';

const DeleteBtn = (props) => {
    //props:
        //handleClick: for handling onClick for deletion
    const { handleClick } = props;

    return (
        <div className="DeleteBtn">
            <button className="DeleteBtn__btn" onClick={handleClick}>X</button>
            <p className="DeleteBtn__label">delete</p>
        </div>
    );
}

export default DeleteBtn;