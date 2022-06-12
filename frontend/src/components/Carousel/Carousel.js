import "./Carousel.css"
import React from 'react';
import AliceCarousel from 'react-alice-carousel';


function Carousel(props) {
    const {imgArray} = props
    const handleDragStart = (e) => e.preventDefault();
    console.log(imgArray)

    const items = imgArray.map(img => <img src={img.path_full} onDragStart={handleDragStart} role="presentation" />,) ;
      console.log(items)
    return (
        <div className="carousel">
        <AliceCarousel mouseTracking items={items} />
        </div>
    );
}

export default Carousel;