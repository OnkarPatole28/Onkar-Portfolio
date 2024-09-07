import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Self from './Components/Self/Self'
import AboutMe from './Components/AboutMe/AboutMe'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Self/>
      <AboutMe/>
      <Services/>
      <MyWork/>
      <Contact/>
    </div>
  )
}
export default App