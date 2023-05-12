import './App.css';
import Rate from './components/Rate';
import Rezalt from './components/Rezalt';
import { useState } from 'react';


function App() {
  const [submit,setSubmit] = useState(false);
  const [rate, setRate] = useState();

  return (
    <div className="App">
      {submit ? <Rezalt rate={rate}/> : <Rate setSubmit={setSubmit} rate={rate} setRate={setRate}/>}
      
      
      
    </div>
  );
}

export default App;
