import React from 'react';

const DeleteBtn = (props) => {
    //props:
        //handleClick: for handling onClick for deletion
    const { handleClick } = props;

    return (
        <div>
            <button onClick={handleClick}>X</button>
            <p>delete</p>
        </div>
    );
}

export default DeleteBtn;