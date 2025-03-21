import { ScrollSmoother, ScrollTrigger } from "@/plugins";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import About11 from "../../../public/assets/imgs/about/1/about-1.jpg";
import About12 from "../../../public/assets/imgs/about/1/about-2.jpg";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const DigitalAgencyAbout = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        ScrollSmoother.create({
          smooth: 1.35,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="about__area">
        <div className="container line g-0 pt-140 pb-130">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="about__title-wrapper">
                <h3 className="sec-title title-anim">
                  We unlock the potential of your business with creative design
                </h3>
              </div>

              <div className="about__content-wrapper">
                <div className="about__img">
                  <div className="img-anim about__img_left">
                    <Image
                      loading="eager"
                      priority
                      style={{width: "100%", height: "100%"}}
                      src={About11}
                      alt="About Image"
                      srcSet="/assets/imgs/about/1/about-1.jpg 1x"
                      data-speed="0.3"
                    />
                  </div>

                  <div className="about__img-right">
                    <Image
                      loading="eager"
                      priority
                      width={220}
                      height={220}
                      style={{ objectFit: "cover" }}
                      src={About12}
                      srcSet="
                        /assets/imgs/about/1/about-2.jpg 1x,
                        /assets/imgs/about/1/about-2.jpg 2x
                      "
                      alt="About Image Right"
                      data-speed="0.5"
                    />
                    <div className="shape">
                      <div className="secondary" data-speed="0.9"></div>
                      <div className="primary"></div>
                    </div>
                  </div>
                </div>

                <div className="about__content text-anim">
                  <p>
                    From custom-coded, high-performance websites to SEO-driven 
                    strategies and responsive designs, we ensure your online presence 
                    is both impactful and future-proof. Unlike cookie-cutter templates, 
                    our tailored solutions are designed to reflect your brand’s unique 
                    identity while maximizing speed, engagement, and conversions. 
                  </p>

                  <div className="cursor-btn btn_wrapper">
                    <Link
                      className="btn-item wc-btn-primary btn-hover"
                      href="/about"
                    >
                      <span></span> Explore Us{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyAbout;
