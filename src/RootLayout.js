import React from 'react'
import {Outlet} from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
function RootLayout() {
  return (
    <div> 
       <NavigationBar/>
    <div style={{minHeight:"90vh"}} >
      <Outlet/>
    </div>
    <Footer/></div>
  )
}

export default RootLayout