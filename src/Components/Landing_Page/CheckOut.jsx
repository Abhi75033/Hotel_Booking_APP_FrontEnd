// import { DatePicker } from "@mui/x-date-pickers";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";

export default function CheckOut({dates2}) {


  const [date,setDate]=useState(new Date())
  const onChange = date =>{
    setDate(date)
    dates2(`${date.getDate().toString()} 
    ${date.toLocaleString('default',{month:'long'})  } ${date.getFullYear()}`)
  }
  
  console.log()

  return (
  <div className="z-3 position-absolute">
  <Calendar  onChange={onChange} value={date} />
    {date.toString()}
  </div>
  );
}