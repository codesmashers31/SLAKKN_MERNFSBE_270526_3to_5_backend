// // import { useEffect, useState } from "react"

import { useEffect, useState } from "react"




// // const App = () => {
// // const [producsData,SetProductData] = useState([])
// // const [search,setSerach] = useState("")
// // const [catData,setCatData] = useState([])
// // const [selectData,setSelectData] = useState("")
// // const getFetch = async ()=>{
// //   try {

// //     const takeData = await fetch("https://dummyjson.com/products")
// //     const paringData = await  takeData.json()
// //     SetProductData(paringData.products)

// //     const catData = paringData.products.map((e)=>e.category)
// //     const dub = [...new Set(catData)]
    
// //    setCatData(dub)


// //   } catch (error) {
     
// //     console.log('Error',error);
    
// //   }
// // }


// // useEffect(()=>{
// //  getFetch()
// // },[])
 
// // let products = [...producsData] 

// // const handleChange = (e)=>{

// // setSerach(e.target.value)

// // }

// // const handleSelect = (e)=>{

// //   setSelectData(e.target.value)

// // }

// // if(search){
// //   products = products.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase()))
// // }

// // if(selectData){
// //   products = products.filter((e)=>e.category===selectData)
// // }

// //   return (
// //     <div>

// //     <input type="text"  placeholder="Serach" onChange={handleChange} />
    
// //     <select onChange={handleSelect}>
// //       <option value="">All</option>
// //       {
// //       catData.map((e,i)=>(
// //  <option value={e} key={i+1}>{e}</option>
// //       ))
       
// //       }
// //     </select>
    
// //       {products.map((e)=>(

// //       <div key={e.id}>
// //         <p>Title:{e.title}</p>
// //         <p>Category:{e.category}</p>
// //         <p>Price:{e.price}</p>
// //       </div>


// //       ))}
    
// //     </div>
// //   )
// // }

// // export default App





// import axios from "axios";
// import { useEffect, useState } from "react";

// const App = () => {

//   const [formData, setFormData] = useState({
//     userName: "",
//     userMobile: "",
//     userEmail: ""
//   });

//   const [saveData, setSaveData] = useState([]);
//   const [editId, setEditID] = useState(null);
//   const [search, setSearch] = useState("");

//   const API = "http://localhost:8080/api/users";

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // GET ALL USERS
//   const getData = async () => {
//     try {
//       const response = await axios.get(API);
//       setSaveData(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   // ADD USER
//   const handleAdd = async (e) => {
//     e.preventDefault();

//     try {

//       await axios.post(API, formData);

//       alert("Successfully Added");

//       setFormData({
//         userName: "",
//         userMobile: "",
//         userEmail: ""
//       });

//       getData();

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // EDIT USER
//   const handleEdit = (user) => {

//     setFormData({
//       userName: user.userName,
//       userMobile: user.userMobile,
//       userEmail: user.userEmail
//     });

//     setEditID(user.id);
//   };

//   // UPDATE USER
//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     try {

//       await axios.put(`${API}/${editId}`, formData);

//       alert("Successfully Updated");

//       setEditID(null);

//       setFormData({
//         userName: "",
//         userMobile: "",
//         userEmail: ""
//       });

//       getData();

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // DELETE USER
//   const handleDelete = async (id) => {

//     try {

//       await axios.delete(`${API}/${id}`);

//       alert("Successfully Deleted");

//       getData();

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // SEARCH
//   let filteredData = [...saveData];

//   if (search) {
//     filteredData = filteredData.filter((user) =>
//       user.userName
//         .toLowerCase()
//         .includes(search.toLowerCase())
//     );
//   }

//   return (
//     <div style={{ padding: "20px" }}>

//       <h1>User Management</h1>

//       <form>

//         <input
//           type="text"
//           name="userName"
//           placeholder="User Name"
//           value={formData.userName}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="userMobile"
//           placeholder="Mobile Number"
//           value={formData.userMobile}
//           onChange={handleChange}
//         />

//         <input
//           type="email"
//           name="userEmail"
//           placeholder="Email"
//           value={formData.userEmail}
//           onChange={handleChange}
//         />

//         {
//           editId === null
//             ? <button onClick={handleAdd}>Add</button>
//             : <button onClick={handleUpdate}>Update</button>
//         }

//       </form>

//       <br />

//       <input
//         type="text"
//         placeholder="Search User"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <br /><br />

//       <table border="1" cellPadding="10">

//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>User Name</th>
//             <th>Mobile</th>
//             <th>Email</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>

//           {
//             filteredData.map((user, index) => (
//               <tr key={user.id}>
//                 <td>{index + 1}</td>
//                 <td>{user.userName}</td>
//                 <td>{user.userMobile}</td>
//                 <td>{user.userEmail}</td>
//                 <td>

//                   <button
//                     onClick={() => handleEdit(user)}
//                   >
//                     Edit
//                   </button>

//                   {" "}

//                   <button
//                     onClick={() => handleDelete(user.id)}
//                   >
//                     Delete
//                   </button>

//                 </td>
//               </tr>
//             ))
//           }

//         </tbody>

//       </table>

//     </div>
//   );
// };

// export default App;




const App = () => {


 const [title,settile] = useState("")


 const getDats = async ()=>{

try {


  const response = await fetch("http://localhost:5000/api/users/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "react1",
    email: "react@gmail.com"
  })
});

const data = await response.json();
//console.log(data);

settile(data.msg)
  
  
} catch (error) {

  console.log('error',error.data);
  
  
}


 }

// useEffect(()=>{
//   getDats()
// },[])


  return (
   <>
   <h1>{title}</h1>

   <button onClick={getDats}>Fetch The api</button>
   </>
  )
}

export default App