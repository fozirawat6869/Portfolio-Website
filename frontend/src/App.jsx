
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Nav from './components/Nav'



function App() {


  return (
    < >
   <div className='bg-gradient-to-b from-black via-blue-600 to-black min-h-screen'>
      <Nav/>
      <Home/>
      <About/>
   </div>
  
    </>
  )
}

export default App
