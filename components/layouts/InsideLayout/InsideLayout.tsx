import { Layout } from 'antd'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

const InsideLayout = () => {
  return (
    <div>
      <Header />
      <article>
        <Layout></Layout>
      </article>
      <Footer />
    </div>
  )
}

export default InsideLayout