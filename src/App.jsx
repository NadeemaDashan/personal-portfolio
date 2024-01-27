import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About'
import Work from './components/Work'
import Cv from './components/Cv'
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header/>
    <Intro></Intro>
    <About></About>
    <Work></Work>
    <Cv></Cv>
    <Footer></Footer>
    </div>

  )
}

export default App
