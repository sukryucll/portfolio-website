import React from "react";
import { Heading } from "../common/Heading";
import { blog } from "../data/dummydata";

function Blog() {
  return (
    <div>
      <section className="blog">
        <div className="container">
          <Heading title="Blog" />
          <div className="content grid3">
            {blog.map((item) => {
              return (
                <div className="box" data-aos="flip-left">
                  <div className="img" data-aos="flip-up">
                    <img src={item.cover} alt="" data-aos="flip-down"/>
                  </div>
                  <div className="text">
                    <h3 data-aos="flip-right">{item.title}</h3>
                    <label data-aos="flip-left">
                        By {item.author} {item.date}
                    </label>

                    <p data-aos="fade-up-right">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
