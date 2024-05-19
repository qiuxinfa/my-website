import React from 'react'
import { Layout, Image, Col, Row, Carousel, Card } from 'antd'
// import { LeftOutlined, RightOutlined, LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import styles from './index.module.css'

const { Header, Footer, Content } = Layout

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
  color: 'black',
  backgroundColor: 'white'
}

const headerStyle = {
  height: '100px',
  lineHeight: '100px',
  backgroundColor: 'white'
}
const contentStyle = {
  backgroundColor: 'white',
  textAlign: 'center',
}

// 轮播图样式
const slideStyle = {
  margin: 0,
  textAlign: 'center',
}

const footerStyle = {
  textAlign: 'center',
  backgroundColor: 'white'
}

// 跳到到外部链接
const openUrl = (toUrl) => {
  window.open(toUrl)
}

// 自定义轮播图箭头
const Arrow = ({ currentSlide, direction, slideCount, ...carouselProps }) => {
  console.log('carouselProps ==== ', carouselProps)
  return direction === 'left' ? (
    <span {...carouselProps} style={{ display: 'block', color: 'blue', width: '50px', fontSize: '64px', marginLeft: '200px' }} > </span>
  ) : (
    <span {...carouselProps} style={{ display: 'block', color: 'blue', width: '50px', fontSize: '64px', marginRight: '200px' }}> </span>
  )
}

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "green", marginRight: '200px' }}
      onClick={onClick}
    />
  )
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "green", marginLeft: '200px' }}
      onClick={onClick}
    />
  )
}

