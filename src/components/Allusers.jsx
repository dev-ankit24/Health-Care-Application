import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { AllData } from '../AllData'
import { Link } from 'react-router-dom'



export default function Allusers() {
 const [data, setData]= useState([])
 const [name,setName]= useState("")
 const [dis,setDis]= useState("")
 const [price,setPrice]= useState(0)
 const [id,setId]= useState(0)
 const [isupdate,setIsupdate]=useState(false)

 const handleDelete =(id)=>{
  if(id >0){
    if(window.confirm("Are you sure Delete This Item")){
      const dt =data.filter((item)=>item.id !== id)
      setData(dt)
    }
  }
 }

//  Edit user record
const handleEdit =(id)=>{
 const dt= data.filter((item)=>item.id === id)
 if(dt!== undefined){
  setIsupdate(true)
  setId(id)
  setName(dt[0].name)
  setDis(dt[0].dis)
  setPrice(dt[0].price)
 }
}
//  clear Handler
const handleClear=()=>{
  setId(0)
  setName("")
  setDis("")
  setPrice("")
}

// update Handler
const handleUpdate=()=>{
const index= data.map((item )=>{
  return item.id
}).indexOf(id)

const dt= [...data]
dt[index].name =name
dt[index].price =price
dt[index].dis =dis

setData(dt)
handleClear()
setIsupdate(false)
}

//  save handler
const handleSave =(e)=>{
  e.preventDefault();
  const dt = [...data]
  const newData = {
    id:AllData.length +1,
    name:name,
    dis:dis,
    price:price
  }
  dt.push(newData)
  setData(dt)
}

 useEffect(()=>{
  setData(AllData)
 },[])
  return (
    <>
    <Navbar/>
  
    <h5 className="bg-primary text-center mt-4 p-2 text-light">
            All  Users Data Table
            </h5>
    <table className=' table table-hover '>
      <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Price</th>
        <th>Description</th>
        <th>Action</th>
        
      </thead>
      <tbody>
        {
          data.map((item,index)=>{
            return(
              <tr key={index}>
                <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.dis}</td>
              <td> 
                
                <button className='btn btn-primary' onClick={()=>handleEdit(item.id)}>Edit</button> &nbsp;
           
             
              <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}>Delete</button>
              </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>

    {/*  edit  update section */}

{
  isupdate ===false ?
  <h4 className="bg-primary text-center mt-4 p-2 text-light">
  Crete Users Data 
  </h4>
  :
  <h4 className="bg-primary text-center mt-4 p-2 text-light">
  Update Users Data 
  </h4>
}

    <div style={{display:"flex", justifyContent:"center"  , marginTop:"10px", marginBottom:"10px"}}>
      <div>
        <label >Name :</label>
        <input type="text" placeholder='enter full name' onChange={(e)=>setName(e.target.value)} value={name} />
      </div>
      <div>
        <label >Price :</label>
        <input type="number" placeholder='enter price' onChange={(e)=>setPrice(e.target.value)} value={price} />
      </div>
      <div>
        <label >Description :</label>
        <input type="text" placeholder='enter Description' onChange={(e)=>setDis(e.target.value)} value={dis} />
      </div>
      <div>
        {
          isupdate === false ?
      <button className='btn btn-primary mr-10' onClick={(e)=>handleSave(e)}>Save</button>:
          
      <button className='btn btn-primary mr-10' onClick={()=>handleUpdate()}>Update</button>
        }
      
           
             
           <button className='btn btn-danger' onClick={()=>handleClear()}>Clear</button>
      </div>

    </div>

    </>
  )
}
