import React from 'react'
import './ImageCarousel.css';
import image1 from "./assets/image1.jpeg";
import image2 from "./assets/image2.jpeg";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.jpeg";
import image5 from "./assets/image5.jpeg";
import { Carousel } from "react-bootstrap";


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
                    src={image1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={image2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={image3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={image4}
                    alt="fourth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={image5}
                    alt="fifth slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
