import Errorimage from '../assets/ErrorImg.jpg'
function Error() {
    return ( 
    <div className='w-100'>
    <img className='d-block m-auto' src={Errorimage} height={400} />
    <h3 className='text-center'>404 Page Not Found....!</h3>
    </div> 
    );
}

export default Error;