import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import firstImg from "../carousel/images/1.jpg"
import secondImg from "../carousel/images/2.jpg"
import thirdImg from "../carousel/images/3.jpg"

function MyCarousell() {
    return (
        <div>
            <Carousel width={400} axis="vertical" autoPlay={true}>
                <div>
                    <img src={firstImg} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={secondImg} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={thirdImg} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}

export default MyCarousell
