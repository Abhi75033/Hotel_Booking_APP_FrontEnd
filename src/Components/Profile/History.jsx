import empty from '../../assets/empty2.jpg'
import "../../../src/App.css";
import { Close, Explore } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function History() {
    const navigate = useNavigate()
    return (
    <div className='mt-4 p-3 sk1'>
          <button onClick={()=>navigate('/profile')} className='float-end kk  rounded-4'><Close/></button>
    <img src={empty} className='h-50 d-block m-auto w-50'/>
    <h2 className='text-center'>OOPs...Nothing to show Anything</h2>
    <button onClick={()=>navigate('/')} className='mt-2  d-block m-auto btn btn-primary'>Explore Now  <Explore/></button>
    </div>
     );
}

export default History;