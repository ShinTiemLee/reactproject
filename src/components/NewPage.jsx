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

import "react-circular-progressbar/dist/styles.css";
import { ResultsToNewPage } from './ResultsToNewPage';
import { DiVim } from 'react-icons/di';

const NewPage = () => {
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
            <ResultsToNewPage />
        
      </Container>
    </div>
  );
};

export default NewPage;
