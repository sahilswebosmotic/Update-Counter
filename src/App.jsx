import './App.css'
import Step1 from './Components/Step1'
import Step2 from './Components/Step2'
import Step3 from './Components/Step3'
import Step4 from './Components/Step4'
import Header from './Components/Header'
import { Routes,Route, BrowserRouter,Link } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
      </Routes>
      </BrowserRouter>
    </>
  )}

export default App
