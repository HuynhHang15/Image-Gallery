import React from "react";
import {useState} from 'react';
import { Pagination } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function PaginationComponent(props) {
  const { pagination, onPageChange } = props;
  const { page, limit, totalRows } = pagination;
  const totalPages = Math.ceil(totalRows / limit);
  const [range, setRange] = useState({
    start: 0,
    end: 10,
  })
  const arrButton = [];
  for (let i=0; i<totalPages; i++){
    arrButton.push(i+1);
  }

  function handlePageChange(newPage) {
      onPageChange(newPage);
      if (newPage>range.end){
        setRange((prev) => {
          return {
            start: prev.start + 5,
            end: prev.end + 5
          }
        })
      }
      if (newPage <= range.start){
        setRange((prev) => {
          return {
            start: prev.start -5,
            end: prev.end -5
          }
        })
      }
  }
  return (
    <div className="listBtn">
      <Pagination.Item disabled={pagination.page<=1} onClick={() => handlePageChange(pagination.page - 1)}>
        {"<"}
      </Pagination.Item>
      {arrButton.slice(range.start, range.end).map((button) => {
        return (
          <Pagination.Item
            key={button}
            active={page == button}
            onClick={() => handlePageChange(button)}
          >
            {button}
          </Pagination.Item>
        )
      })}
      <Pagination.Item disabled={pagination.page == totalPages} onClick={() => handlePageChange(pagination.page + 1)}>
        {">"}
      </Pagination.Item>
    </div>
  );
}

export default PaginationComponent;
