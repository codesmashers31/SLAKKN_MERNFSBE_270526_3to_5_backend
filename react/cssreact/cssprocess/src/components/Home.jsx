
import { useNavigate } from 'react-router-dom'
import images from '../assets/img/1.png'
const Home = () => {

    const navigate = useNavigate()

 const handleChange = ()=>{

navigate('/grid')

 }


  return (
    <>
    <div className='box'>

      <div className='box-one'>
          <span className='badge'>Best Offer</span>
          <img src={images} className='rounded-2xl w-100' alt="Logo" />
          <p>React Process</p>
          <p>Rs 9999 /-</p>
          <button onClick={handleChange} className='bg-black hover:bg-blue-500 hover:text-black p-2 text-white rounded w-50'>Buy Now</button>
      </div>
      {/* <div className='box-one'>
          <img src={images} className='rounded-2xl' alt="Logo" />
          <p>React Process</p>
          <p>Rs 9999 /-</p>
          <button className='bg-black p-2 text-white rounded w-50'>Buy Now</button>
      </div>
      <div className='box-one'>
          <img src={images} className='rounded-2xl' alt="Logo" />
          <p>React Process</p>
          <p>Rs 9999 /-</p>
          <button className='bg-black p-2 text-white rounded w-50'>Buy Now</button>
      </div>
      <div className='box-one'>
          <img src={images} className='rounded-2xl' alt="Logo" />
          <p>React Process</p>
          <p>Rs 9999 /-</p>
          <button className='bg-black p-2 text-white rounded w-50'>Buy Now</button>
      </div> */}
      

    </div>


    </>
  )
}

export default Home
