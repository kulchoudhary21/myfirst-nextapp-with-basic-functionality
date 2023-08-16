// "use client";
// import React, { useState } from "react";
// // import Buttonn from "react-bootstrap/Button";
// function Home() {
//   const [url, setUrl] = useState();
//   function inputHandler(e) {
//     setUrl(e.target.value);
//   }
//   function dataShow() {
//     console.log(url);
//     window.open(url, "_blank");
//   }
//   return (
//     <div>
//       <input
//         style={{
//           width: "30%",
//           margin: "10px",
//           padding: "7px",
//           border: "solid 1px blue",
//           borderRadius: "5px",
//         }}
//         type="text"
//         className="input"
//         placeholder="enter url"
//         onChange={inputHandler}
//       ></input>
//       {/* <Buttonn variant="primary">Primary</Buttonn>{" "} */}
//       <button
//         style={{
//           padding: "5px",
//           border: "solid 2px skyblue",
//           borderRadius: "5px",
//           background: "skyblue",
//           cursor:"pointer"
//         }}
//         onClick={() => dataShow()}
//       >
//         Search
//       </button>
//     </div>
//   );
// }

// export default Home;




'use client'
import React,{useEffect,useState} from 'react'

export default function Home() {
  const [userAgentData,setUserAgentData] = useState('');
  useEffect(() => {
    const userAgent = navigator.userAgent;
    console.log('User Agent:', userAgent);
    setUserAgentData(userAgent)
  }, []);

  const checkSystem =()=>{
    userAgentData
  if( userAgentData.match( /iPad/i ) || userAgentData.match( /iPhone/i ) || userAgentData.match( /iPod/i ) )
  {
     console.log("IOS")
  }else if(userAgentData.match( /Android/i )){
    console.log('Android')
  }else{
    console.log('Web')
  }
  }
  return (
    <div>
      Only for testing {checkSystem()}
    </div>
  )
}

// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// function DateTimePickerComponent() {
//   const [selectedDateTime, setSelectedDateTime] = useState(null);

//   const handleDateTimeChange = datetime => {
//     setSelectedDateTime(datetime);
//   };

//   return (
//     <div>
//       <h2>Date and Time Picker Component</h2>
//       <DatePicker
//         selected={selectedDateTime}
//         onChange={handleDateTimeChange}
//         dateFormat="MM/dd/yyyy h:mm aa"
//         showTimeSelect
//         timeIntervals={15}
//         timeCaption="Time"
//         placeholderText="Select date and time"
//         onCalendarClose={()=>{console.log()}}
//       />
//       {selectedDateTime && <p>Selected Date and Time: {selectedDateTime.toString()}</p>}
//     </div>
//   );
// }

// export default DateTimePickerComponent;
