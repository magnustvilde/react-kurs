import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Header from './Header'
import Person from './Person'

function App() {

  const [globalCount, setGlobalCount] = useState(0)

  const persons = ['Ola', 'Morten', 'Daniel']
  const numbers = [657, 234634, 12635]

  const handleGlobal = () => setGlobalCount(globalCount => globalCount+1) 
  return (
    <div className="App">
      <Header />
      <Person number={numbers[0]} person={persons[0]} />
      <Person number={numbers[1]} person={persons[1]} />
      <Person number={numbers[2]} person={persons[2]} />
      <Counter handleGlobal={handleGlobal} globalCount={globalCount}/>
      <Counter handleGlobal={handleGlobal} globalCount={globalCount}/>
      <Counter handleGlobal={handleGlobal} globalCount={globalCount}/>
    </div>
  )
}

export default App