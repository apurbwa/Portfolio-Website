import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <section className="section-services" id="services">
      <div className="u-fit-content">
        <div className="services-row u-margin-bottom-top-big">
          <div className="u-margin-bottom-medium">
            <p className="heading-paragraph-sub-1">- services</p>
            <div>
              <h3 className="heading-secondary">My Services!</h3>
            </div>
          </div>

          <div className="services-grid">
            <div className="services-item">
              <p className="heading-paragraph-sub-1 u-font-size">01</p>
              <h3 className="heading-tertiary u-font-size u-margin-bottom-small">
                UI/UX design
              </h3>
              <p className="heading-paragraph u-margin-bottom-medium">
                web development is the process of building programming
              </p>
              <span className="heading-tertiary">
                read more <FaArrowRight />
              </span>
            </div>

            <div className="services-item">
              <p className="heading-paragraph-sub-1 u-font-size">01</p>
              <h3 className="heading-tertiary u-font-size u-margin-bottom-small">
                mobile application
              </h3>
              <p className="heading-paragraph u-margin-bottom-medium">
                web development is the process of building programming
              </p>
              <span className="heading-tertiary">
                read more <FaArrowRight />
              </span>
            </div>

            <div className="services-item">
              <p className="heading-paragraph-sub-1 u-font-size">01</p>
              <h3 className="heading-tertiary u-font-size u-margin-bottom-small">
                E-commerce
              </h3>
              <p className="heading-paragraph u-margin-bottom-medium">
                web development is the process of building programming
              </p>
              <span className="heading-tertiary">
                read more <FaArrowRight />
              </span>
            </div>

            <div className="services-item">
              <p className="heading-paragraph-sub-1 u-font-size">01</p>
              <h3 className="heading-tertiary u-font-size u-margin-bottom-small">
                animation
              </h3>
              <p className="heading-paragraph u-margin-bottom-medium">
                web development is the process of building programming
              </p>
              <span className="heading-tertiary">
                read more <FaArrowRight />
              </span>
            </div>

            <div className="services-item">
              <p className="heading-paragraph-sub-1 u-font-size">01</p>
              <h3 className="heading-tertiary u-font-size u-margin-bottom-small">
                game development
              </h3>
              <p className="heading-paragraph u-margin-bottom-medium">
                web development is the process of building programming
              </p>
              <span className="heading-tertiary">
                read more <FaArrowRight />
              </span>
            </div>
            <div className="services-item">
              <p className="heading-paragraph-sub-1 u-font-size">01</p>
              <h3 className="heading-tertiary u-font-size u-margin-bottom-small">
                web design
              </h3>
              <p className="heading-paragraph u-margin-bottom-medium">
                web development is the process of building programming
              </p>
              <span className="heading-tertiary">
                read more <FaArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
