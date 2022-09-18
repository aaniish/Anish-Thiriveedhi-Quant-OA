import React from 'react'
import './ImageCarousel.css';
import { Carousel } from "react-bootstrap"

export default function ImageCarousel() {
    return (
        /* 
        Carousel component made up of carousel items, where each item can be customized.
        */
        <Carousel fade indicators={false}>
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
