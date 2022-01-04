import React, {useState, useEffect} from 'react';
import ImageCard from "./ImageCard";
import ImageSearch from "./ImageSearch";
import '../../assets/ImgGallery.css'

function Main() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');

    useEffect(() => {
        const url =`https://pixabay.com/api/?key=8761127-15c354fd40a23de8d36bfe25d&q=${term}&image_type=photo&pretty=true`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setImages(data.hits);
            setIsLoading(false)
        })
        // .catch(err => console.log(err));
    },[term]);


    return (
        <div>
            <div className='container'>
                <ImageSearch searchText={(text => setTerm(text))}/>

                {!isLoading && images.length===0 && <h1 className='loading'>No Images Found</h1>} 

                {isLoading ? <h1 className='loading'>Loading...</h1> :
                <div className="list-item">
                    {images.map((image) => (
                    <ImageCard key={image.id} image={image}/>
                    ))}
                </div>
                }
            </div>
        </div>
    )
}

export default Main
