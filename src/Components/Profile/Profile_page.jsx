import { useState } from 'react';
import ProfileImage from '../../assets/ProfileImage.jpg';
import '../../Components/Profile/profile.css'
import { Edit, History, Hotel, LinkOutlined, Save } from '@mui/icons-material';
import { Link, NavLink, Outlet } from 'react-router-dom';
import "../../../src/App.css";
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';

function ProfilePage() {
    const [image,setImage]=useState(ProfileImage)
    const json = localStorage.getItem("user");
    const user = JSON.parse(json);
    return ( 
    <div className='container'>
        <hr/>
    <div className='w-100 db'>
    <img className="z-0 border border-2 border-success d-block m-auto"
    
                    style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        objectFit: "cover"
                    }}
                    src={user ? user.avatar : image}
                />
<Edit className='d-block hk m-auto'/>
</div>

<div>
<ul className="list-group mt-3 ">
  <li className="list-group-item fw-bolder jk"><span className='text-danger'>Name:</span> {user.name} 
  <Link to='/profile/edit'><Edit className='float-end'/></Link></li>
  <li className="list-group-item fw-bolder jk"><span className='text-danger'>E-mail:</span> {user.email}
  <Link to='/profile/edit'><Edit className='float-end'/></Link></li>
  <li className="list-group-item fw-bolder jk"><span className='text-danger'>Username:</span> {user.Username}
  <Link to='/profile/edit'><Edit className='float-end'/></Link></li>
 
</ul>
</div>

<div className=' m-auto d-lg-flex gap-5 justify-content-center  mt-4 bg-warning p-2 w-50 rounded-5 border-2 border border-secondary'>
<NavLink to={'booking'} className=' text-decoration-none text-secondary fs-5 a2 fw-bold' >
    <div >My Bookings</div></NavLink>
<NavLink to={'history'} className=' text-decoration-none text-secondary fs-5 a2 fw-bold'>
    <div >History</div></NavLink>
{

 user.isAdmin==true && <NavLink className=' text-decoration-none fs-5 text-secondary a2 fw-bold'>
    <div > My Hotels</div></NavLink>
}

</div>
<hr/>
<Outlet/>
    </div> 
    );
}

export default ProfilePage;