import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../App.css';


export default async function Home() {

  
useEffect(() => {

  const displayName = document.querySelector('.displayName');
  const input = document.querySelector('.fileInput');
  const fileURL = document.querySelector('.fileURL');
  
  
  input.addEventListener("change", (e)=>{
      const fileName = input.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
          console.log(reader.result);
          fileURL.value = reader.result;
      });
  
      reader.readAsDataURL(fileName);
      displayName.innerText = fileName.name;
  });

}, []);

const [plete, setLicencePlete] = useState([''])
  const [reason, setReason] = useState([''])
  const [note, setNote] = useState([''])
  const [fileUrl, setFileUrl] = useState([''])
  
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
    <div className="container">
                        <form className="form-container" action="POST">
                            <div className="section-1">
                                <span><label><input type="radio" name="tiketed" value="Tiketed" className="" />Tiketed</label></span>
                                <span><label><input type="radio" name="warned" value="Warned" className="" />Warned</label></span>
                                <span><label><input type="radio" name="towed" value="Towed" className="" />Towed</label></span>
                            </div>

                            <div className="section-2">
                                <span><input type="text" onChange={(e) =>{setLicencePlete(e.target.value)}} name="licencePlete" placeholder="Licence Plete" /></span>
                                <span><input type="text" onChange={(e) =>{setReason(e.target.value)}} name="reason"  placeholder="Reason" /></span>
                                <span><textarea onChange={(e) =>{setNote(e.target.value)}} name="note" placeholder="Note"></textarea></span>
                           l     <span className="upload">
                                <input type="text" onChange={(e) =>{setFileUrl(e.target.value)}} name="fileURL" className="fileURL" value="" hidden />
                                <input type="file" name="attachtment" className="fileInput" />
                                <button type="button" className="formAttachment" >Attachtment</button>
                                </span>
                                <p className="displayName">Upload</p>
                                <span><button type="submit" onclick={submit} className="submitButton">Complete</button></span>
                            </div>
                        </form>
                    </div>
  );
}