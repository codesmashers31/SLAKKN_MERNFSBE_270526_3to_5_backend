

const Home = () => {

    const year = 2022

    const StringData = "Cerating the Process"

    const isActive = true

    const ispending = false
    
    const datas = null

  return (
  <>
    <div className="bg-green-500 flex-col gap-5 flex p-5 h-100 justify-center items-center">
        <h1>Home</h1>
        <p className="text-white text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio harum omnis, praesentium perspiciatis fuga quis ducimus exercitationem? Velit illo minima tenetur harum modi cum ducimus tempora praesentium magnam. Doloribus, harum?
        Aliquam doloribus <span className="bg-amber-400">{StringData}</span> laborum {year} dignissimos  {year} necessitatibus obcaecati placeat unde magni id reprehenderit eaque iste nemo, dolor eius sapiente modi quo pariatur nulla non optio. Error quis sunt nemo sapiente enim amet?
        Excepturi alias <span className="bg-amber-400">{StringData}</span> omnis quis tempore rerum  {year} pariatur, soluta laboriosam quae eveniet, amet fugiat? Exercitationem cumque ducimus suscipit, deserunt, sunt veniam dolore rem voluptatibus sed, dolorum impedit perferendis praesentium inventore accusamus.</p>
    </div>


   {isActive?<div className="bg-black text-white p-2">
        <h1>this is True</h1>
    </div>:<div className="bg-white text-black p-2">
        this is False
    </div>}


    {ispending && <div className="bg-black text-white p-2">
        <h1>this is True</h1>
    </div>}

    {datas ?? <h1>This is Pending</h1>}
   
  </>
  )
}

export default Home