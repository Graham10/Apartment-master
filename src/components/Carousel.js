import React from 'react'
import { Carousel } from 'react-bootstrap'
import image1 from '../images/image1.jpeg'
import image2 from '../images/image2.jpeg'
import image3 from '../images/image3.jpeg'
import image4 from '../images/image4.jpeg'


function ImageCarousel() {
    return (
        <div className="">
            <Carousel fade interval={1200}>
                <Carousel.Item>
                    <img
                        className="d-block h-[70vh] md:h-[100vh] object-cover w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        
                        <p className='md:mb-72 text-4xl tracking-widest font-semibold font-serif text-black italic uppercase'>Modern Amenities</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block h-[70vh] md:h-[100vh] object-cover w-100"
                        src={image2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                       
                        <p className='md:mb-72 text-4xl tracking-widest font-semibold font-serif text-black italic uppercase'>Urban Location</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block h-[70vh] md:h-[100vh] object-cover w-100"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        
                        <p className='md:mb-72 text-4xl tracking-widest font-semibold font-serif text-black italic uppercase'>Sophisticated Style</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </div>
    )
}

export default ImageCarousel