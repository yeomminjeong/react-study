import logo from "./logo.svg";
import "./App.css";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import clover from "./img/clover.jpeg";
import data from "./data.js";
import { useState } from "react";

function App() {
  let [clovers] = useState(data);
  return (
    <div className="App">
      <Navbar bg="" variant="black" className="nav-var">
        <Container>
          <Navbar.Brand href="#home">zeta</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">home</Nav.Link>
            <Nav.Link href="#features">items</Nav.Link>
            <Nav.Link href="#pricing">about</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <div>
        <Row>
          <Col sm>
            <img src={clover} width="80%" />
            <h4>{clovers[0].title}</h4>
            <p>{clovers[0].content}</p>
            <p>{clovers[0].price}</p>
          </Col>
          <Col sm>
            <img src={clover} width="80%" />
            <h4>clover</h4>
            <p>클로버 물방울</p>
          </Col>
          <Col sm>
            <img src={clover} width="80%" />
            <h4>clover</h4>
            <p>클로버 물방울</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
