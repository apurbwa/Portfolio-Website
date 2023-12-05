const Contact = () => {
  return (
    <section className="section-contact" id="contact">
      <div className="u-fit-content">
        <div className="contact-row u-margin-bottom-top-big">
          <div className="contact-left">
            <div className="u-margin-bottom-medium">
              <p className="heading-paragraph-sub-1">- Let's Connect</p>
              <h3 className="heading-secondary u-margin-top-medium">
                Get in touch
              </h3>
              <p className="heading-paragraph u-margin-top-medium">
                I'm currently avaliable to take on new projects, so feel free to
                send me a message about anything that you want to run past me.
                You can contact anytime at 24/7
              </p>

              <div className="contact-info">
                <ul>
                  <li>+49 15757475368</li>
                  <li>apurbwa@gmail.com</li>
                  <li>Duisburg, Germany</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <form className="form">
              <div className="form__group u-margin-bottom-medium">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Name"
                  id="name"
                />
              </div>
              <div className="form__group u-margin-bottom-medium">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email"
                  id="email"
                />
              </div>
              <textarea
                className="textarea u-margin-bottom-medium"
                name=""
                id=""
                placeholder="Your Massage Here"
              ></textarea>

              <button className="btn-main">Submit now</button>
            </form>
          </div>
        </div>
        <div className="gmap u-margin-bottom-medium">
          <iframe
            width="100%"
            height="375"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159143.73590914064!2d6.563125999463242!3d51.4467561633321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8bef5a58b273b%3A0x427f281315473c0!2sDuisburg!5e0!3m2!1sen!2sde!4v1701819218470!5m2!1sen!2sde"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
