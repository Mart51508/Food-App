import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import Navbar from '../Navbar/Navbar'

export default function MasterLayout({LoginData}) {
  return (
    <div>
      <div className="container-fluid">
        <div className="d-flex">
          <div >
            <SideBar/>
          </div>
          <div className='w-100'>
            <Navbar LoginData ={LoginData}/>
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  )
}
