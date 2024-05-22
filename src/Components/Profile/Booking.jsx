import empty from '../../assets/empty2.jpg'
import "../../../src/App.css";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { Close, EmojiEmotions, Explore } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
function Booking() {
    const navigate= useNavigate()
    return (
    <div className='mt-4 p-3 '>
        <button onClick={()=>navigate('/profile')} className='float-end kk  rounded-4'><Close/></button>
    <img src={empty} className='h-50 d-block m-auto w-50'/>
    <h2 className='text-center a3'>No Bookings Found...<FlightTakeoffIcon /></h2>
    <button onClick={()=>navigate('/')} className='mt-2  d-block m-auto btn btn-primary'>Explore Now  <Explore/></button>
    </div>
     );
}

export default Booking;