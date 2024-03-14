import React,{useEffect, useState} from 'react'
import VedioCard from './VedioCard'
import {getVideos} from '../Services/AllApi'



function Vedioese({addstatus}) {
  const [delstatus,setdelstatus]=useState([])
   const [allVideos,setAllVideos]=useState([])

   useEffect(()=>{
    getData()
   }, [addstatus,delstatus])



const getData=async()=>{
  const res=await getVideos()
  // console.log(res.data)
  setAllVideos(res.data)
  // console.log(allvideos)
}



  return (
    <div className='bg-light  border border-3 border-dark p-5 row'>
    {
      allVideos?
      allVideos.map (item =>(
      <VedioCard video={item} setdelstatus={setdelstatus}/>

    )):
  <h1>No vidoes</h1>


    }
      
    </div>
  )
}

export default Vedioese
