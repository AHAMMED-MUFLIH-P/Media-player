
import React,{useState}from 'react'
import { Row,Col} from 'react-bootstrap'
import Addvideos from '../Components/Addvideos'
import Vedioese from '../Components/Vedioese'
import Categories from '../Components/Categories'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Dashbord() {
  const [addstatus,setaddstatus]=useState([])
  return (
    <div>
       <Row className='p-5'>
        <Col sm='1' md='2'>
          <Addvideos setaddstatus={setaddstatus}/>
        </Col>
        <Col sm='4' md='7'>
          <Vedioese addstatus={addstatus}/>
        </Col>
        <Col sm='2' md='3' >
        <Categories/>
        </Col>
       </Row>
       <ToastContainer/>
    </div>
  )
}

export default Dashbord
