import React from 'react';

const Message = ({ isFormValid }) => {
    const message = isFormValid ? 'Form is Complete!' : 'Form is Incomplete!'

    return (
        <div>
            <h3 className="text-center message">{message}</h3>
        </div>
    )
}

export default Message;
