import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'react-toastify/dist/ReactToastify.css';


import { uploadVideo } from '../Services/AllApi';
import { toast } from 'react-toastify';
function Addvideos({setaddstatus}) {
    const [show, setShow] = useState(false);
    const [video,setvideo]=useState({
      Caption:'',url:'',Image:''
    })

const getdata=(e)=>{
  const {name,value}=e.target
  console.log(name,value)

  if(name==="Caption"){
    setvideo({...video,Caption:value})
  }
  if(name==="url"){
    let furl= value
    furl = furl.split("v=")
    // console.log(furl)
    let vurl=`https://www.youtube.com/embed/${furl[1]}?si=DAqnnSZS7PNdugKB&autoplay=1`
    console.log(vurl)

    setvideo({...video,url:vurl})
  }
  if(name==="Image"){
    setvideo({...video,Image:value})
  }

}
console.log(video)


const handleUpload= async() => {
  const{Caption,url,Image}=video

  if(!Caption || !url ||!Image){
    toast.warning("enter a valid request")
  }
  else{
    //  console.log(vedio)
    const res = await uploadVideo(video)
     console.log(res)
    if(res.status >=200 && res.status<300){
      setaddstatus(res.data)
      toast.success("video upload success fully")
       handleClose()
    }
    else{
      toast.error("vedio uploading failed")
    }
  }
}


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
  <>
         <span className='btn' onClick={handleShow}>
         <i className="fa-solid fa-circle-plus fa-lg" ></i>
         </span>

         <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>vedio details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Caption</Form.Label>
        <Form.Control type="text" name='Caption' onChange={(e)=>{getdata(e)}} placeholder="Enter-video-caption" />
      </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>vedio URL</Form.Label>
        <Form.Control type="text" name='url'  onChange={(e)=>{getdata(e)}} placeholder="Enter-youtube-video-URL" />
      </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" name='Image' onChange={(e)=>{getdata(e)}} placeholder="Enter-Thumbnail image-URL" />
      </Form.Group>
          </Form>
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      
      </>
  )
}

export default Addvideos
