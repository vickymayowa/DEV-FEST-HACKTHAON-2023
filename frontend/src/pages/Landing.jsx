import React from "react";
// import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="#;">
              <span className="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </a>
            <a href="index-2.html" className="navbar-brand logo">
              <img
                src="https://t4.ftcdn.net/jpg/01/04/68/75/240_F_104687503_P30SeVRxRXYxyItYj9Vm5kOztwosjb0z.jpg"
                className="img-fluid"
                alt="Logo"
              />
            </a>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <a href="index-2.html" className="menu-logo">
                <img src="" className="img-fluid" alt="Logo" />
              </a>
              <a id="menu_close" className="menu-close" href="#;">
                <i className="fas fa-times"></i>
              </a>
            </div>
            <ul className="main-nav">
              <li className="active">
                <a href="index-2.html">Home</a>
              </li>
              <li className="has-submenu">
                <a href="#">
                  Doctors <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="">Doctor Dashboard</a>
                  </li>
                  <li>
                    <a href="">Appointments</a>
                  </li>
                  <li>
                    <a href="/doctor/register">Doctor Login</a>
                  </li>
                  <li>
                    <a href="">Schedule Timing</a>
                  </li>
                  <li>
                    <a href="">Patients List</a>
                  </li>
                  <li>
                    <a href="">Patients Profile</a>
                  </li>
                  <li>
                    <a href="">Chat</a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="#">
                  Patients <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="">Booking</a>
                  </li>
                  <li>
                    <a href="">Booking Success</a>
                  </li>
                  <li>
                    <a href="">Patient Dashboard</a>
                  </li>
                  <li>
                    <a href="">Chat</a>
                  </li>
                </ul>
              </li>
              <li className="login-link">
                <a href="">Login / Signup</a>
              </li>
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            <li className="nav-item contact-item">
              <div className="header-contact-img">
                <i className="far fa-hospital"></i>
              </div>
              <div className="header-contact-detail">
                <p className="contact-header">Contact</p>
                <p className="contact-info-header"> +234 903 721 1278</p>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link header-login" href="">
                login / Signup{" "}
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="section section-search">
        <div className="container-fluid">
          <div className="banner-wrapper">
            <div className="banner-header text-center">
              <h1>Make an Appointment</h1>
              <p>
                Discover the best doctors, clinic & hospital the city nearest to
                you.
              </p>
            </div>
            <div className="search-box">
              <form action="">
                <div className="form-group search-location">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Location"
                  />
                  <span className="form-text" hidden>
                    Based on your Location
                  </span>
                </div>
                <div className="form-group search-info">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc"
                  />
                </div>
                <button type="submit" className="btn btn-primary search-btn">
                  <i className="fas fa-search"></i> <span>Search</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-specialities">
        <div className="container-fluid">
          <div className="section-header text-center justify-content-space-between">
            <h2>Clinic and Specialities</h2>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-9 d-flex justify-content-center">
              <div className="specialities-slider slider d-flex">
                <div className="speicality-item text-center">
                  <div className="speicality-img">
                    <span>
                      <i className="fa fa-circle" aria-hidden="true"></i>
                    </span>
                  </div>
                  <p>Urology</p>
                </div>
                <div className="speicality-item text-center">
                  <div className="speicality-img">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                  </div>
                  <p>Neurology</p>
                </div>
                <div className="speicality-item text-center">
                  <div className="speicality-img">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                  </div>
                  <p>Orthopedic</p>
                </div>
                <div className="speicality-item text-center">
                  <div className="speicality-img">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                  </div>
                  <p>Cardiologist</p>
                </div>
                <div className="speicality-item text-center">
                  <div className="speicality-img">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                  </div>
                  <p>Dentist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* book a doctor */}
      <section className="section section-doctor">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-header ">
                <h2>Book Our Doctor</h2>
              </div>
              <div className="about-content">
                <p>
                  In the rapidly advancing field of health technology, staying
                  focused on the latest innovations is crucial. Our commitment
                  is to provide you with up-to-date information and insights
                  that will keep you informed about the cutting-edge
                  developments in healthcare technology.
                </p>
                <p>
                  Health tech professionals and enthusiasts alike turn to our
                  platform as a valuable resource. We strive to deliver content
                  that reflects the ongoing evolution of health technology,
                  ensuring you stay ahead in this dynamic industry.
                </p>

                <a href="">Read More..</a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="doctor-slider slider d-flex justify-content-between">
                <div className="profile-widget">
                  <div className="doc-img">
                    <a href="doctor-profile.html">
                      <img
                        className="img-fluid"
                        alt="User Image"
                        src="https://media.gettyimages.com/id/510414344/photo/female-doctor-at-the-hospital.jpg?s=612x612&w=0&k=20&c=7jGo4i4yP41GevKYyOU8xa4_2slLsaA0hsomL28qxhU="
                      />
                    </a>
                    <a href="#" className="fav-btn">
                      <i className="far fa-bookmark"></i>
                    </a>
                  </div>
                  <div className="pro-content">
                    <h3 className="title">
                      <a href="doctor-profile.html">Ruby Perrin</a>
                      <i className="fas fa-check-circle verified"></i>
                    </h3>
                    <p className="speciality">
                      MDS - Periodontology and Oral Implantology, BDS
                    </p>
                    <div className="rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <span className="d-inline-block average-rating">
                        (17)
                      </span>
                    </div>
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt"></i> Florida, USA
                      </li>
                      <li>
                        <i className="far fa-clock"></i> Available on Fri, 22
                        Mar
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt"></i> $300 - $1000
                        <i
                          className="fas fa-info-circle"
                          data-toggle="tooltip"
                          title="Lorem Ipsum"
                        ></i>
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <a href="doctor-profile.html" className="btn view-btn">
                          View Profile
                        </a>
                      </div>
                      <div className="col-6">
                        <a href="" className="btn book-btn">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile-widget">
                  <div className="doc-img">
                    <a href="doctor-profile.html">
                      <img
                        className="img-fluid"
                        alt="User Image"
                        src="https://media.gettyimages.com/id/1053401358/photo/female-doctor-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=9X7uj3xCOwNE-PcqPy7VNowiU1BgmDeBCeX6Lg_r8tY="
                      />
                    </a>
                    <a href="#" className="fav-btn">
                      <i className="far fa-bookmark"></i>
                    </a>
                  </div>
                  <div className="pro-content">
                    <h3 className="title">
                      <a href="doctor-profile.html">Paul Richard</a>
                      <i className="fas fa-check-circle verified"></i>
                    </h3>
                    <p className="speciality">
                      MBBS, MD - Dermatology , Venereology & Lepros
                    </p>
                    <div className="rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star"></i>
                      <span className="d-inline-block average-rating">
                        (49)
                      </span>
                    </div>
                    <ul className="available-info">
                      <li>
                        <i className="fas fa-map-marker-alt"></i> California,
                        USA
                      </li>
                      <li>
                        <i className="far fa-clock"></i> Available on Fri, 22
                        Mar
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt"></i> $100 - $400
                        <i
                          className="fas fa-info-circle"
                          data-toggle="tooltip"
                          title="Lorem Ipsum"
                        ></i>
                      </li>
                    </ul>
                    <div className="row row-sm">
                      <div className="col-6">
                        <a href="doctor-profile.html" className="btn view-btn">
                          View Profile
                        </a>
                      </div>
                      <div className="col-6">
                        <a href="booking.html" className="btn book-btn">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-features">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-5 features-img">
              <img
                src="https://thumbs.dreamstime.com/b/health-medical-insurance-health-medical-life-insurance-whole-family-concept-practitioner-doctor-protective-101374272.jpg?w=360"
                alt="Feature"
              />
            </div>
            <div class="col-md-7">
              <div class="section-header">
                <h2 class="mt-2 mx-auto">Availabe Features in Our Clinic</h2>
                <p>
                  Empowering healthier lives through innovative technology. Your
                  wellness journey starts here. Discover the future of health
                  with us.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="footer-top">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="footer-widget footer-about">
                  <div class="footer-logo">
                    <img
                      src="https://t4.ftcdn.net/jpg/01/04/68/75/240_F_104687503_P30SeVRxRXYxyItYj9Vm5kOztwosjb0z.jpg"
                      className="img-fluid"
                      alt="logo"
                    />
                  </div>
                  <div class="footer-about-content">
                    <p>
                      Empowering healthier lives through innovative technology.
                      Your wellness journey starts here. Discover the future of
                      health with us.
                    </p>
                    <div class="social-icon">
                      <ul>
                        <li>
                          <a href="#" target="_blank">
                            <i class="fab fa-facebook-f"></i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i class="fab fa-twitter"></i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i class="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i class="fab fa-dribbble"></i>{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="footer-widget footer-menu">
                  <h2 class="footer-title">For Patients</h2>
                  <ul>
                    <li>
                      <a href="">
                        <i class="fas fa-angle-double-right"></i> Search for
                        Doctors
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i class="fas fa-angle-double-right"></i> Login
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i class="fas fa-angle-double-right"></i> Register
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i class="fas fa-angle-double-right"></i> Booking
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i class="fas fa-angle-double-right"></i> Patient
                        Dashboard
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="footer-widget footer-menu">
                  <h2 class="footer-title">For Doctors</h2>
                  <ul>
                    <li>
                      <a href="">
                        <i class="fas fa-angle-double-right"></i> Appointments
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i class="fas fa-angle-double-right"></i> Chat
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i class="fas fa-angle-double-right"></i> Login
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i class="fas fa-angle-double-right"></i> Register
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i class="fas fa-angle-double-right"></i> Doctor
                        Dashboard
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="footer-widget footer-contact">
                  <h2 class="footer-title">Contact Us</h2>
                  <div class="footer-contact-info">
                    <div class="footer-address">
                      <span>
                        <i class="fas fa-map-marker-alt"></i>
                      </span>
                      <p>
                        {" "}
                        3556 Beech Street, San Francisco,
                        <br /> California, CA 94108{" "}
                      </p>
                    </div>
                    <p>
                      <i class="fas fa-phone-alt"></i>
                      +1 315 369 5943
                    </p>
                    <p class="mb-0">
                      <i class="fas fa-envelope"></i>
                      support@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container-fluid">
            <div class="copyright">
              <div class="row">
                <div class="col-md-6 col-lg-6">
                  <div class="copyright-text">
                    <p class="mb-0">
                      <a href="https://linktr.ee/vickydev">Vicky Dev</a>
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6">
                  <div class="copyright-menu">
                    <ul class="policy-menu">
                      <li>
                        <a href="">Terms and Conditions</a>
                      </li>
                      <li>
                        <a href="">Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing;
