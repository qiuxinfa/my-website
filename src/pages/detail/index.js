import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './styles.module.css'
import Layout from '@theme/Layout'

export default function Detail () {
  const { siteConfig } = useDocusaurusContext()

  // 底部图片
  const images = [
    {
      name: 'Royal park GE2404',
      path: 'img/greenHouse/g1.png',
    },
    {
      name: 'Green house GE1304',
      path: 'img/greenHouse/g2.png',
    },
    {
      name: 'Green house GM34606',
      path: 'img/greenHouse/g3.png',
    },
    {
      name: 'Green house GP925',
      path: 'img/greenHouse/g4.png',
    },
  ]

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description={siteConfig.tagline}>
      <div className={styles.container}>
        <h1 className={styles.title}>Green house</h1>
        <div className={styles.content}>
          <div className={styles.contentP}>Green houses include Titan Series, Orangeries Series, Imperial Series,
            Empire Series, Gazebo Series, Elite Series, Pro Series, Glory Series,
            Lite Series, Traditional Series, Barn Series, Lean-to Series, Nursery Series,
            Cold Frame Series etc.
          </div>
          <div className={styles.contentP}>
            Swimming Pool Cover includes Classic Series, Low Line Series, Middium High Series etc.
          </div>
          <div className={styles.contentP}>
            Raised Garden Beds includes Rectangle Series, Arch Series,
            Garden Beds with Greenhouse Series, Aluminium Garden Beds etc.
          </div>
          <div className={styles.contentP}>
            And new products are developing every year.
          </div>
          <div className={styles.mainContainer}>
            {images.map((image, index) => (
              <div className={styles.divImg}>
                <img className={styles.mainImg} key={index} src={image.path} alt="图片" />
                <sapn className={styles.textImg}>{image.name}</sapn>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}