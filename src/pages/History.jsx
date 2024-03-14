import React ,{useEffect, useState} from 'react'
import { deletehistory, gethistory } from '../Services/AllApi'


function History() {
const[his,sethis]=useState([])
const[delhis,setdelhis]=useState([])

  useEffect(()=>{
    getdata()
  },[delhis])

const getdata=async()=>{
  const res= await gethistory()
  console.log(res.data)
  sethis(res.data)
}

const handleDelete= async(id)=>{
  console.log(id)
  const res=await deletehistory(id)
  console.log(res)
  if(res.status>=200 && res.status<300){
   setdelhis(res)
  
   toast.success("delete vedio successfully!!")
  }
  else{
   toast.error("delete vedio failed!!")
  }
}


  return (
    <>
    <div className='p-5'>
       <table className='table table-border'>
  
        <tr>
         
          <th>Caption</th>
          <th>url</th>
          <th>date & Time</th>
          <th></th>
        </tr>
      
      {

        his?
        his.map(item=>(
       <tr>
       <td>{item.Caption}</td>
       <td>{item.url}</td>
       <td>{item.datetime}</td>
       <td>

       <i className="fa-solid fa-trash" onClick={()=>{handleDelete(item.id)}} style={{color: "#0058f0"}}></i>
       </td>
     </tr>
   
       
     
      )):
      
      <tr>
           <h1>no history</h1>
      </tr>
   
    }
   

</table>
</div>
</>
  )}

export default History
