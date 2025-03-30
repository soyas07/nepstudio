import { SplitText } from "@/plugins";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { gsap } from "gsap";
import Image from "next/image.js";
import Link from "next/link.js";
import { useEffect, useRef } from "react";
import ArrowDownBig from "../../../public/assets/imgs/icon/arrow-down-big.png";

const DigitalAgencyHero = () => {
  const heroTitle = useRef();
  const heroSubTitle = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".experience", {
          y: 50,
          opacity: 0,
        });
        let split_hero__title = new SplitText(heroTitle.current, {
          type: "chars",
        });
        let split_hero__subtitle = new SplitText(heroSubTitle.current, {
          type: "chars words",
        });

        gsap.from(split_hero__title.chars, {
          duration: 0.5,
          x: 70,
          autoAlpha: 0,
          stagger: 0.1,
        });
        gsap.from(
          split_hero__subtitle.words,
          { duration: 0.2, x: 50, autoAlpha: 0, stagger: 0.05 },
          "-=0.5"
        );

        gsap.to(
          ".experience",
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.5"
        );
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="hero__area ">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__content animation__hero_one">
                <Link href="/contact">
                  Custom, Website Design & Development Solution{" "}
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
                <div className="hero__title-wrapper">
                  <h1 className="hero__title" ref={heroTitle}>
                    Web design <span className="hero__placeholder">&</span>studio
                  </h1>
                  <p className="hero__sub-title" >
                    We deliver fully custom, responsive, and
                     <span>expertly crafted website design & development</span>
                    tailored to your unique business needs—100% Aussie-based.
                  </p>
                </div>
                <div className="experience" style={{margin:"2rem 0"}}>
                  {/* <h2 className="title">100%</h2>
                  <p>
                    Custom Code <br />
                    & Design
                  </p> */}
                  <Link
                    className="btn-started"
                    id="btn-cta"
                    href="/contact"
                  >
                  Get Started
                </Link>
                </div>
                <Image
                  loading="lazy"
                  width={170}
                  style={{ height: "auto" }}
                  src={ArrowDownBig}
                  alt="Arrow Down Icon"
                />
                
              </div>
            </div>
          </div>
        </div>

          {/* <Image
            priority
            loading="eager"
            alt="hero background image"
            width={600}
            height={400}
            className="hero1_bg"
            src="/assets/imgs/hero/1/bg.webp"
          /> */}
      </section>
    </>
  );
};

export default DigitalAgencyHero;
