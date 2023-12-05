const About = () => {
  return (
    <section className="section-about" id="about">
      <div className="u-fit-content">
        <div className="about u-margin-bottom-top-big">
          <div className="about-row">
            <div className="about-left">
              <p className="heading-paragraph-sub-1">- Nice to meet you!</p>
              <h2 className="heading-secondary ">Apurbwa Kumar</h2>
              <p className="heading-tertiary u-margin-bottom-medium">
                Fullstack Web Developer
              </p>
              <button className="btn-main">got a project</button>
            </div>

            <div className="about-right">
              <p className="heading-paragraph u-margin-bottom-big">
                Hello there! My name is{" "}
                <span className="u-font-color-1">Apurbwa Kumar</span>. I am a Fullstack web
                 developer, and I'm very passionate and dedicated to my work.
                <br />
                <br /> With 4 years of hands-on experience in full-stack development, I've honed the skills and expertise needed to elevate your project to success. I thrive on the entire development cycle, relishing in brainstorming, collaboration, and crafting innovative solutions at every stage.
              </p>

              <div className="about-contact">
                <div>
                  <p className="about-contact-info">Age</p>
                  <p className="heading-tertiary ">30</p>
                </div>
                <div>
                  <p className="about-contact-info">Born In</p>
                  <p className="heading-tertiary">Dhaka, Bangladesh</p>
                </div>
                <div>
                  <p className="about-contact-info">Mail</p>
                  <p className="heading-tertiary">apurbwa@gmail.com</p>
                </div>
                <div>
                  <p className="about-contact-info">phone</p>
                  <p className="heading-tertiary">+49 15757475368</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-grid">
            <div className="grid-item-1">
              <h2 className="heading-secondary">4+</h2>
              <p className="heading-paragraph-sub-1">Years of Experience</p>
            </div>
            <div className="grid-item-2">
              <h2 className="heading-secondary">50+</h2>
              <p className="heading-paragraph-sub-1">Projects Completed</p>
            </div>
            <div className="grid-item-3">
              <h2 className="heading-secondary">30+</h2>
              <p className="heading-paragraph-sub-1">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
