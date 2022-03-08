import React from "react";

function FooterBar() {
  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a className="footer-social pl-5" href="https://www.facebook.com">
              <img src="/images/facebook.svg" alt="facebook" />
            </a>
            <a className="footer-social pl-5" href="https://www.instagram.com">
              <img src="/images/instagram.svg" alt="instagram" />
            </a>
            <a className="footer-social pl-5" href="https://www.twitter.com">
              <img src="/images/twitter.svg" alt="twitter" />
            </a>
            <a className="footer-social pl-5" href="https://www.linkedin.com">
              <img src="/images/linkedin.svg" alt="linkedin" />
            </a>
            <a className="footer-social pl-5" href="https://www.github.com">
              <img src="/images/github.svg" alt="github" />
            </a>
          </div>
        </section>
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>BLOCKTONATE
                </h6>
                <p>
                  BLOCKTONATE is an online platform that connects economical donations directly with the people in need though the use of blockchain technology.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Technologies</h6>
                <p>
                  <a href="https://reactjs.org/" className="text-reset">
                    ReactJS
                  </a>
                </p>
                <p>
                  <a href="https://nodejs.org/en/" className="text-reset">
                    NodeJS
                  </a>
                </p>
                <p>
                  <a href="http://expressjs.com/" className="text-reset">
                    Express
                  </a>
                </p>
                <p>
                  <a href="https://mongodb.com/" className="text-reset">
                    MongoDB
                  </a>
                </p>
                <p>
                  <a href="https://mongoosejs.com/" className="text-reset">
                    Mongoose
                  </a>
                </p>
                <p>
                  <a href="https://heroku.com" className="text-reset">
                    Heroku
                  </a>
                </p>
                <p>
                  <a href="https://www.netlify.com/" className="text-reset">
                    Netlify
                  </a>
                </p>

                <p>
                  <a href="https://getbootstrap.com/" className="text-reset">
                    React Bootstrap
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a
                    href="https://github.com/dkchkrso/blocktonate-client.git"
                    className="text-reset"
                  >
                    GitHub Client
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/dkchkrso/blocktonate-server.git"
                    className="text-reset"
                  >
                    GitHub Server
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <a className="footer-contact" href="#!" className="pl-5">
                    <img src="/images/home.svg" alt="home" />
                  </a>{" "}
                  Billund, Åstvej 1, DK
                </p>
                <p>
                  <a className="footer-contact" href="#!" className="pl-5">
                    <img src="/images/mail.svg" alt="mail" />
                  </a>{" "}
                  blocktonate@crypto.com
                </p>
                <p>
                  <a className="footer-contact" href="#!" className="pl-5">
                    <img src="/images/phone.svg" alt="phone" />
                  </a>{" "}
                  +45 79 50 60 70
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default FooterBar;
