import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
// import Calender from './Components/Landing_Page/Calender'
import Header from './Components/Landing_Page/Header'
// import Mian from './Components/Landing_Page/Mian_Component'
import ContextProvider from './Components/Utils/ContextProvider'
// import Search from './Components/Landing_Page/Search'
// import Search from './Components/Landing_Page/Search'


function App() {
  return (
 <ContextProvider>
     <Header/>
      <Outlet/>
      <Footer/>
    </ContextProvider>

  
  )
}

export default App
