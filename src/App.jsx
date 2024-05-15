import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Calender from './Components/Landing_Page/Calender'
import Header from './Components/Landing_Page/Header'
import Mian from './Components/Landing_Page/Mian_Component'
// import Search from './Components/Landing_Page/Search'
// import Search from './Components/Landing_Page/Search'

function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
