import SearchIcon from "@mui/icons-material/Search";
import '../../../src/App.css'
// import Calender from './Calender';
import { useEffect, useState } from "react";
import Checkin from "./Calender";
import CheckOut from "./CheckOut";
import { ToastContainer, toast } from "react-toastify";
function Search() {
  const [date, setDate] = useState(false);
  const [date1, setDate1] = useState(false);
  const [checkin, setCheckin] = useState("Checkin");
  const [checkOut, setChecOut] = useState("CheckOut");
  const handler = () => {
    if (date) {
      setDate(false);
    } else setDate(true);
  };
  const handler1 = () => {
    if (date1) {
      setDate1(false);
    } else setDate1(true);
  };

  const disable = () => {
    if (date == true) setDate1(false);
  };
  const disable1 = () => {
    if (date1 == true) setDate(false);
  };

  const dates1 = (data) => {
    setCheckin(data);
    setDate(false);
  };
  const dates2 = (data) => {
    // if (dates1>dates2) {
    //    return toast.error('Checkout date can not set after checkin')
    //  }
    setChecOut(data);
    setDate1(false);
  };

  useEffect(() => {
    disable();
    disable1();
  });

  return (
    <div>
      <div className="d-flex  justify-content-center w-75 me-auto md  mt-2 ms-auto">
        <input
          type="text"
          placeholder="Where: Search Destination"
          className=" in-1 bg-black p-3 text-light  rounded-start-pill w-25"
        />
        <button onClick={handler} className="w-25  btn-c">
          {checkin}
        </button>
        <button onClick={handler1} className="w-25  btn-c">
          {checkOut}{" "}
        </button>

        <div className="d-flex bg-black align-items-center border-dark  border border-2 p-2 rounded-end-pill">
          <div className="d-flex align-items-center cc1  border-danger ms-4 border bg-danger  border-4 p-1 rounded-circle ">
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className="justify-content-center ">
        <div className="me-6 d-flex justify-content-center" >
          {date && <Checkin dates1={dates1} />}
        </div>
        <div className=" z-2  d-flex justify-content-center sd  ">
          {date1 && <CheckOut dates2={dates2} />}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Search;
