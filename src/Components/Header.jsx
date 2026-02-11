import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="bg-zinc-900 text-white p-4 flex justify-center">
      <h1 className="text-2xl font-bold">Counter App</h1>
    </div>
      <nav className="flex justify-center gap-4 bg-zinc-900  text-white">
        <Link to="/" className=" border border-white hover:bg-zinc-700 p-3 rounded-md">Step1</Link>
        <Link to="/step2" className=" border border-white hover:bg-zinc-700 p-3 rounded-md">Step2</Link> 
        <Link to="/step3" className="border border-white hover:bg-zinc-700 p-3 rounded-md">Step3</Link>
        <Link to="/step4" className=" border border-white hover:bg-zinc-700 p-3 rounded-md">Step4</Link>
      </nav>
    </>
  )
}

export default Header