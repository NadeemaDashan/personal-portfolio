import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header/>
    <Intro></Intro>
    <About></About>
    </div>

  )
}

export default App
