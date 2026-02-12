import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import CounterControl from "./CounterControl";


const Step3 = () => {
    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        if (!timer) return;
        const increment = setInterval(() => {
            setCounter((counter) => counter + 1);
        }, timer * 1000);

        return () => clearInterval(increment);
    }, [timer]);

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

    return (
        <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
            <div className=" border border-zinc-600 rounded-xl p-10 bg-zinc-800 shadow-2xl">
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
                </div>
            </div>
        </div>
    );
};

export default Step3;
