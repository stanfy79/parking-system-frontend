
import Home from './components/Home';
import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

async function App() {


  const [plete, setLicencePlete] = useState('')
  const [reason, setReason] = useState('')
  const [note, setNote] = useState('')
  const [fileUrl, setFileUrl] = useState('')
  
    let submit = async(e) => {
      e.preventDefault()
    }
    

      try {
        await axios.post("http://localhost:8000", [
          plete,
          reason,
          note,
          fileUrl
        ])
}
catch(e) {
  console.log(e)
}


  return (
    <Home />
  );
}

export default App;
