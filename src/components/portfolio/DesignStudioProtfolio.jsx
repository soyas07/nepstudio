import Image from "next/image";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Portfilio21 from "../../../public/assets/imgs/portfolio/2/portfolio-1.png";
import Portfilio22 from "../../../public/assets/imgs/portfolio/2/portfolio-2.jpg";

// Import Swiper styles
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const DesignStudioProtfolio = () => {
  return (
    <>
      <section className="portfolio__area-2">
        <div className="container g-0 line pt-100 pb-140">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper text-anim">
                <div>
                  <h2 className="title-anim sec-title-33" style={{ color: "#fff" }}>
                    Selected <span>Projects</span>
                  </h2>
                </div>
                <p className="sec-text">
                  View our work, reflecting unique solutions for diverse client needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__slider-2">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            spaceBetween={0}
            effect={"fade"}
            slidesPerView={1}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: function (i, className) {
                return `
                <button class="${className}">
                  <svg class="circle-progress"><circle class="circle-origin" r="24.5" cx="25" cy="25"></circle></svg><span></span>
                </button>
              `;
              },
            }}
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="/portfolio">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        src={Portfilio21}
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      {" "}
                      <Link href="/portfolio">
                        Profixer <span>Website</span>
                      </Link>
                    </h2>
                    <p>
                      The Profixer project involved a full rebranding initiative 
                      for a full spectrum of handyman solutions in the industry.
                    </p>
                    <p>  
                      When Profixer needed a professional and user-friendly website 
                      to showcase their full-spectrum handyman services, they turned 
                      to NepStudio for expert web design and development. They wanted 
                      a platform that was clean, intuitive, and easy to navigate, allowing 
                      customers to quickly explore services, book appointments, and request quotes effortlessly.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="/portfolio">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        src={Portfilio22}
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      <Link href="/portfolio">
                        MoversX <span>Website</span>
                      </Link>
                    </h2>
                    <p>
                      MoversX revolutionizes the moving experience with streamlined solutions
                       that prioritize speed and ease. From residential relocations to commercial moves,
                        we ensure a stress-free transition for our customers.
                    </p>
                    <p>
                      From initial consultations to final deployment, NepStudio worked closely 
                      with MoversX to ensure the website aligns with their brand identity and business goals. 
                      The result? A high-performance platform that enhances customer engagement, 
                      improves operational efficiency, and sets MoversX apart in the competitive moving industry. 
                      With NepStudio’s expertise, MoversX now has a website that moves as fast as they do!
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </div>

            <div className="swiper-pagination circle-pagination right"></div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DesignStudioProtfolio;
