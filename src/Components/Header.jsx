import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
   <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-icons fa-fade fa-xl me-3" style={{color:"#FFD43B"}}></i>
            {' '}
          Media player
          </Navbar.Brand>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Header
