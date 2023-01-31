import logo from "./logo.svg";
import "./App.css";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
// import clover from "/clover.jpeg";
import data from "./data.js";
import { useState } from "react";

function App() {
  let [clovers] = useState(data);
  let [value] = useState([0, 1, 2]);
  console.log(clovers);
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
          {clovers.map((a, i) => {
            return <Item i={i} value={value[i]} clovers={clovers} />;
          })}
        </Row>
      </div>
    </div>
  );
}

function Item(props) {
  return (
    <Col sm>
      <img src={"img/img" + props.i + ".jpeg"} width="80%" />
      <h4>{props.clovers[props.value].title}</h4>
      <p>{props.clovers[props.value].content}</p>
      <p>{props.clovers[props.value].price}</p>
    </Col>
  );
}
export default App;
