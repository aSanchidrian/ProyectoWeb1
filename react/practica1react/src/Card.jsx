import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const card = ({ winner }) => {

  return (
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        height={450}
        width={700}
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default card;