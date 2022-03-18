import React from "react";
import { Nav } from "react-bootstrap";

function Category({fetchData}) {
  const handleTab = (tab) => {
    fetchData(tab);
  };
  return (
    <div className="category">
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link>
            <div onClick={() => handleTab("Cars")}>Cars</div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <div onClick={() => handleTab("Animal")}>Animal</div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <div onClick={() => handleTab("Building")}>Building</div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Category;
