import React from 'react';
import { LuBarChart4 } from "react-icons/lu";
import { CiFilter } from 'react-icons/ci';
import { HiOutlineFolderDownload } from "react-icons/hi";
import { CiHeart, CiMenuBurger } from 'react-icons/ci';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./HomePage.css";
import {
  CircularProgressbar
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useData } from './DataContext';

export const ResultsToNewPage = () => {
  const { data } = useData();
  const results = data[1]; // Assuming data is structured as [input, results]

  // Function to chunk results into arrays of size 3
  const chunkArray = (arr, size) => {
    let chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  // Chunk results into rows with 3 columns each
  const rows = chunkArray(results, 3);

  // Function to render an individual tile
  const renderTile = (result, key) => (
    <Col key={key} className='tile'>
      <Row>
        <Col style={{ paddingTop: "5px" }}>
          <div style={{ fontFamily: "Inter", fontWeight: "bold",width:"120px" }}>
            {result.title} {/* Assuming result object has a 'title' property */}
          </div>
          <div style={{ fontSize: "10px", width:"140px" }}>
            {result.content.slice(0, 120)} {/* Assuming result object has a 'content' property */}
          </div>
        </Col>
        <Col style={{ paddingLeft: "50px", paddingTop: "10px" }}>
          <div style={{ width: "90px", height: "90px" }}>
            <CircularProgressbar value={"100"} text={`100%`} styles={{ path: { stroke: "#fd9700" }, text: { fill: "#000" } }} />
          </div>
        </Col>
      </Row>
      <Row style={{alignSelf:"flex-end", marginTop:"10px"}}>
        <Col style={{alignItems:"center"}}>
        <div style={{
           marginBottom:"10px",background: "#fd9700", padding: "8px", borderRadius: "15px", fontWeight: "bold",  fontSize: "12px", width: "110px", textAlign: "center", marginLeft: "0px"
          }}>
            Product 360
          </div></Col>
        <Col style={{ paddingLeft: "20px" }}>
          <CiHeart style={{ fontSize: "25px" }} />
        </Col>
        <Col>
          <CiMenuBurger style={{ fontSize: "20px" }} />
        </Col>
        <Col>
          <HiOutlineFolderDownload style={{ fontSize: "30px", stroke: '#000', strokeWidth: 1 }} />
        </Col>
        <Col>
          <LuBarChart4 style={{ fontSize: "25px", stroke: '#000', strokeWidth: 1 }} />
        </Col>
      </Row>
    </Col>
  );

  return (
    <div >
         
              <h5 style={{ fontFamily: "Inter", paddingTop: "10px", color: "black" }}>
                Search results for: {data[0]}
              </h5>
              <button style={{
                fontSize:"17px",height:"25px",fontFamily: "Inter", borderRadius: "0px", paddingLeft: "2px", background: "none", borderWidth: "1px"
              }}>
                 Filter<CiFilter/>
              </button>
            
    <Container>
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex} className='r'>
          {row.map((result, colIndex) => renderTile(result, colIndex))}
          {/* Fill remaining columns if row doesn't have 3 tiles */}
          {row.length < 3 && (
            <>
              <Col ></Col>
              {row.length < 2 && <Col></Col>}
            </>
          )}
        </Row>
      ))}
    </Container>
    </div>
  );
};
