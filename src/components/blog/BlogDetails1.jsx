import animationWordCome from "@/lib/utils/animationWordCome";
import { fetchBlog } from "@/lib/utils/fetch";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const BlogDetails1 = ({ id }) => {
  const [blogData, setBlogData] = useState(null);
  const wordAnim = useRef();
  const wordAnim2 = useRef();

  // Fetch blog data with useEffect to prevent blocking UI
  useEffect(() => {
    let isMounted = true; // Prevent state updates if component unmounts

    const fetchBlogData = async () => {
      const data = await fetchBlog(`/api/blog?id=${id}`);
      if (isMounted) setBlogData(data);
    };

    fetchBlogData();

    return () => {
      isMounted = false; // Cleanup on unmount
    };
  }, [id]);

  // Defer animations until blog data is available
  useEffect(() => {
    if (blogData) {
      requestIdleCallback(() => {
        animationWordCome(wordAnim.current);
        animationWordCome(wordAnim2.current);
      });
    }
  }, [blogData]);

  // Memoize HTML content to prevent unnecessary re-renders
  const blogContent = useMemo(
    () => blogData?.body.map((section, index) => (
      <div key={index} dangerouslySetInnerHTML={{ __html: section }} />
    )),
    [blogData]
  );

  return (
    <>
      {blogData ? (
        <section className="blog__detail">
          <div className="container g-0 line pt-140">
            <span className="line-3"></span>
            <div className="row">
              <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
                <div className="blog__detail-top">
                  <h2 className="blog__detail-date animation__word_come" ref={wordAnim}>
                    Websites, Design, Digital <span>{blogData.date}</span>
                  </h2>
                  <h3 className="blog__detail-title animation__word_come" ref={wordAnim2}>
                    {blogData.title}
                  </h3>
                  <div className="blog__detail-metalist">
                    <div className="blog__detail-meta">
                      <Image
                        priority
                        width={60}
                        height={60}
                        src={blogData.images.author.url}
                        alt={blogData.author}
                      />
                      <p>
                        Written by <span>{blogData.author}</span>
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
                    width={1200}
                    height={600}
                    style={{ objectFit: "cover" }}
                    alt={blogData.images.heroImage.alt}
                    data-speed="0.5"
                  />
                </div>
              </div>
              <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
                <div className="blog__detail-content" style={{ minHeight: "500px" }}>
                  {blogContent}
                  <Image
                    loading="lazy"
                    width={850}
                    height={350}
                    src={blogData.images.bodyImage1.url}
                    alt={blogData.images.bodyImage1.alt}
                  />
                  <Image
                    loading="lazy"
                    width={850}
                    height={350}
                    src={blogData.images.bodyImage2.url}
                    alt={blogData.images.bodyImage2.alt}
                  />
                </div>
                <div className="blog__detail-tags">
                  <p className="sub-title-anim">
                    tags:{" "}
                    {blogData.tags.map((tag, index) => (
                      <Link key={index} href="#">
                        {tag}{" , "}
                      </Link>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="blog__loading-placeholder">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default BlogDetails1;
