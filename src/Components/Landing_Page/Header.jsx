import logo from '../../assets/Airbnb.png'
import '../../../src/App.css'
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
function Header() {
    return ( 
    <div className=" h-50 w-100  d-flex align-items-center justify-content-between  p-4">
        <div className='d-inline-flex'>
        <img src={logo} height='40'   width='40' />
        <a href='#' className='text-decoration-none a1 ms-2 fs-3 fw-bolder'>airbnb</a>
        </div>
        
        <div className='d-flex align-items-center ms-5'>
            <a className=' text-decoration-none a2 fs-5'>Stays</a>
            <a className='ms-3 text-decoration-none a2 fs-5'>Expreriences</a>
            <a className='ms-3 text-decoration-none a2 fs-5'>Online Expreriences</a>
        </div>
        <div className='d-flex align-items-center'>
            <a className=' text-decoration-none a2 fs-5'>Airbnb your home</a>
            <a className='ms-4 a2  fs-6'>
                <LanguageIcon fontSize='small'/>
            </a>
            <div id='br' className=' ms-3 d-flex align-items-center border border-2 rounded-pill p-2'>
                <MenuIcon  />       
         <Avatar sx={{width:24, height:24}} className='ms-2'/>
            </div>
        </div>
    </div>
     );
}

export default Header;