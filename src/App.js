
import "./App.css";
import React, { useState } from "react";
import logo from "./logo.png";
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';

import {AiOutlineSetting} from 'react-icons/ai';
import LineChart from "./LineChart";
import RadarChart from "./RadarChart";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Container, Button,Row,Col,Nav, Navbar, Offcanvas, NavDropdown, Form,Breadcrumb} from "react-bootstrap";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return ( 
    <>
    

    <Navbar bg="light" variant="light">
    <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="80"
              height="50"
              className="d-inline-block align-top"
            />{' '}
           
          </Navbar.Brand>

          <Button className="me-auto" variant="light" onClick={handleShow}>
        <AiOutlineMenu  size={25} />
      </Button>
      <AiOutlineUser size={30} style={{marginRight:"15px"}}/>
      <AiOutlineSetting size={30}/>
      
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="me-auto">
            <Nav.Link href="#home">DashBoard</Nav.Link>
            <Nav.Link href="#features">Analysis</Nav.Link>
            <Nav.Link href="#features">Statistics</Nav.Link>
            <Nav.Link href="#pricing">Components</Nav.Link>
            <NavDropdown
              id="nav-dropdown"
              title="Charts"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Total User</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Total Order
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Total Sales</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Total Marketing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Analytics
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown"
              title="Profile"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">User Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Account Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">User List</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                User Card
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
        
        </Container>
  </Navbar>

<Container className="mt-5 mb-5" >

<Breadcrumb className="mt-2" >
      <Breadcrumb.Item href="" >
      <a href='#' style={{color:"grey"}}>Home</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="" >
      <a href='#' style={{color:"grey"}}>Charts</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Analytics</Breadcrumb.Item>
    </Breadcrumb>

<Row className="mt-5">
  <h2  style={{ marginBottom:"40px" }}>Analytics</h2>
        <Col><Card style={{ width: '100%' }}> 
     
     <Card.Body>
       <Card.Title>Annual Sales</Card.Title>
       <BarChart />
       <Card.Text className="mt-3">
         Some quick summary of annual sales for year 2022 - department A and Department B
       </Card.Text>
       <Button variant="primary" size="sm">Detail</Button>
     </Card.Body>
   </Card></Col>
        
   <Col><Card style={{ width: '100%' }}> 
     
     <Card.Body>
       <Card.Title>Yearly Budget</Card.Title>
       <LineChart/>
       <Card.Text className="mt-3">
       Track expenses to manage your event budget online for free. 
       </Card.Text>
       <Button variant="primary" size="sm">Detail</Button>
     </Card.Body>
   </Card></Col>
   </Row>

   <Row className="mt-5" >
        <Col><Card style={{ width: '100%' }}> 
     
     <Card.Body>
       <Card.Title>Global Market Share</Card.Title>
      <PieChart/>
       <Card.Text>
       A company's market share is its sales measured as a percentage of an industry's total revenues. 
       </Card.Text>
       <Button variant="primary" size="sm">Detail</Button>
     </Card.Body>
   </Card></Col>
        
   <Col><Card style={{ width: '100%' }}> 
     
     <Card.Body>
       <Card.Title>Annual Growth Rate</Card.Title>
       <RadarChart />
       <Card.Text>
       The compound annual growth rate (CAGR) measures an investment's annual growth rate over a period of time.
       </Card.Text>
       <Button variant="primary" size="sm">Detail</Button>
     </Card.Body>
   </Card></Col>
   </Row>
        </Container>
        </>

  ) ;
}

export default App;
