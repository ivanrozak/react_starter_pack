import React, { useState } from 'react';
import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getTest } from './redux/auth/action'

function App() {
  const dispatch = useDispatch()
  const [sample, setSample] = useState('')
  const dataTest = useSelector((state) => state.auth)
  const test = (data) => {
    console.log(data)
    dispatch(getTest(data))
  }
  const handleChange = (data) => {
    setSample(data.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {JSON.stringify(dataTest)}
        </p>
        <input className='text-black border border-black' value={sample} onChange={handleChange} />
        <button onClick={() => test(sample)}>test</button>
        <p className='text-3xl font-extrabold'>Starter template React with tailwind, redux and axios</p>
      </header>
    </div>
  );
}

export default App;
