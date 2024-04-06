import React from 'react'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from './styles.module.css'

const images = [
  {
    name: 'Green house',
    path: 'img/slick/s1.png',
  },
  {
    name: 'Artificial Plants',
    path: 'img/slick/s2.png',
  },
  {
    name: 'Succulents',
    path: 'img/slick/s3.png',
  },
]

const ImageSlick = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: true,
    // adaptiveHeight: true,
    centerMode: true,
    // centerPadding: '100px',
    fade: true,
    arrows: true,
  }

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className={styles.container}>
          <img className={styles.containerImg} src={image.path} alt={`Image ${index + 1}`} />
          <div>
            <h2 class="slideshow__heading h1">
              {image.name}
            </h2>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default ImageSlick