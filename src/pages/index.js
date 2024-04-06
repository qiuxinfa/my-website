import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Homepage from './home'


export default function Home () {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Homepage />
  )
}
