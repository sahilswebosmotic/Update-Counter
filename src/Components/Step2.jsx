import React, {  useRef } from "react";
// import CounterControl from "./CounterControl";

const Step2 = () => {
    const counterRef = useRef(0);

    function getElements() {
        const span = counterRef.current.querySelector('span');
        const input = counterRef.current.querySelector('input');
        return { span, input };
    }

    function handleIncrement() {
        const { span, input } = getElements();
        input.value = Number(input.value) + 1;
        span.textContent = input.value;
    }

    function handleDecrement() {
        const { span, input } = getElements();
        input.value = Math.max(Number(input.value) - 1, 0);
        span.textContent = input.value;
    }


    return (
        <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
            <div  ref={counterRef} className=" border border-zinc-600 rounded-xl p-10 bg-zinc-800 shadow-2xl">
                <h1   className="text-4xl font-bold text-white text-center mb-10">
                    Counter: <span id="counter-span" >0</span> 
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
                        className="w-40 bg-zinc-900 border border-zinc-600 rounded px-3 py-2 text-white"
                    />

                    <button
                        className="w-10 h-10 rounded bg-zinc-900 text-white"
                        onClick={handleIncrement}
                    >
                        +
                    </button>
                </div>
                    {/* <CounterControl
                    text= 'Timer'
                    value = {counterRef}
                    onDecrement={handleDecrement}
                    onIncrement={handleIncrement}
                    /> */}
            </div>
        </div>
    );
};

export default Step2;
