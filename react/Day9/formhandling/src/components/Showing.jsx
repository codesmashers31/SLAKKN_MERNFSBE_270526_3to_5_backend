

const Showing = ({datas,edit,delete_data}) => {

  

  return (
    <div className="bg-black text-white p-2 h-100 flex justify-center items-center gap-4">
        {datas.map((e,i)=>(
            <div className="bg-white p-2 text-black w-50 flex flex-col gap-2" key={i+1} > 
            
                <div>
                    <h2>{e.userName}</h2>
                <p>{e.userAge}</p>
                <p>{e.userCity}</p>
                </div>

                <div className="flex gap-3">
                <button className="bg-black text-white text-center p-1 rounded w-25" onClick={()=>edit(e,i)}>Edit</button>
                <button className="bg-red-600 text-white text-center p-1 rounded w-25" onClick={()=>delete_data(i)}>Delete</button>
                </div>
           
        </div>
        ))}
    </div>
  )
}

export default Showing