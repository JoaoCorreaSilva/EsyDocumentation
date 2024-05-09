import React from "react";

const LocalButton = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

export default LocalButton;