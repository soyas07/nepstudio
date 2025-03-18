import animationCharCome from "@/lib/utils/animationCharCome";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";

const Faq1 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
      <section className="faq__area-6">
        <div className="container g-0 line pt-130 pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  FAQ
                </h2>
                <p className="">
                  Frequently asked question (FAQ) <br /> pages to find answars.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="faq__list-6">
                <Accordion
                  defaultActiveKey="0"
                  className="accordion"
                  id="accordionExample"
                >
                  <Accordion.Item eventKey="0" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingOne"
                    >
                      What services do you offer?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        We offer a comprehensive web design and development, 
                        coding, testing, hosting, and delivering fully functional 
                        and visually appealing websites tailored to your business needs. 
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingTwo"
                    >
                      How long does a typical project take?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        The project is estimated to take 4-6 weeks for design and development, 
                        during which the agreed-upon deliverables will be completed. 
                        However, the timeline is contingent upon the client&apos;s availability and timely responses.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingThree"
                    >
                      Do you provide revisions on design?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        Yes, we offer revisions to ensure the final product meets your expectations.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingFour"
                    >
                      Will my website be mobile-friendly?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        Absolutely! We design responsive websites that look great and 
                        function seamlessly across all devices, including mobile and tablets.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4" className="accordion-item">
                    <Accordion.Header
                      className="accordion-header"
                      id="headingFive"
                    >
                      Can I make changes to the website during development?
                    </Accordion.Header>

                    <Accordion.Body className="accordion-body">
                      <p>
                        Yes, client can propose modifications during the development phase. 
                        However, all changes must be agreed upon in writing and 
                        may result in adjustments to the timeline or additional fees.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq1;
