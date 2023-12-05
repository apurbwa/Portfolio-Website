import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Project = () => {
  return (
    <section className="section-project" id="portfolio">
      <div className="u-fit-content">
        <div className="project-row u-margin-bottom-top-big">
          <div className="u-margin-bottom-medium">
            <p className="heading-paragraph-sub-1">- Projects</p>
            <h3 className="heading-secondary">Recent completed works</h3>
          </div>

          <div className="project-slider u-margin-bottom-medium">
            <Swiper
              navigation={true}
              slidesPerView={3}
              spaceBetween={30}
              breakpoints={{
                900: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                600: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                100: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="slider-item">
                  <div className="u-margin-bottom-medium">
                    <img
                      
                      src="https://images.unsplash.com/photo-1634084462412-b54873c0a56d?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>

                  <div>
                    <p className="heading-paragraph-sub-1 ">Website</p>
                    <h3 className="heading-tertiary u-font-size u-line-effect">
                      new technology
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-item">
                  <div className="u-margin-bottom-medium">
                    <img
                      src="https://images.unsplash.com/photo-1634084462412-b54873c0a56d?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>

                  <div>
                    <p className="heading-paragraph-sub-1 ">Website</p>
                    <h3 className="heading-tertiary u-font-size u-line-effect">
                      new technology
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-item">
                  <div className="u-margin-bottom-medium">
                    <img
                      src="https://images.unsplash.com/photo-1634084462412-b54873c0a56d?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>

                  <div>
                    <p className="heading-paragraph-sub-1 ">Website</p>
                    <h3 className="heading-tertiary u-font-size u-line-effect">
                      new technology
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-item">
                  <div className="u-margin-bottom-medium">
                    <img
                      src="https://images.unsplash.com/photo-1634084462412-b54873c0a56d?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>

                  <div>
                    <p className="heading-paragraph-sub-1 ">Website</p>
                    <h3 className="heading-tertiary u-font-size u-line-effect">
                      new technology
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="text-center ">
            <button className="btn-main ">view all project</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
