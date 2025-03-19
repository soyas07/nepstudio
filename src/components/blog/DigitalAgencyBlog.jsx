import { fetchBlog } from "@/lib/utils/fetch";
import { ScrollTrigger } from "@/plugins";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyBlog = () => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      const data = await fetchBlog("/api/blog");
      setBlogData(data);
    };
    fetchBlogData();
  }, []);

  useEffect(() => {
    if (!blogData) return; // Ensure blogData is available before running GSAP

    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".blog__animation .blog__item", { x: 50, opacity: 0 });

        if (device_width < 1023) {
          const blogList = gsap.utils.toArray(".blog__animation .blog__item");
          blogList.forEach((item, i) => {
            let blogTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            blogTl.to(item, {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".blog__animation .blog__item", {
            scrollTrigger: {
              trigger: ".blog__animation .blog__item",
              start: "top center+=300",
              markers: false,
            },
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 2,
            stagger: {
              each: 0.3,
            },
          });
        }
      });
      return () => tHero.revert();
      
    }
  }, [blogData]);
  return (
    <>
      <section className="blog__area no-pb blog__animation">
        <div className="container g-0 line pt-150 pb-140">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title">recent blog</h2>
                <h3 className="sec-title">News insignt</h3>
              </div>
            </div>
            {blogData && blogData.map((blog, i) => (
              <div key={i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <article className="blog__item">
                  <div className="blog__img-wrapper">
                    <Link href={blog.url}>
                      <div className="img-box">
                        <Image
                          loading="lazy"
                          width={500} // Set a fixed width
                          height={300} // Set a fixed height
                          style={{ objectFit: "cover" }}
                          className="image-box__item"
                          src={blog.images.heroImage.url}
                          alt={blog.images.heroImage.alt}
                        />
                        <Image
                          loading="lazy"
                          width={500} // Set a fixed width
                          height={300} // Set a fixed height
                          style={{ objectFit: "cover" }}
                          className="image-box__item"
                          src={blog.images.heroImage.url}
                          alt={blog.images.heroImage.alt}
                        />
                      </div>
                    </Link>
                  </div>
                  <h4 className="blog__meta">
                    <Link href={blog.url} aria-label={`Read more about ${blog.title}`}>{blog.category}</Link> . {blog.date}
                  </h4>
                  <h5>
                    <Link href={blog.url} className="blog__title" aria-label={`Read more about ${blog.title}`}>
                      {blog.title}
                    </Link>
                  </h5>
                  <Link href={blog.url} className="blog__btn"aria-label={`Read more about ${blog.title}`}>
                    <span style={{width:'1px',height:'1px',overflow:'hidden'}}>Read more about {blog.title}</span>
                    <p>Read More</p>
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyBlog;
