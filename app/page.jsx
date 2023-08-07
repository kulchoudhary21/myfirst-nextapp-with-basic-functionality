'use client'
import React, { useState } from "react";
function Home() {
  const [url,setUrl]=useState()
  function inputHandler(e){
    setUrl(e.target.value)
  }
  function dataShow(){
    console.log(url)
    window.open(url,'_blank')
  }
  return (
    <div>
      <input type="text" className="input" placeholder="enter url" onChange={inputHandler}></input>
      <button onClick={()=>dataShow()}>Search</button>
    </div>
  );
}

export default Home;
