import empty from '../../assets/empty.png'
import "../../../src/App.css";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { EmojiEmotions, Explore } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
function Booking() {
    const navigate= useNavigate()
    return (
    <div className='mt-4 p-3 sk'>
    <img src={empty} className='h-50 d-block m-auto w-50'/>
    <h2 className='text-center a3'>No Bookings Found...<FlightTakeoffIcon /></h2>
    <button onClick={()=>navigate('/')} className='mt-2  d-block m-auto btn btn-primary'>Explore Now  <Explore/></button>
    </div>
     );
}

export default Booking;