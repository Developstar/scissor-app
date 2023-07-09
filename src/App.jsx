import { useState } from 'react';
import './App.css';
import LinkResult from './LinkResult';
import InputShortner from './inputShortner';
function App() {
  const [inputValue, setInputValue] = useState("")

  return (
    <div>
      <InputShortner setInputValue={setInputValue}/>
      <LinkResult inputValue={inputValue}/>
    </div>
  )
}

export default App
