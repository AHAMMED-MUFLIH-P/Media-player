import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addcatogery } from '../Services/AllApi';
import Catogerylist from './Catogerylist';


function Categories() {
  const [show, setShow] = useState(false);

const [category,setcategory]=useState({
  name:'',video:[]
})
const [staus,setstatus]=useState({})


 const getcateogery=(val)=>{
  if(val){
    setcategory({...category,name:val})
  }
 }  
     
  const handleadd=async()=>{
    console.log(category)
    if(category.name){
      const res=await addcatogery(category)
      if(res.status>=200 && res.status<300){
        toast.success("catogry add succes!!")
        handleClose()
        setstatus(res.data)
      }
      else{
        toast.error("catogery add Failed!!")
      }}
      else{
        toast.info("enter valid data!!")
      }
    
  }    



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
    <div className='d-grid'>
    <Button variant="primary" className="btn" onClick={handleShow}>Add catogery</Button>  
      <Catogerylist setstatus={setstatus} />
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add catogery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
     <Form>
     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>category name</Form.Label>
        <Form.Control type="text" onChange={(e)=>{getcateogery(e.target.value)}} placeholder="Enter category name" />
      </Form.Group>
     </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleadd}>save</Button>
        </Modal.Footer>
      </Modal>
     
    </>
  )
}

export default Categories

