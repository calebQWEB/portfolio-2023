import './App.css'
import Home from './Pages/Home/Home'
import Navbar from './Component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <div className='App'>
        <Outlet />
      </div>
    </>
  )
}

export default App
