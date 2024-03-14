import commonApi from './CommonApi'

import { BASE_URL } from "./base_url"

export const uploadVideo=async(data)=>{
    return await commonApi("POST",`${BASE_URL}/allvideoes`,data)
}


export const getVideos=async()=>{
  return await commonApi("GET",`${BASE_URL}/allvideoes`,"")
}

export const  deleteVideo= async(id)=>{
  return await commonApi("DELETE",`${BASE_URL}/allvideoes/${id}`,{})
}

 export const addcatogery=async(data)=>{
  return await commonApi("POST",`${BASE_URL}/categories`,data)
 }

export const getCatogerys=async()=>{
  return await commonApi("GET",`${BASE_URL}/categories`,"")
}

export const deletecatogery=async(id)=>{
  return await commonApi("DELETE",`${BASE_URL}/categories/${id}`,{})
}
export const addhistory=async(data)=>{
  return await commonApi("POST",`${BASE_URL}/history`,data)
}
export const gethistory=async()=>{
  return await commonApi("GET",`${BASE_URL}/history`)
}
export const deletehistory=async(id)=>{
  return await commonApi("DELETE",`${BASE_URL}/history/${id}`,{})
}
export const getspecificvideo=async(id)=>{
  return await commonApi("GET",`${BASE_URL}/allvideoes/${id}`,"")
}
export const uploadcatogery=async(data,id)=>{
  return await commonApi("PUT",`${BASE_URL}/categories/${id}`,data)
}

