import React, {useState,useEffect} from 'react'

function Header() {
    const [currentDate, setCurrentDate] = useState("");

    // Update the date on component mount
    useEffect(() => {
      const today = new Date();
      const options = { weekday: 'long', month: 'long', year: 'numeric', day: 'numeric' };
      setCurrentDate(today.toLocaleDateString(undefined, options));  // Format: "Tuesday, October 23, 2024"
    }, []);
  return (<>
    <div className="header">
        <h2>DREWS PERSONAL TO-DO LIST APP</h2>
        <p>A simple web app designed to keep up with my daily activities</p>
    </div>
    <div>
        <p>Date is {currentDate}</p>    
    </div></>
  )
}

export default Header