export default function Home () {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Row wrap={false}>
          <Col span={12}><span>WhatsApp </span><Image preview={false} height='100px' src='img/whatsApp.jpg' /></Col>
          <Col span={12}><Image preview={false} height='100px' src='img/logo.png' /></Col>
        </Row>
      </Header>
      <hr style={{ marginTop: '5px', marginBottom: '5px' }} />
      <Content style={contentStyle}>
        {/* 轮播图 */}
        <Carousel
          autoplay
          arrows
          infinite={false}
          prevArrow={<SamplePrevArrow />}
          nextArrow={<SampleNextArrow />}
        // nextArrow={<Arrow direction="right" />}
        // prevArrow={<Arrow direction="left" />}
        >
          <div style={slideStyle} >
            <Image key='slick1' height={800} preview={false} src='img/slick/1.jpg' />
          </div>
          <div style={slideStyle} >
            <Image key='slick2' height={800} preview={false} src='img/slick/2.jpg' />
          </div>
          <div style={slideStyle} >
            <Image key='slick3' height={800} preview={false} src='img/slick/3.jpg' />
          </div>
        </Carousel>
        {/* 产品介绍 */}
        <div className={styles.mainProducts}>MAIN PRODUCTS</div>
        <Row gutter={16}>
          <Col span={8}>
            <Card
              bordered={false}
              styles={{
                body: { margin: '0', padding: '5px' },
              }}
              cover={<img alt="Artificial Trees" src="img/products/1.jpg" />}
            >
              <div className={styles.mainProductsDesc}>Artificial Trees</div>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              bordered={false}
              styles={{
                body: { margin: '0', padding: '5px' },
              }}
              cover={<img alt="Artificial Flowers" src="img/products/2.jpg" />}
            >
              <div className={styles.mainProductsDesc}>Artificial Flowers</div>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              bordered={false}
              styles={{
                body: { margin: '0', padding: '5px' },
              }}
              cover={<img alt="Artificial Plants" src="img/products/3.jpg" />}
            >
              <div className={styles.mainProductsDesc}>Artificial Plants</div>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Card
              bordered={false}
              styles={{
                body: { margin: '0', padding: '5px' },
              }}
              cover={<img alt="Artificial Green Walls" src="img/products/4.jpg" />}
            >
              <div className={styles.mainProductsDesc}>Artificial Green Walls</div>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              bordered={false}
              styles={{
                body: { margin: '0', padding: '5px' },
              }}
              cover={<img alt="Moss Walls" src="img/products/5.jpg" />}
            >
              <div className={styles.mainProductsDesc}>Moss Walls</div>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              bordered={false}
              styles={{
                body: { margin: '0', padding: '5px' },
              }}
              cover={<img alt="Cactus" src="img/products/6.jpg" />}
            >
              <div className={styles.mainProductsDesc}>Cactus</div>
            </Card>
          </Col>
        </Row>
        {/* 公司介绍 */}

        <Row>
          <div className={styles.companyTitle}>COMPANY INTRODUCTION</div>
        </Row>
        <Row>
          <p className={styles.companyDesc}>
            Guangzhou Evergreen Arts & Crafts Co.,Ltd has been specialized in Artificial Flowers & Plant
            with its own factory with experience of more than 10 years in Guangzhou, focusing on providing
            innovative projects for the global market in many industries, such as interior & exterior decor,
            horticulture, building materials, supermarket, restaurants & hotels, and landscape design.
          </p>
          <p className={styles.companyDesc}>
            It has a land over 10000 square meters with more than 90 workers, and 70% of our employees
            have about 3 years' experience. We have over 1000 sets of printing knife molds and over 500
            sets of leaf molds, which is our advantage. We can customize according to your specific requirements.
            Our major products are artificial flowers & plants, including Artificial potted plants, Artificial
            foliage, Faux Hedges, Green wall Panels, Synthetic landscaping trees and so on.
          </p>
          <p className={styles.companyDesc}>
            For now, we've exported to more than 55 different countries and worked with over 120 importers,
            wholesalers and fashion brands etc, such as Netherlands, UK, Belgium , UAE, Kuwait, the United States,
            and have won popularity both domestically and internationally due to our advantages in quality and price.
          </p>
          <p className={styles.companyDesc}>
            Responsibility, Honesty, Thankfulness and Innovation are parts of our vision in Evergreen.
            Happiness, Open mind, Win-Win and Cooperation are our work ethics.
          </p>
        </Row>
        <Row className={styles.rowSpace}>
          <Col span={24}>
            <Image preview={false} src='img/company/factory.jpg' />
          </Col>
        </Row>
        <Row className={styles.rowSpace}>
          <Col span={24}>
            <Image preview={false} src='img/company/certificates.jpg' />
          </Col>
        </Row>
        <Row gutter={6} className={styles.rowSpace}>
          <Col span={12}><Image preview={false} src='img/company/1.jpg' /></Col>
          <Col span={12}><Image preview={false} src='img/company/2.jpg' /></Col>
        </Row>
        <Row gutter={6} className={styles.rowSpace}>
          <Col span={12}><Image preview={false} src='img/company/3.jpg' /></Col>
          <Col span={12}><Image preview={false} src='img/company/4.jpg' /></Col>
        </Row>
        <Row gutter={6} className={styles.rowSpace}>
          <Col span={6}>
            <Image preview={false} src='img/company/5.jpg' />
          </Col>
          <Col span={6}>
            <Image preview={false} src='img/company/6.jpg' />
          </Col>
          <Col span={6}>
            <Image preview={false} src='img/company/7.jpg' />
          </Col>
          <Col span={6}>
            <Image preview={false} src='img/company/8.jpg' />
          </Col>
        </Row>
      </Content>
      <Footer style={footerStyle}>
        <Row align='middle' justify='start'>
          <Col span={8}>
            <div className={styles.contact}>
              <div className={styles.contactTitle}>Contact</div>
              <div className={styles.contactAddress}>
                Guangzhou Evergreen Arts & Crafts Co.,Ltd
              </div>
              <div className={styles.contactAddress}>
                ADD: No 512, Gaoxin Road, Huadu District, Guangzhou, China
              </div>
              <div className={styles.contactAddress}>
                T: 0086 150 1190 1003
              </div>
              <div className={styles.contactAddress}>
                M: artificial.evergreen@gmail.com
              </div>
            </div>
          </Col>
          <Col span={8}><Image preview={false} src='img/logo.png' /></Col>
          <Col span={2}><Image preview={false} onClick={() => openUrl('http://www.facebook.com')} src='img/social/facebook.png' /></Col>
          <Col span={2}><Image preview={false} onClick={() => openUrl('http://www.facebook.com')} src='img/social/instagram.png' /></Col>
          <Col span={2}><Image preview={false} onClick={() => openUrl('https://whatsapp.en.softonic.com/')} src='img/social/whatsapp.png' /></Col>
        </Row>
      </Footer>
    </Layout>
  )
}
