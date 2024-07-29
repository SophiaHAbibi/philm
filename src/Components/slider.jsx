import React, { useEffect, useState } from 'react';
import slide1 from "../assets/sliders/Dune.jpg"
import slide2 from "../assets/sliders/poorthings.jpg"
import slide3 from "../assets/sliders/veagar.jpg"
import slide4 from "../assets/sliders/vestros.jpg"
const ImageCarousel = () => {

    const [carouselImageList, setCarouselImageList] = useState([
        {id: 0, url: slide1},
        {id: 1, url: slide2},
        {id: 2, url: slide3},
        {id: 3, url: slide4}
    ])

    const [carouselItemIndex, setCarouselItemIndex] = useState(0)

    useEffect(() => {
        if(carouselImageList.length){
            const timeoutId = setTimeout(() => setCarouselItemIndex(prev => prev < (carouselImageList.length - 1) ? prev + 1 : 0), '4000')
            return () => clearTimeout(timeoutId)
        }
        return () => {}
    },[carouselItemIndex, carouselImageList.length])

    return ( 
        <div className="mainPage">
            
            <div className="imageCarousel__container">
                {carouselImageList.map(img => <div 
                        className={`carouselItem ${img.id === carouselItemIndex ? 'carouselImageActive' : null}`}
                        style={{backgroundImage: `URL('${img.url}')`
                    }} key={img.id}>
                </div>
                )}
                {/* <div className="carouselDots__container">
                  {carouselImageList.map(item => <div 
                    className='carouselDots' 
                    onClick={() => setCarouselItemIndex(item.id)}
                    style={{backgroundColor: item.id === carouselItemIndex && '#777'}}
                 />)}  
                </div> */}
                
            </div>
        </div>
     );
}
 
export default ImageCarousel;