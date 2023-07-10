import { useState } from 'react';
import './App.css';
import LinkResult from './LinkResult';
import InputShort from './InputShort';
function App() {
  const [inputValue, setInputValue] = useState("")

  return (
    <div>
      <InputShort setInputValue={setInputValue}/>
      <LinkResult inputValue={inputValue}/>
    </div>
  )
}


export default App
