
import {Link, Routes, Route} from 'react-router-dom'
import './App.css'
import axios from 'axios';
import Home from './components/Home';
import Show from './components/Show';
import Services from './components/Services';


function App() {
 
  return (
    <div className='pt-[5%] pl-[5%]'>

      
      <nav className='flex justify-center gap-10'>
        <Link to='/'>Home</Link>
        <Link to='/services'>Services</Link>
        <Link to='/show'>Show</Link>
      </nav>
      <hr />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/show' element={<Show/>}/>
       <Route path='/services' element={<Services/>}/>
        
      </Routes>
    
    </div>
  )
}

export default App
