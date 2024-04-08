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
  const companyImg = 'img/company.png'
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
      name: '产品A',
      path: 'img/list/p1.png',
    },
    {
      name: '产品B',
      path: 'img/list/p2.png',
    },
    {
      name: '产品C',
      path: 'img/list/p3.png',
    },
    {
      name: '产品D',
      path: 'img/list/p4.png',
    },
    {
      name: '产品E',
      path: 'img/list/p5.png',
    },
    {
      name: '产品F',
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
                  {/* <Link to={siteConfig.baseUrl + 'detail'} style={{ backgroundColor: 'rgb(93, 139, 159)' }}>
                    VIEW MORE
                  </Link> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.midContent}>Move the green forest to your home</div>
        <div className={styles.mainContainer}>
          {images.map((image, index) => (
            <div className={styles.divImg}>
              <img className={styles.mainImg} key={index} src={image.path} alt="图片" />
              <div className={styles.productType}>{image.name}</div>
            </div>
          ))}
        </div>
        <div className={styles.companyTitle}>COMPANY INTRODUCTION</div>
        <div className={styles.company}>
          <div className={styles.companyImgDiv}>
            <img className={styles.companyImg} src={companyImg} alt="companyImg" />
          </div>
          <div className={styles.companyDescDiv}>
            <p className={styles.companyDesc}>
              GUANGDONG G&D HOME GARDENING CO.LTD. is one of the leading companies in
              Chinaa wideGlasshouses, Sunroom, Raised Garden Beds.Swimming Pool Enclosure,
              Potting Bench andsolutions for other home living, hotels or resortsaround the globe.
            </p>
            <p className={styles.companyDesc}>
              The company is located in Qingxin District,Qingyuan City, which is next to Guangzhou,
              oneof the most famous trading center in the world.lt has a land over 24000 m2 and about 120
              workers. Employing an experienced staff ofprofessionals in planting and designing,
              G-MORE works closely with end users to assesstheir needs and objectives,
              to design variouseconomic, environmental-friendly and efficientgreenhouses and outdoor solutions.
              With yearsof development, the company has established astrong marketing network,
              covering more than45 countries in the world, such as America, UKGermany, Sweden, Norway, Australia,
              Russia etcWith a mission to provide high quality productsand services to customers, G-MORE wil
              continuously do the utmost to develop and to improve itself.
            </p>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.contactTitle}>Contact Details</div>
          <div className={styles.contactAddress}>
            GUANGDONG G&D HOME GARDENING CO., LTD.
          </div>
          <div className={styles.contactAddress}>
            Add: NO.5,YINGFU INDUSTRIAL PARK,TAIPINGTOWN,QINGXIN DISTRICT,QINGYUAN CITY,GUANGDONG,CHINA.
          </div>
          <div className={styles.contactAddress}>
            Tel: +86-763-5898316 / 5898306
          </div>
          <div className={styles.contactAddress}>
            Mobile: +86-13326461058
          </div>
          <div className={styles.contactAddress}>
            Email: info@chinagmore.com
          </div>
          <div className={styles.contactAddress}>
            Site: www.chinagmore.com
          </div>
        </div>
      </div>
    </Layout>
  )
}