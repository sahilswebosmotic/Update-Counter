import React, { useRef } from "react";

const Step2 = () => {
    const counterRef = useRef(0);

    function updateUI() {
    const span = document.getElementById("counter-span");
    const input = document.getElementById("counter-input");

    span.textContent = counterRef.current.value;
    input.value = counterRef.current.value;
    }

    function handleIncrement() {
        counterRef.current.value++;
        updateUI()
    }

    function handleDecrement() {
        counterRef.current.value = Math.max(counterRef.current.value - 1, 0);
        updateUI() 
    }

    return (
        <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
            <div  className=" border border-zinc-600 rounded-xl p-10 bg-zinc-800 shadow-2xl">
                <h1   className="text-4xl font-bold text-white text-center mb-10">
                    Counter: <span id="counter-span">0</span> 
                </h1>

                <div className="flex items-center justify-center gap-6">
                    <label className="text-zinc-300 w-52">Counter:</label>

                    <button
                        className="w-10 h-10 rounded bg-zinc-900 text-white"
                        onClick={handleDecrement}
                    >
                        -
                    </button>

                    <input
                        type="text"
                        id="counter-input"
                        defaultValue={0}
                        ref={counterRef}
                        className="w-40 bg-zinc-900 border border-zinc-600 rounded px-3 py-2 text-white"
                    />

                    <button
                        className="w-10 h-10 rounded bg-zinc-900 text-white"
                        onClick={handleIncrement}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Step2;
