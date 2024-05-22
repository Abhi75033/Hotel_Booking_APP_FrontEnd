import Slider from "../Slider/Slider";
import Slider2 from "../Slider/Slider2";
import Slider3 from "../Slider/Slider3";
// import BottomNav from "./2nd_section/BottomNav";
import HotelList from "./2nd_section/HotelList";
import Iocnbar from "./2nd_section/List_Of_Icon";
import Header from "./Header";
import SearchBar from "./Search";

function Mian() {
    return ( 
        <>
        <SearchBar/>
        <hr/>
        <Iocnbar/>
        <hr/>
        <div className="mt-4" >
        <HotelList/>
        </div>
        <div>
        </div>
        </>
     );
}

export default Mian;