import React from 'react'

function ImageCard({image}) {
    const tags = image.tags.split(',');
    return (
        <>
            <div className="item">
                <img src={image.webformatURL} alt=''/>
                <div className="item-content">
                <div className="author">Photo by {image.user}</div>
                    <div className="views"><strong>Views: </strong>{image.views}</div>
                    <div className="download"><strong>Downloads: </strong>{image.downloads}</div>
                    <div className="likes"><strong>Likes: </strong>{image.likes}</div>
                </div>
                <div className='tags'>
                    {tags.map((tag, index) => (
                        <span key={index}>#{tag}</span>
                    ))}
                </div>
            </div>
        </>
    
    )
}

export default ImageCard
