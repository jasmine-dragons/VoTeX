import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'

export const Navbar = () => {
  return(
    <Navbar bg="FFFFFF">
      <Navbar.brand href="/">VoTeX</Navbar.brand>
      <Nav>
        <Nav.Link href="">Login</Nav.Link> 
        <Nav.Link href="">New Doc</Nav.Link>
        <Nav.Link href="">Name</Nav.Link>
      </Nav>
    </Navbar>
  )
}
