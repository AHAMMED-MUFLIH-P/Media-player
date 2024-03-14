import {useState} from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo,addhistory} from '../Services/AllApi';

import { toast } from 'react-toastify';


function VedioCard ({video,setdelstatus,cat}) {
    const [show, setShow] = useState(false);
    const [history,sethistory]=useState({
      Caption:video.Caption,url:video.url,datetime:''
    })

    const handleDelete= async(id)=>{
       console.log(id)
       const res=await deleteVideo(id)
       console.log(res)
       if(res.status>=200 && res.status<300){
        setdelstatus(res)
        toast.success("delete vedio successfully!!")
       }
       else{
        toast.error("delete vedio failed!!")
       }
    }

const handleondrag=(e,id)=>{
   console.log("video is dragon:id:" +id)
   e.dataTransfer.setData("videoid:",id)
}


    const handleClose = () =>{
      addhistory(history)
       setShow(false);
      }
    const handleShow = () => {
      sethistory({...history,datetime:new Date()})
      setShow(true);

    }
      return (

<>
 
 <Card style={cat?{ width: '10rem' }:{width:'16rem'}} className='ms-3 mb-3' draggable onDragStart={(e)=>{handleondrag(e,video?.id)}}>
      <Card.Img variant="top"  src={video.Image} onClick={handleShow} className='img-fluid' />
      <Card.Body className="d-flex flex-row justify-content-between">
        <Card.Title>{video.Caption}</Card.Title>
        {
          !cat &&
        <i className="fa-solid fa-trash" onClick={()=>{handleDelete(video.id)}} style={{color: "#e40707"}}></i>
        }
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Bramayugam</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
      
      </Modal>
       
 </>
  )
}

export default VedioCard
