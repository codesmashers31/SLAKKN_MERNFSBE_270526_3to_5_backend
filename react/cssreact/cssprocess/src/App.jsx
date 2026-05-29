import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import GridProcess from './components/GridProcess'

const App = () => {
  return (
    <>
    <div className='bg-black text-white flex p-4 justify-between'>
      <div className='mx-15'>
        Logo
      </div>
      <div className='mx-15 flex gap-20'>
        <Link to="/">Home</Link>
        <Link to="/grid">Grid</Link>
        <Link>Z-index</Link>
      </div>
    </div>
     
     <Routes>
      <Route path='/' element={<Home/>} />
       <Route path='/grid' element={<GridProcess/>} />
     </Routes>
    </>
  )
}

export default App
