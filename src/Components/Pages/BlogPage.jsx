import React from 'react'
import BlogCards from '../BlogsHome/BlogCards'
import Blogs from '../Blogs/Blogs'
import BlogTop from '../Blogs/BlogTop'
import { Helmet } from 'react-helmet'
const BlogPage = () => {
  return (
    <>
    <Helmet>
      <title>Blogs - Nexcap</title>
      <meta
        name="description"
        content="In today's digital age, having a strong online presence is essential for businesses and individuals alike." />
      <meta
        name="keywords"
        content="Nexcap , Nexcap company , Nexcap Inc. , Nexcap blog, Nexcap Stories , nexcap story" />
      <meta name="author" content="Nexcap Blog" />
    </Helmet>
    <div>
        <BlogTop />
        <Blogs />
      </div></>
  )
}

export default BlogPage