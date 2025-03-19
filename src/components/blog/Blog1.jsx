import animationCharCome from "@/lib/utils/animationCharCome";
import { fetchBlog } from "@/lib/utils/fetch";
import { ScrollTrigger } from "@/plugins";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Blog1 = () => {
  const charAnim = useRef();
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      const data = await fetchBlog("/api/blog");
      console.log(data)
      setBlogData(data);
    }
    fetchBlogData();

    animationCharCome(charAnim.current);
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
  }, []);
  return (
    <>
      {blogData && <section className="blog__area-6 blog__animation">
        <div className="container g-0 line pt-110 pb-110">
          <span className="line-3"></span>
          <div className="row pb-130">
            <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  We always <br />
                  think
                </h2>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
              <div className="blog__text">
                <p>
                  Explore insights, tips, and trends to elevate your brand strategy.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="row reset-grid">
            {blogData.map((blog, index) => {
              return (
                <div key={index} className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                  <article className="blog__item">
                    <div className="blog__img-wrapper">
                      <Link href={blog.url}>
                        <div className="img-box">
                          <Image
                            priority
                            width={400}
                            height={500}
                            className="image-box__item"
                            src={blog.images.heroImage.url}
                            alt={blog.images.heroImage.alt}
                          />
                          <Image
                            priority
                            width={400}
                            height={500}
                            className="image-box__item"
                            src={blog.images.heroImage.url}
                            alt={blog.images.heroImage.alt}
                          />
                        </div>
                      </Link>
                    </div>
                    <h4 className="blog__meta">
                      <Link href="/blog">Digital Marketing</Link> . {blog.date}
                    </h4>
                    <h5>
                      <Link href="/blog-details" className="blog__title">
                        {blog.title}
                      </Link>
                    </h5>
                    <Link href="/blog-details" className="blog__btn">
                      Read More{" "}
                      <span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </Link>
                  </article>
                </div>
              )
            })}
          </div>
        </div>
      </section>}
    </>
  );
};

export default Blog1;
