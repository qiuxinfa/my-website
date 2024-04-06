import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from './styles.module.css'
import Layout from '@theme/Layout'

/**
 * 
 * @returns 首页
 */
export default function Homepage () {
  const { siteConfig } = useDocusaurusContext()
  // 轮播图配置
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: true,
    centerMode: true,
    centerPadding: '10px',
    fade: true,
    arrows: true,
  }

  // 轮播图的所有图片
  const slideImages = [
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

  // 底部图片
  const images = [
    {
      name: '1',
      path: 'img/list/p1.png',
    },
    {
      name: '2',
      path: 'img/list/p2.png',
    },
    {
      name: '3',
      path: 'img/list/p3.png',
    },
    {
      name: '4',
      path: 'img/list/p4.png',
    },
    {
      name: '5',
      path: 'img/list/p5.png',
    },
    {
      name: '6',
      path: 'img/list/p6.png',
    },
  ]

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description={siteConfig.tagline}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Slider {...settings} className={styles.topSlide}>
            {slideImages.map((image, index) => (
              <div key={index} className={styles.topContainer}>
                <img className={styles.topImg} src={image.path} alt={`Image ${index + 1}`} />
                <div className={styles.overlayImg}>
                  <h2 >
                    {image.name}
                  </h2>
                  <Link to={siteConfig.baseUrl + 'detail'} style={{ backgroundColor: 'rgb(93, 139, 159)' }}>
                    VIEW MORE
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.midContent}>Move the green forest to your home</div>
        <div className={styles.mainContainer}>
          {images.map((image, index) => (
            <img className={styles.mainImg} key={index} src={image.path} alt="图片" />
          ))}
        </div>
      </div>
    </Layout>
  )
}