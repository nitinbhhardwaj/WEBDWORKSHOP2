import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Greeting from './components/Greeting'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <h1>Student Information</h1>
    <Greeting name={'Nitin Bhardwaj'} Course={'Computer Science'} Marks={'95'}
      name1={'Anita Verma'} Course1={'Information Technology'} Marks1={'90'}
      name2={'Rohit Kumar'} Course2={'Mechanical Engineering'
    } Marks2={'78'}/>

    </>
  )
}

export default App
