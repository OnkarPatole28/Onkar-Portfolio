import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Self from './Components/Self/Self'
import AboutMe from './Components/AboutMe/AboutMe'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Self/>
      <AboutMe/>
      <Services/>
      <MyWork/>
    </div>
  )
}
export default App