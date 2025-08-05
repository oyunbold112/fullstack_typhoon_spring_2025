import React, { useState } from "react";

const ControlledInput: React.FC = () => {
    const [value, changeValue] = useState<string>('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeValue(event.currentTarget.value)
    }
    return (
        <>
            <h3>On Change Example</h3>
            <input type="text"
            placeholder="Type Something..."
            onChange={handleInputChange} />
            
            <p>Current value: {value}</p>
        </>
    )
}

export default ControlledInput;