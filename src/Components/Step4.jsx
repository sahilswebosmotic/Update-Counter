import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import CounterControl from "./CounterControl";


const Step4 = () => {
    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(0);
    const [increaseCount, setIncreaseCount] = useState(0);

    useEffect(() => {
        if (!timer || !increaseCount) return;

        const increment = setInterval(() => {
            setCounter((counter) => counter + increaseCount);
        }, timer * 1000);

        return () => clearInterval(increment);
    }, [timer, increaseCount]);

    const handleCountDecrement = ()=>{
        setCounter((counter) => Math.max(counter - 1, 0))
    }

    const handleCountIncrement = ()=>{
        setCounter((counter) => counter + 1);
    }

    const handleTimerDecrement =() =>{
        setTimer((timer)=>Math.max(timer-1,0))
    }
    
    const handleTimerIncrement = ()=>{
        setTimer((timer) => timer+1);
    }

        const handledecreaseCount = ()=>{
        setIncreaseCount((increasecount) => Math.max(increasecount - 1, 0))
    }

    const handleincreaseCount = ()=>{
        setIncreaseCount((increasecount) => increasecount + 1);
    }

    return (
        <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
            <div className=" border border-zinc-600 rounded-xl p-10         bg-zinc-800 shadow-2xl">
                <Counter value={counter}/>

                <div className="space-y-6">
                    <CounterControl
                    text= 'Counter'
                    value={counter}
                    onIncrement={handleCountIncrement}
                    onDecrement = {handleCountDecrement}
                    />

                    <CounterControl
                    text= 'Timer'
                    value = {timer}
                    onDecrement={handleTimerDecrement}
                    onIncrement={handleTimerIncrement}
                    />

                    <CounterControl
                    text= 'Increase count'
                    value={increaseCount}
                    onIncrement={handleincreaseCount}
                    onDecrement = {handledecreaseCount}
                    />
                </div>
            </div>
        </div>
    );
};

export default Step4;
