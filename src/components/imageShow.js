import '../imageshow.css';
function ImageShow({images, searchQuery}){
    const filteredImages = images.filter((image) => 
    image.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    const renderedImages = filteredImages.map((image, index) => {
            return (
                <div key={index} className="img-container">
                    <img src={image.url} alt="food pic" className="img-pic" />
                    <p id="name">{image.name}</p>
                    <div className='wrapper'>
                    <p><span id="from">From</span> <span className="price">{image.price}</span></p>
                    <p className='add'>Add to cart</p>
                    </div>
                </div>
            )
            })
    return (
        <div className="content-head">
            {renderedImages}
        </div>
    );
};

export default ImageShow;