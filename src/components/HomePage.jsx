import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import { VscAccount } from 'react-icons/vsc';
import { CiMenuFries } from 'react-icons/ci';
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";
import logo from './kenvue-logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);

  return (
    <div className="HomePage">
      <Navbar className="p-3" style={{ background: "white" }}>
        <Navbar.Brand><CiMenuFries /></Navbar.Brand>
        <Navbar.Brand style={{ marginLeft: "20px" }}>
          <img src={logo} alt="Logo" style={{ width: '100px', height: '20px' }} />
        </Navbar.Brand>
        <Navbar.Brand style={{ marginLeft: "20px" }}>
          <h5 style={{ marginTop: '13px', fontWeight: 'bold' }}>Data Product Marketplace</h5>
        </Navbar.Brand>
        <Navbar.Brand className="search-bar-container">
          <div style={{ marginTop: '15px' }}>
            <SearchBar setResults={setResults} />
            <SearchResultsList results={results} />
          </div>
        </Navbar.Brand>
        <Navbar.Brand><VscAccount /></Navbar.Brand>
      </Navbar>
      <br />
      <Container style={{ marginTop: "-15px", marginLeft: "15px" }}>
        <Row className="get_started_card">
          <Col>
            <div>
              <h1 style={{ fontFamily: "Inter", fontWeight: "bold", paddingTop: "10px", color: "black" }}>
                Streamline Data Access and Efficiency
              </h1>
            </div>
          </Col>
          <Col>
            <div style={{ paddingLeft: "400px", paddingTop: "190px" }}>
              <button style={{
                fontFamily: "Inter", borderRadius: "20px", padding: "5px", background: "none", borderWidth: "1px"
              }}>
                Get started
              </button>
            </div>
          </Col>
        </Row>
        <Row className="Row" style={{ marginTop: "15px" }}>
          <Col className="cards" style={{ marginLeft: "-15px" }}>
            <div style={{
              background: "#fd9700", padding: "8px", borderRadius: "15px", fontWeight: "bold"
            }}>
              Product 360
            </div>
          </Col>
          <Col className="cards">
            <div style={{
              background: "#cdabe3", padding: "8px", borderRadius: "15px", fontWeight: "bold"
            }}>
              Customer 360
            </div>
          </Col>
          <Col className="cards" style={{ marginRight: "-15px" }}>
            <div style={{
              background: "#ff4b4c", padding: "8px", borderRadius: "15px", fontWeight: "bold"
            }}>
              Consumer 360
            </div>
          </Col>
        </Row>
        <Row className="Row">
          <Col className="cards" style={{ marginLeft: "-15px" }}>
            <div style={{
              background: "#65af9c", padding: "8px", borderRadius: "15px", fontWeight: "bold"
            }}>
              Finance 360
            </div>
          </Col>
          <Col className="cards">
            <div style={{
              background: "#f4c034", padding: "8px", borderRadius: "15px", fontWeight: "bold"
            }}>
              Tech 360
            </div>
          </Col>
          <Col className="cards" style={{ marginRight: "-15px" }}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
