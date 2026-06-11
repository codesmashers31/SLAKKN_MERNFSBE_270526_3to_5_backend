import Banner,{Dataadded} from "./components/Banner"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <>
    {/* <div className="bg-amber-400 flex justify-center align-top">
      <h1 className="bg-blue-500 w-50 text-center text-white p-3">This is my first applictaion</h1>
    </div> */}

    <Navbar/>

    <section className="h-screen mt-2">
     <Banner/>
     <Dataadded/>
    </section>
    </>
  )
}

export default App