import React from 'react'
import './ImageCarousel.css';
import { Carousel } from "react-bootstrap"

export default function ImageCarousel() {
    return (
        /* 
        Carousel component made up of carousel items, where each item can be customized. Currently set to hold 5 different images. 
        The indiciators is set to false to hide the navigation icons and interval is set to 2000 for the time between the change of 
        images.
        */
        <Carousel fade indicators={false} interval={2000} style={{textAlign: 'center'}}>
            <Carousel.Item>
                <img
                    src="/assets/image1.jpeg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="/assets/image2.jpeg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="/assets/image3.png"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="/assets/image4.jpeg"
                    alt="fourth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="/assets/image5.jpeg"
                    alt="fifth slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
