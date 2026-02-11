import React, { useState, useEffect } from "react";

const Step4dummy = () => {
    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(0);
    const [increaseCount, setIncreaseCount] = useState(0);

    useEffect(() => {
        if (timer <= 0 || increaseCount === 0) return;

        const increment = setInterval(() => {
            setCounter((prevValue) => prevValue + increaseCount);
        }, timer * 1000);

        return () => clearInterval(increment);
    }, [timer, increaseCount]);

    return (
        <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
            <div className=" border border-zinc-600 rounded-xl p-10 bg-zinc-800 shadow-2xl">
                <h1 className="text-4xl font-bold text-white text-center mb-10">
                    Counter: <span>{counter}</span>
                </h1>

                <div className="space-y-6">
                    <div className="flex items-center justify-center gap-6">
                        <label className="text-zinc-300 w-52">Counter:</label>

                        <button
                            className="w-10 h-10 rounded bg-zinc-900 text-white"
                            onClick={() => setCounter((counter) => Math.max(counter - 1, 0))}
                        >
                            -
                        </button>

                        <input
                            type="text"
                            value={counter}
                            readOnly
                            className="w-40 bg-zinc-900 border border-zinc-600 rounded px-3 py-2 text-white"
                        />

                        <button
                            className="w-10 h-10 rounded bg-zinc-900 text-white"
                            onClick={() => setCounter((counter) => counter + 1)}
                        >
                            +
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-6">
                        <label className="text-zinc-300 w-52 ">
                            Auto Increment Timer input:
                        </label>

                        <button
                            className="w-10 h-10 rounded bg-zinc-900 text-white"
                            onClick={() => setTimer((timer) => Math.max(0, timer - 1))}
                        >
                            -
                        </button>

                        <input
                            type="text"
                            value={timer}
                            readOnly
                            className="w-40 bg-zinc-900 border border-zinc-600 rounded px-3 py-2 text-white"
                        />

                        <button
                            className="w-10 h-10 rounded bg-zinc-900 text-white"
                            onClick={() => setTimer((timer) => timer + 1)}
                        >
                            +
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-6">
                        <label className="text-zinc-300 w-52">Increment Amount:</label>

                        <button
                            className="w-10 h-10 rounded bg-zinc-900 text-white"
                            onClick={() =>
                                setIncreaseCount((increaseCount) =>
                                    Math.max(increaseCount - 1, 0),
                                )
                            }
                        >
                            -
                        </button>

                        <input
                            type="text"
                            value={increaseCount}
                            readOnly
                            className="w-40 bg-zinc-900 border border-zinc-600 rounded px-3 py-2 text-white"
                        />

                        <button
                            className="w-10 h-10 rounded bg-zinc-900 text-white"
                            onClick={() =>
                                setIncreaseCount((increaseCount) => increaseCount + 1)
                            }
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step4dummy;
