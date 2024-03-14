import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-100 d-flex flex-column justify-content-center bg-light'>
        <div className='row p-5'>
            <div className='col'>
                <h4>media player</h4>
                <p style={{textAlign:"justify"}}>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual
                 form of a document or a typeface without relying on meaningful content. Lorem ipsum m…
                </p>

            </div>
            <div className='col'>
                <h4>links</h4>
            <Link to={'/'} style={{color:"black"}}>Landing</Link> <br />
            <Link to={'/dash'} style={{color:"black"}} >Dashbord</Link><br />
            <Link to={'/his'} style={{color:"black"}}>History</Link>
            </div>
         <div className='col'>


               <h4>Reference</h4>
               <a href="https://getbootstrap.com/" target='_blank' style={{color:"black"}}>bootstrap</a><br />
               <a href="https://react-bootstrap.github.io/" target='_balnk'style={{color:"black"}}>react bootstrap</a><br />
               <a href="https://react.dev/" target='_blank'style={{color:"black"}}>react</a>
           </div>
        </div>
        <div className='text-center'>
            <p>&copy; Media player 2024</p>

        </div>

    </div>
  )
}

export default Footer
