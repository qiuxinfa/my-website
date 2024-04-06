import React from 'react'
import styles from './styles.module.css'

function ImageList () {
  const images = [
    'img/list/p1.png',
    'img/list/p2.png',
    'img/list/p3.png',
    'img/list/p4.png',
    'img/list/p5.png',
    'img/list/p6.png',
  ]

  return (
    <div className={styles.container}>
      {images.map((image, index) => (
        <img className={styles.containerImg} key={index} src={image} alt="图片" />
      ))}
    </div>
  )
}

export default ImageList