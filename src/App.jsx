import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Slogan from './components/Slogan/Slogan'
import Content from './components/Contents/Content'


const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Slogan/>
      <br />
      <br />
       <Content/> 
       <br />
       <br />
       <br />
   

    </div>
  )
}

export default App

