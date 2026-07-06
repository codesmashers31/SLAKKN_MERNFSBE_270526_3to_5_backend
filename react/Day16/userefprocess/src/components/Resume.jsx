import React, { useRef } from 'react'

const Resume = () => {
 
    const nameRef = useRef("")
    const yearRef = useRef("")
    const emailRef = useRef("")
    const educationRef = useRef("")


    const displayRef = useRef()
    const yearDisRef = useRef()
    const emailDisRef = useRef()
    const eduDisRef = useRef()

    const handleChange = ()=>{

        const datas =  {
            name:nameRef.current.value,
            year:yearRef.current.value,
            email:emailRef.current.value,
            edu:educationRef.current.value,
        }
        
        
        
        displayRef.current.innerText = datas.name

        
        
        yearDisRef.current.innerHTML = datas.year
        emailDisRef.current.innerHTML = datas.email
        eduDisRef.current.innerHTML = datas.edu
    }

  return (
    <>
   <div className='flex p-10'>
     <div className='bg-gray-300 p-10 flex flex-col gap-10 '>
        <input type="text" className='border' placeholder='Enter the Name' ref={nameRef} onChange={handleChange}  />
        <input type="text" className='border' placeholder='Enter the year' ref={yearRef} onChange={handleChange}  /> 

        <input type="text" className='border' placeholder='Enter the Email' ref={emailRef} onChange={handleChange}  />

        <input type="text" className='border' placeholder='Enter the Edu' ref={educationRef} onChange={handleChange}  />

    </div>


    <div className='bg-amber-200 p-5 h-screen w-400'>
        <h1 ref={displayRef}></h1>
        <p ref={yearDisRef}></p>
        <p ref={emailDisRef}></p>
        <p ref={eduDisRef}></p>
    </div>
   </div>
    </>
  )
}

export default Resume