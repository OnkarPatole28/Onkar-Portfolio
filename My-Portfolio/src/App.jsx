import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Self from './Components/Self/Self'
import AboutMe from './Components/AboutMe/AboutMe'
import Services from './Components/Services/Services'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Self/>
      <AboutMe/>
      <Services/>
    </div>
  )
}
export default App