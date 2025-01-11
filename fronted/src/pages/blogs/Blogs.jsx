import React from 'react'
import blogsData from "../../data/blogs.json";

const Blogs = () => {
    
    return (
      <section
        className="section__container  blog__container"
        style={{ width: "80%" }}
      >
        <h2 className="section__header">Latest From Blog</h2>
        <p className="section__subheader">
          Elevate your wardrobe with our freshest style tips, trends, and
          inspiration on our blog.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:grid-cols-2 mt-12">
          {blogsData.map((blog, index) => (
            <div
              key={index}
              className="blog__card cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <img src={blog.imageUrl} alt="blog image" />
              <div className="blog_card_content">
                <h6>{blog.subtitle}</h6>
                <h5>{blog.title}</h5>
                <p>{blog.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}

export default Blogs
