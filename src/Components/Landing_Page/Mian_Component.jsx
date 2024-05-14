import Slider from "../Slider/Slider";
import Slider2 from "../Slider/Slider2";
import Slider3 from "../Slider/Slider3";
import Header from "./Header";
import SearchBar from "./Search";

function Mian() {
    return ( 
        <>
        <Header/>
        <SearchBar/>
        <hr/>
        <div className="row z-0">
        <diV className='col'>
        <Slider/>
        </diV>
        <diV className='col'>
        <Slider2/>
        </diV>
        <diV className='col'>
       <Slider3/>
        </diV>
        
        </div>
        </>
     );
}

export default Mian;