import React,{useEffect, useState} from 'react'
import {  deletecatogery, getCatogerys,getspecificvideo, uploadcatogery } from '../Services/AllApi'
import Categories from './Categories'
import { toast } from 'react-toastify'
import VedioCard from './VedioCard'

function Catogerylist(status) {
 
    const [cat,setAllcat]=useState([])
    const [delcat,setdelcat]=useState([])
    const[delstatus,setdelstatus]=useState({})

    useEffect(()=>{
      getcat()
       },[status,delstatus])
    


       const getcat=async()=>{
        const res=await getCatogerys()
        console.log(res.data)
         setAllcat(res.data)
        // console.log(allvideos)
      }


      const handleDrop=async(e,id)=>{
            console.log ("catogery id:"+id)
            const vid=e.dataTransfer.getData("videoid:")
            console.log("dropped video id:"+vid)
         let   category=cat.find(item=>item.id==id)
             console.log(category)
            const res=await getspecificvideo(vid)
            // console.log(res.data)
             category.video.push(res.data)
             console.log(category)
            const rescat=await uploadcatogery(category,id)
            if (rescat.status>=200 && rescat.status<300){
              toast.success(`${res.data.Caption}is added to ${category.name}`)
              getcat()
            }
            else{
              toast.error(`video adding catogery is failed`)
            }


       }

       const handleDragOver=(e)=>{
        e.preventDefault()
        console.log("draging over catogery")
       }










      const handleDelete= async(id)=>{
        console.log(id)
        const res=await deletecatogery(id)
        console.log(res)
        if(res.status>=200 && res.status<300){
         setdelstatus(res)
        
         toast.success("delete vedio successfully!!")
        }
        else{
         toast.error("delete vedio failed!!")
        }
     }
 
      

  return (
    <div className='bg-light  border  border-dark p-5 mt-3'>
     {
      cat?
      cat.map (item =>(
        <div className='bg-success mb-3 p-3 rounded shadow'  onDragOver={e=>{handleDragOver(e)}}  droppable onDrop={e=>{handleDrop(e,item?.id)}} setdelcat={setdelcat} >
          <div>
          <span>{item.name }  </span> 
           <i className="fa-solid fa-trash float-end" onClick={()=>{handleDelete(item.id)}} style={{color:"#ff0000"}}></i>
          </div>
          <div>
            {
              item?.video.map(v=>(
                <VedioCard video={v} />
              ))
            }
          </div>
        </div>

    )):
  <h1>No vidoes</h1>


    }
    </div>
  )
}

export default Catogerylist
