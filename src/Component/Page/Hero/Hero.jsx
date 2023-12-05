import MyImage from '../../../assets/avater/image-myself.png'

const Hero = () => {
  return (
    <section className="section-hero" id="home">
      <div className="u-fit-content">
        <div className="hero-row">
          <div className="left-hero u-margin-bottom-top-big">
            <h1 className="heading-primary u-margin-bottom-medium">
              Hi, I'm <span className="u-font-color">Apurbwa</span> <br />{" "}
              Creative Coder <br /> Based in Germany
            </h1>
            <p className="heading-paragraph u-margin-bottom-medium">
              I'm a Fullstack Web Developer <br /> with
              <span className="u-font-color"> 4+ years</span> of experience
            </p>
            <div className="u-margin-bottom-big hero-btn">
              <button className="btn-main">got a project?</button>
              <button className="btn-outline">let's talk</button>
            </div>
            <div className="contact-list">
              <ul>
                <li>+49 15757475368</li>
                <li>apurbwa@gmail.com</li>
                <li>Duisburg, Germany</li>
              </ul>
            </div>
          </div>

          <div className="right-hero">
            <img
              src={MyImage}
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
