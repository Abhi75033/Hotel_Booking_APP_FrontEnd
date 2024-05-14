
import { useEffect, useState } from "react";
import Calendar from "react-calendar";



export default function Checkin({dates1}) {
  const [date,setDate]=useState(new Date())
  const onChange = date =>{
    setDate(date)
    dates1(`${date.getDate().toString()} 
    ${date.toLocaleString('default',{month:'long'})  } ${date.getFullYear()}`)
  }
  
  console.log(date);
  return (
  <div className="z-3 position-absolute ">
  <Calendar  onChange={onChange} value={date} />
    {date.toString()}
  </div>
  );
}