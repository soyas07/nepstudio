import { ScrollTrigger } from "@/plugins";
import Service11 from "@assets/imgs/service/1/service-1.webp";
import Service13 from "@assets/imgs/service/1/service-3.webp";
import Service14 from "@assets/imgs/service/1/service-4.webp";
import Service12 from "@assets/imgs/service/1/service.webp";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const DigitalAgencyService = () => {
  const [activeList, setActiveList] = useState(1);
  const [activeImg, setActiveImg] = useState(1);
  const [activeShape, setActiveShape] = useState(1);

  const serviceList = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let listItem = serviceList.current.children;
      console.log(listItem);
      for (let i = 0; i < listItem.length; i++) {
        listItem[i].addEventListener("mousemove", function (e) {
          var service_id = this.getAttribute("data-service");
          setActiveImg(parseInt(service_id));
          setActiveShape(parseInt(service_id));

          if (service_id != 1) {
            setActiveList(0);
          }
        });

        listItem[i].addEventListener("mouseout", function (e) {
          var service_id = this.getAttribute("data-service");
          setActiveList(parseInt(service_id));
        });
      }

      let tHero = gsap.context(() => {
        let home1_services = gsap.utils.toArray(".animation_home1_service");
        let service__number = gsap.utils.toArray(
          ".animation_home1_service .service__number span"
        );
        let service__title = gsap.utils.toArray(
          ".animation_home1_service .service__title"
        );
        let service__text = gsap.utils.toArray(
          ".animation_home1_service .service__text p"
        );
        let service__link = gsap.utils.toArray(
          ".animation_home1_service .service__link p"
        );

        home1_services.forEach((service, i) => {
          gsap.set(
            [
              service__number[i],
              service__title[i],
              service__text[i],
              service__link[i],
            ],
            { opacity: 0, x: -50 }
          );

          let home1ServiceTl = gsap.timeline({
            scrollTrigger: {
              trigger: service,
              start: "top center+=300",
              end: "bottom bottom",
              markers: false,
            },
          });

          home1ServiceTl.to(service__number[i], {
            x: 0,
            opacity: 1,
            duration: 1.2,
          });
          home1ServiceTl.to(
            service__title[i],
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
            },
            "-=1"
          );
          home1ServiceTl.to(
            service__text[i],
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
            },
            "-=1"
          );
          home1ServiceTl.to(
            service__link[i],
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
            },
            "-=1"
          );
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area pt-110 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="sec-title-wrapper wrap">
                <h2 className="sec-sub-title title-anim">service</h2>
                <h3 className="sec-title title-anim">
                  Solution we <br />
                  provide
                </h3>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="service__top-text text-anim">
                <p>
                  With every single one of our clients we bring forth a deep
                  passion for <span>creative problem solving innovations</span>{" "}
                  forward thinking brands boundaries
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="service__top-btn">
                <div className="btn_wrapper">
                  <Link
                    href="/service"
                    className="btn-item wc-btn-secondary btn-hover"
                  >
                    <span></span> View <br />
                    all services <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="service__list-wrapper">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-0 col-md-0">
                <div className="service__img-wrapper">
                  <Image
                    loading="lazy"
                    width={280}
                    style={{ height: "auto" }}
                    src={Service11}
                    srcSet="
                        /assets/imgs/service/1/service-1.jpg 1x,
                        /assets/imgs/service/1/service-1.jpg 2x
                      "
                    alt="Service Image"
                    className={
                      activeImg == 1
                        ? "service__img img-1 active"
                        : "service__img img-1"
                    }
                  />
                  <Image
                    loading="lazy"
                    width={280}
                    style={{ height: "auto" }}
                    src={Service12}
                    srcSet="
                        /assets/imgs/service/1/service.jpg 1x,
                        /assets/imgs/service/1/service.jpg 2x
                      "
                    alt="Service Image"
                    className={
                      activeImg == 2
                        ? "service__img img-2 active"
                        : "service__img img-2"
                    }
                  />
                  <Image
                    loading="lazy"
                    width={280}
                    height={373}
                    style={{ objectFit: "cover" }}
                    src={Service13}
                    srcSet="
                        /assets/imgs/service/1/service-3.jpg 1x,
                        /assets/imgs/service/1/service-3.jpg 2x
                      "
                    alt="Service Image"
                    className={
                      activeImg == 3
                        ? "service__img img-3 active"
                        : "service__img img-3"
                    }
                  />
                  <Image
                    priority
                    loading="eager"
                    width={280}
                    style={{ height: "auto" }}
                    src={Service14}
                    alt="Service Image"
                    srcSet="
                        /assets/imgs/service/1/service-4.jpg 1x,
                        /assets/imgs/service/1/service-4.jpg 2x
                      "
                    className={
                      activeImg == 4
                        ? "service__img img-4 active"
                        : "service__img img-4"
                    }
                  />

                  <span
                    className={
                      activeShape == 1
                        ? "shapes shape-box-1 current"
                        : "shapes shape-box-1"
                    }
                  ></span>
                  <span
                    className={
                      activeShape == 2
                        ? "shapes shape-box-2 current"
                        : "shapes shape-box-2"
                    }
                  ></span>
                  <span
                    className={
                      activeShape == 3
                        ? "shapes shape-box-3 current"
                        : "shapes shape-box-3"
                    }
                  ></span>
                  <span
                    className={
                      activeShape == 4
                        ? "shapes shape-box-4 current"
                        : "shapes shape-box-4"
                    }
                  ></span>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
                <div className="service__list" ref={serviceList}>
                  <Link
                    href="/service"
                    className={activeList == 1 ? "active" : ""}
                    data-service="1"
                  >
                    <div className="service__item animation_home1_service">
                      <div className="service__number">
                        <span>01</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          Custom Web Design Development
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                          We create, 100% custom coded & design, 
                          tailored websites optimized for high conversion rates
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/service"
                    className={activeList == 2 ? "active" : ""}
                    data-service="2"
                  >
                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>02</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          Optimized <br />
                          Performance
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                          Google prioritizes performant websites in search results, 
                          improving your site&apos;s visibility and SEO performance.
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/service"
                    className={activeList == 3 ? "active" : ""}
                    data-service="3"
                  >
                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>03</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          Mobile <br />
                          Responsive Design
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                          Ensuring your website looks and functions flawlessly
                           on any device, leading to higher user satisfaction.
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/service"
                    className={activeList == 4 ? "active" : ""}
                    data-service="4"
                  >
                    <div className="service__item  animation_home1_service">
                      <div className="service__number">
                        <span>04</span>
                      </div>
                      <div className="service__title-wrapper">
                        <h4 className="service__title">
                          Manage Google Business Profile
                        </h4>
                      </div>
                      <div className="service__text">
                        <p>
                          Ensuring your Google Business Profile stays optimized and engaging, leading to increased visibility and customer trust.
                        </p>
                      </div>
                      <div className="service__link">
                        <p>
                          <i className="fa-solid fa-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyService;
