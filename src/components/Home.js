import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../App.css';
import ErrorBoundary from '../ErrorBoundary';

export default function Home() {
  const [plete, setLicencePlete] = useState('');
  const [reason, setReason] = useState('');
  const [note, setNote] = useState('');
  const [fileUrl, setFileUrl] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000", { plete, reason, note, fileUrl });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const displayName = document.querySelector('.displayName');
    const input = document.querySelector('.fileInput');
    var fileURL = document.querySelector('.fileURL').value;

    input.addEventListener("change", (e) => {
      const fileName = input.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        
        if (input.files.length) {
          let fileName = input.files[0].name;
          displayName.innerHTML = fileName;
        }
        else {
          displayName.innerHTML = "Upload";
        }
        
       let fileLink = reader.result;
       fileURL = fileLink;
       console.log(fileURL);
       alert(fileURL)
      });
      reader.readAsDataURL(fileName);
    });

   
  }, []);

  return (

      <div className="container">
        <form className="form-container" action="POST">
          <div className="section-1">

          <ErrorBoundary fallback="Error boy">
                                <span><label><input type="radio" name="tiketed" value="Tiketed" className="" />Tiketed</label></span>
                                <span><label><input type="radio" name="warned" value="Warned" className="" />Warned</label></span>
                                <span><label><input type="radio" name="towed" value="Towed" className="" />Towed</label></span>
                                </ErrorBoundary>

                            </div>

                            <div className="section-2">

                              <ErrorBoundary fallback="Error boy">
                                <span><input type="text" onChange={(e) =>{setLicencePlete(e.target.value)}} name="licencePlete" placeholder="Licence Plete" /></span>
                                <span><input type="text" onChange={(e) =>{setReason(e.target.value)}} name="reason"  placeholder="Reason" /></span>
                                <span><textarea onChange={(e) =>{setNote(e.target.value)}} name="note" placeholder="Note"></textarea></span>
                                </ErrorBoundary>
                                
                                <span className="upload">

                                <ErrorBoundary fallback="Error boy">
                                <input type="text" onInput={(e) =>{setFileUrl(e.target.value)}} name="fileURL" className="fileURL" value="" hidden />
                                <input type="file" name="attachtment" className="fileInput" />
                                <button type="button" className="formAttachment" >Attachtment</button>
                                </ErrorBoundary>

                                </span>

                                <ErrorBoundary fallback="Error boy">
                                <p className="displayName">Upload</p>
                                </ErrorBoundary>

                                <ErrorBoundary fallback="Error boy">
                                <span><button type="submit" onClick={submit} className="submitButton">Complete</button></span>
                                </ErrorBoundary>
                            </div>
        </form>
      </div>

  );
}
