import React from 'react'
import {Carousel} from 'react-bootstrap'
import './Coursal.css'
function Coursal() {

    const [Index,setIndex] = React.useState(0);

    const handelSelect = (selectedIndex,e) => {
        setIndex(selectedIndex);
    }

    return (
        <Carousel activeIndex={Index} onSelect={handelSelect}>
            <Carousel.Item>
        <img
          className="d-block w-100 image-seting"
          src="https://source.unsplash.com/random"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>        
        </Carousel>
    )
}

export default Coursal
