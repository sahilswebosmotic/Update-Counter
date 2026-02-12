import React from "react";
const CounterControl = ({
    text,
    value,
    onIncrement,
    onDecrement,
    readOnly=true,
}) => {
    return (
        <div className="flex items-center justify-center gap-6">
            <label className="text-zinc-300 w-52">{text}:</label>

            <button
                className="w-10 h-10 rounded bg-zinc-900 text-white"
                onClick={onDecrement}
            >
                -
            </button>

            <input
                type="text"
                value={value}
                readOnly = {readOnly}
                className="w-40 bg-zinc-900 border border-zinc-600 rounded px-3 py-2 text-white"
            />

            <button
                className="w-10 h-10 rounded bg-zinc-900 text-white"
                onClick={onIncrement}
            >
                +
            </button>
        </div>
    );
};

export default CounterControl;
