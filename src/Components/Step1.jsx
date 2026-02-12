import React,{ useState } from "react";
import Counter from "./Counter";
import CounterControl from "./CounterControl";

const Step1 = () => {
  const [counter, setCounter] = useState(0);

  function handleIncrement (){
    setCounter((counter)=>counter+1);
  }

  function handleDecrement(){
    setCounter((counter)=>counter-1);
  }

  return (
    <>
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className=" border border-zinc-600 rounded-xl p-10 bg-zinc-800 shadow-2xl">
          <Counter value ={counter}/>
          <div className="space-y-6">
            <CounterControl
            text='Counter'
            value={counter} 
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
