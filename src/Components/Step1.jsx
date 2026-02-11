import React from "react";
import { useState } from "react";

const Step1 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className=" border border-zinc-600 rounded-xl p-10 bg-zinc-800 shadow-2xl">
          <h1 className="text-4xl font-bold text-white text-center mb-10">
            Counter: <span className="text-white">{counter}</span>
          </h1>

          <div className="space-y-6">
            <div className="flex items-center justify-center gap-6">
              <label className="text-zinc-300 w-52">Counter:</label>

              <button
                className="w-10 h-10 rounded bg-zinc-900 text-white hover:bg-zinc-600"
                onClick={() =>
                  setCounter((counter) => Math.max(counter - 1, 0))
                }
              >
                -
              </button>

              <input
                type="text"
                value={counter}
                className="w-40 bg-zinc-900 border border-zinc-600 rounded px-3 py-2 text-white focus:outline-none"
              />

              <button
                className="w-10 h-10 rounded bg-zinc-900 text-white hover:bg-zinc-600"
                onClick={() => setCounter(counter + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
