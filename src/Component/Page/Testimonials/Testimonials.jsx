// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="section-testimonials" id="testimonials">
      <div className="u-fit-content">
        <div className="testimonials-row">
          <div className="u-margin-bottom-medium u-text-center">
            <p className="heading-paragraph-sub-1">- Testimonial</p>
            <h3 className="heading-secondary">What client's say?</h3>
          </div>

          <div className="testimonials">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="testimonial-item">
                  <p className="u-font-size heading-paragraph u-margin-bottom-medium">
                    I rarely like to write reviews, but the Marketify team truly
                    deserve a standing ovation for their customer support,
                    customisation and most importantly, friendliness and
                    professionalism.
                  </p>

                  <div className="testimonial-clint u-margin-bottom-small">
                    <img
                      src="https://jacksonandmorris.co.uk/wp-content/uploads/2017/04/default-user.png"
                      alt=""
                    />
                    <h3 className="heading-secondary">john doe</h3>
                  </div>
                  <p className="heading-paragraph">
                    ser Interface Design at PCL Lab
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-item">
                  <p className="u-font-size heading-paragraph u-margin-bottom-medium">
                    I rarely like to write reviews, but the Marketify team truly
                    deserve a standing ovation for their customer support,
                    customisation and most importantly, friendliness and
                    professionalism.
                  </p>

                  <div className="testimonial-clint u-margin-bottom-small">
                    <img
                      src="https://jacksonandmorris.co.uk/wp-content/uploads/2017/04/default-user.png"
                      alt=""
                    />
                    <h3 className="heading-secondary">john doe</h3>
                  </div>
                  <p className="heading-paragraph">
                    ser Interface Design at PCL Lab
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-item">
                  <p className="u-font-size heading-paragraph u-margin-bottom-medium">
                    I rarely like to write reviews, but the Marketify team truly
                    deserve a standing ovation for their customer support,
                    customisation and most importantly, friendliness and
                    professionalism.
                  </p>

                  <div className="testimonial-clint u-margin-bottom-small">
                    <img
                      src="https://jacksonandmorris.co.uk/wp-content/uploads/2017/04/default-user.png"
                      alt=""
                    />
                    <h3 className="heading-secondary">john doe</h3>
                  </div>
                  <p className="heading-paragraph">
                    ser Interface Design at PCL Lab
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
