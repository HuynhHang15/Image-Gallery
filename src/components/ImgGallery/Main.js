import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import ImageSearch from "./ImageSearch";
import "../../assets/ImgGallery.css";
import Pagination from "./Pagination";
import Category from "./Category";

function Main() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 6,
    totalRows: 1,
  });

  const [filters, setFilters] = useState({
    page: 1,
    limit: 6,
    term: ""
  });

  useEffect(() => {
    const url = `https://pixabay.com/api/?key=8761127-15c354fd40a23de8d36bfe25d&q=${filters.term}&image_type=photo&pretty=true&page=${filters.page}&per_page=${filters.limit}`;
    fetch(url)
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        setImages(data.hits);
        setIsLoading(false)
        setPagination(prev => ({
            ...prev,
            page: filters.page,
            totalRows: data.totalHits
        }))
    })
    // .catch(err => console.log(err));
  }, [filters]);

  function handlePageChange(newPage) {
    console.log(newPage);
    setFilters({
        ...filters,
        page: newPage
    })
  }

  return (
    <div>
      <div className="container">
        <ImageSearch searchText={(text) => setFilters({...filters, page:1, term: text})} />

        <Category fetchData={(text) => setFilters({...filters, page:1, term: text})}/>

        {!isLoading && images.length === 0 && (
          <h1 className="loading">No Images Found</h1>
        )}

        {isLoading ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          <div className="list-item">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
        <Pagination pagination={pagination} onPageChange={handlePageChange} termChange={filters.term}/>
      </div>
    </div>
  );
}

export default Main;
