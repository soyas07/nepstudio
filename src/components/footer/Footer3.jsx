import Image from "next/image";
import Link from "next/link";
import FooterLogoWhite from "../../../public/assets/imgs/logo/nepstudio-white-logo.png";
import ThumbFooter from "../../../public/assets/imgs/thumb/footer.webp";

export default function Footer3() {
  return (
    <>
      <footer className="footer__area">
        <div className="footer__top">
          <div className="container footer-line"></div>
          <Image
            priority
            loading="eager"
            width={1160}
            style={{ height: "100%" }}
            src={ThumbFooter}
            alt="Footer Image"
            data-speed="0.75"
          />
        </div>

        <div className="footer__btm">
          <div className="container">
            <div className="row footer__row">
              <div className="col-xxl-12">
                <div className="footer__inner">
                  <div className="footer__widget">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      className="footer__logo"
                      src={FooterLogoWhite}
                      alt="Footer Logo"
                    />
                    <p>
                      Custom-coded, SEO-optimized websites designed for business growth and digital success.
                    </p>
                    <ul className="footer__social">
                      <li>
                        <a href="http://facebook.com/" target="_blank" aria-label="Facebook">
                          <span>
                            <i className="fa-brands fa-facebook-f"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="http://twitter.com/" target="_blank" aria-label="Twitter">
                          <span>
                            <i className="fa-brands fa-twitter"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="http://instagram.com/" target="_blank" aria-label="Instagram">
                          <span>
                            <i className="fa-brands fa-instagram"></i>
                          </span>
                        </a>
                      </li>
                      {/* <li>
                        <a href="#">
                          <span>
                            <i className="fa-brands fa-linkedin"></i>
                          </span>
                        </a>
                      </li> */}
                    </ul>
                  </div>

                  <div className="footer__widget-2">
                    <h2 className="footer__widget-title">Information</h2>
                    <ul className="footer__link">
                      <li>
                        <Link href="/about">About Company</Link>
                      </li>
                      <li>
                        <Link href="/portfolio">Work</Link>
                      </li>
                      <li>
                        <Link href="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/contact">contact</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-3">
                    <h2 className="footer__widget-title">Contact Us</h2>
                    <ul className="footer__contact">
                      <li>Sydney, NSW, Australia</li>
                      <li>
                        <a href="mailto:info@nestudio.com.au">
                          info@nepstudio.com.au
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-4">
                    <h2 className="project-title">
                      Have a project in your mind?
                    </h2>
                    <div className="btn_wrapper">
                      <Link
                        href="/contact"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> contact us{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    {/* <h3 className="contact-time">09 : 00 AM - 10 : 30 PM</h3>
                    <h4 className="contact-day">Saturday - Thursday</h4> */}
                  </div>

                  <div className="footer__copyright">
                    <p>
                      © 2025 | All rights reserved by{" "}
                      <a href="https://nepstudio.com.au/" target="_blank">
                        <span style={{color:"white"}}>NEPSTUDIO</span>
                      </a>
                    </p>
                  </div>

                  {/* <div className="footer__subscribe">
                    <form action="#">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                      <button type="submit" className="subs-btn">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
