import Image from "next/image";
import Link from "next/link";

import Author from "../../../public/assets/imgs/blog/detail/author.png";
import Detail1 from "../../../public/assets/imgs/blog/detail/1.jpg";
import Detail2 from "../../../public/assets/imgs/blog/detail/2.jpg";
import Detail3 from "../../../public/assets/imgs/blog/detail/3.jpg";
import { useEffect, useRef, useState } from "react";
import animationWordCome from "@/lib/utils/animationWordCome";
import { fetchBlog } from "@/lib/utils/fetch";

const BlogDetails1 = () => {
  const [blogData, setBlogData] = useState(null);
  const wordAnim = useRef();
  const wordAnim2 = useRef();
  useEffect(() => {
    const fetchBlogData = async () => {
      const data = await fetchBlog("/api/blog?id=1");
      setBlogData(data);
    }
    fetchBlogData();
    animationWordCome(wordAnim.current);
    animationWordCome(wordAnim2.current);
  }, []);


  return (
    <>
      {blogData && <section className="blog__detail">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-top">
                <h2
                  className="blog__detail-date animation__word_come"
                  ref={wordAnim}
                >
                  Websites, Design, Digital <span>25 Jan 2019</span>
                </h2>
                <h3
                  className="blog__detail-title animation__word_come"
                  ref={wordAnim2}
                >
                  {blogData.title}
                </h3>
                <div className="blog__detail-metalist">
                  <div className="blog__detail-meta">
                    <Image
                      priority
                      width={60}
                      height={60}
                      style={{ width: "auto", height: "auto" }}
                      src={blogData.images.author.url}
                      alt={blogData.author}
                    />
                    <p>
                      Writen by <span>{blogData.author}</span>
                    </p>
                  </div>
                  <div className="blog__detail-meta">
                    <p>
                      Viewed <span>{blogData.readTime}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="blog__detail-thumb">
                <Image
                  priority
                  src={blogData.images.heroImage.url}
                  fill
                  style={{ objectFit: "cover" }}
                  alt={blogData.images.heroImage.alt}
                  data-speed="0.5"
                />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-content" >
                <div dangerouslySetInnerHTML={{__html: blogData.body[0]}} />
                <Image
                  priority
                  width={850}
                  height={350}
                  style={{ objectFit: "cover" }}
                  src={blogData.images.bodyImage1.url}
                  alt={blogData.images.bodyImage1.alt}
                />
                <div dangerouslySetInnerHTML={{__html: blogData.body[1]}} />
                <Image
                  priority
                  width={850}
                  height={350}
                  style={{ objectFit: "cover" }}
                  src={blogData.images.bodyImage2.url}
                  alt={blogData.images.bodyImage2.alt}
                />
              </div>
              <div className="blog__detail-tags">
                <p className="sub-title-anim">
                  tags: {blogData.tags.map((tag, index) => <Link key={index} href="#">{tag}{" , "}</Link>)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>}
    </>
  );
};

export default BlogDetails1;
