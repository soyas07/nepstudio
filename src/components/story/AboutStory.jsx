import Story1 from "../../../public/assets/imgs/story/story-1.webp";
import Story2 from "../../../public/assets/imgs/story/story-2.webp";
import Story4 from "../../../public/assets/imgs/story/story-4.jpg";
import Image from "next/image";

const AboutStory = () => {
  return (
    <>
      <section className="story__area">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="sec-title-wrapper">
            <div className="from-text">
              from <span>2024</span>
            </div>

            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">Digital Studio</h2>
                <h3 className="sec-title title-anim">Our values</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p>
                    Your trusted partner in crafting bespoke, 
                    high-quality websites that fuel business growth and 
                    elevate your online presence. We specialize in custom-coded, 
                    SEO-optimized websites designed to meet your unique needs. 
                    At NEPSTUDIO, we aim to deliver websites that go beyond functionality, 
                    offering innovative and responsive designs tailored to reflect your vision and individuality.
                  </p>
                  <p>
                    We believe in thinking outside the box and delivering unique, 
                    forward-thinking solutions that set your brand apart.
                    We provide comprehensive web development services, and reliable 
                    hosting with ongoing support to ensure your site remains secure and efficient.
                    Ensuring your website looks and functions flawlessly on any device, 
                    leading to higher user satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="story__img-wrapper">
                <Image
                  priority
                  width={300}
                  style={{ height: "auto" }}
                  src={Story1}
                  alt="Story Thumbnail"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="story__img-wrapper img-anim">
                <Image
                  priority
                  width={520}
                  style={{ height: "auto" }}
                  src={Story2}
                  alt="Story Thumbnail"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="story__img-wrapper">
                <Image
                  priority
                  width={410}
                  style={{ height: "auto" }}
                  src={Story4}
                  alt="Story Thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutStory;
