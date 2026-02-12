import React from "react";
const Counter = ({ value }) => {
    return (
        <h1 className="text-4xl font-bold text-white text-center mb-10">
            Counter: <span>{value}</span>
        </h1>
    );
};

export default Counter;
