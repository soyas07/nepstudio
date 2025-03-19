import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import { useEffect, useRef, useState } from "react";

const Contact1 = () => {
  const charAnim = useRef();
  const wordAnim = useRef();
  const nameInputRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }

    animationCharCome(charAnim.current);
    animationWordCome(wordAnim.current);
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Remove error for the field when user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  // Validate required fields
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus("Please fill in all required fields.");
      return;
    }

    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus(result.error || "Error sending message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <section className="contact__area-6">
        <div className="container g-0 line pt-120 pb-110">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Let&apos;s get in touch
                </h2>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="contact__text">
                <p>
                  {
                    "Great! We're excited to hear from you and let's start something special together. Call us for any inquiry."
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="row contact__btm">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="contact__info">
                <h3
                  className="sub-title-anim-top animation__word_come"
                  ref={wordAnim}
                >
                  {"Don't be afraid man ! "}
                  <br />
                  say hello
                </h3>
                <ul>
                  {/* <li>
                    <a href="tel:+(2)578365379">+(2) 578 - 365 - 379</a>
                  </li> */}
                  <li>
                    <a href="mailto:info@nepstudio.com.au">info@nepstudio.com.au</a>
                  </li>
                  <li>
                    <span>
                      Sydney, NSW <br /> Australia
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="contact__form">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input 
                        type="text" 
                        name="name" 
                        placeholder="Name *" 
                        ref={nameInputRef} 
                        value={formData.name}
                        onChange={handleChange}
                        style={{ border: errors.name ? "2px solid red" : "" }}
                      />
                      {errors.name && <p className="error-text">{errors.name}</p>}
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="Email *" 
                        value={formData.email}
                        onChange={handleChange}
                        style={{ border: errors.email ? "2px solid red" : "" }}
                      />
                      {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input type="tel" name="phone" placeholder="Phone" />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-12">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject *"
                        value={formData.subject}
                        onChange={handleChange}
                        style={{ border: errors.subject ? "2px solid red" : "" }}
                      />
                      {errors.subject && <p className="error-text">{errors.subject}</p>}
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <textarea
                        name="message"
                        placeholder="Message *"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ border: errors.message ? "2px solid red" : "" }}
                      ></textarea>
                      {errors.message && <p className="error-text">{errors.message}</p>}
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="btn_wrapper">
                        <button className="wc-btn-primary btn-hover btn-item" type="submit" disabled={status === "Sending..."}>
                          <span></span> Send <br />
                          Messages <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                {status && <p style={{marginTop:"2rem"}} className="status-message">{status}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact1;
