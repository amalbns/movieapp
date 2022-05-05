import React from 'react';
import {Carousel} from 'react-bootstrap'

function Cass() {
return (
    <div>
        <Carousel>
    <Carousel.Item>
    <img
    className="d-block w-100"
    src="https://ntvb.tmsimg.com/assets/p20649163_b_h8_aa.jpg?w=1280&h=720"
    alt="First slide"
    />
    <Carousel.Caption>
    
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img
    className="d-block w-100"
    src="https://wallpaperaccess.com/full/1918781.jpg"
    alt="Second slide"
    />

    <Carousel.Caption>

    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img
    className="d-block w-100"
    src="https://www.officielles.fr/wp-content/uploads/2019/01/you-poster.jpg"
    alt="Third slide"
    />

<Carousel.Caption>
    
    </Carousel.Caption>
</Carousel.Item>
</Carousel>
    </div>
)
}

export default Cass