import logo from "./logo.svg";
import "./App.css";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import data from "./data.js";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import DetailPage from "./pages/Detail.js";

function App() {
  let [items] = useState(data);
  let [value] = useState([0, 1, 2]);
  let navigate = useNavigate();
  console.log(items[0].title);

  return (
    <div className="App">
      <Navbar bg="" variant="black" className="nav-var">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            zeta
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              home
            </Nav.Link>
            <Nav.Link href="">items</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail ");
              }}
            >
              about
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Row>
                {items.map((a, i) => {
                  return <Item i={i} value={value[i]} items={items} />;
                })}
              </Row>
            </div>
          }
        />
        <Route path="/detail/:id" element={<DetailPage items={items} />} />

        <Route path="/about" element={<About />}>
          {/* <Route path="member" element={<DetailPage />} />
          <Route path="location" element={<About />} /> */}
        </Route>

        <Route path="/event" element={<Event />}>
          <Route
            path="one"
            element={
              <div>
                <p>생일기념 쿠폰받기</p>
              </div>
            }
          />
        </Route>

        <Route path="*" element={<div>없는 페이지입니다.</div>} />
      </Routes>
    </div>
  );
}

function Item(props) {
  return (
    <Col sm>
      <img src={"img/img" + props.i + ".jpeg"} width="80%" />
      <h4>{props.items[props.value].title}</h4>
      <p>{props.items[props.value].content}</p>
      <p>{props.items[props.value].price}</p>
    </Col>
  );
}

function About() {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
