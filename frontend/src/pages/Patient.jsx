import React from "react";

const Patient = () => {
  return (
    <>
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div class="profile-sidebar">
                <div class="widget-profile pro-widget-content">
                  <div class="profile-info-widget">
                    <a href="#" class="booking-doc-img">
                      <img
                        src="assets/img/patients/patient.jpg"
                        alt="User Image"
                      />
                    </a>
                    <div class="profile-det-info">
                      <h3>Richard Wilson</h3>
                      <div class="patient-details">
                        <h5>
                          <i class="fas fa-birthday-cake"></i> 24 Jul 1983, 38
                          years
                        </h5>
                        <h5 class="mb-0">
                          <i class="fas fa-map-marker-alt"></i> Newyork, USA
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="dashboard-widget">
                  <nav class="dashboard-menu">
                    <ul>
                      <li class="active">
                        <a href="patient-dashboard.html">
                          <i class="fas fa-columns"></i>
                          <span>Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i class="fas fa-bookmark"></i>
                          <span>Favourites</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i class="fas fa-comments"></i>
                          <span>Message</span>
                          <small class="unread-msg">00</small>
                        </a>
                      </li>
                      <li>
                        <a href="/user/book">
                          <i class="fas fa-comments"></i>
                          <span>Book Appointment</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i class="fas fa-user-cog"></i>
                          <span>Profile Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i class="fas fa-lock"></i>
                          <span>Change Password</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i class="fas fa-sign-out-alt"></i>
                          <span>Logout</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div class="col-md-7 col-lg-8 col-xl-9">
              <div class="card">
                <div class="card-body pt-0">
                  <nav class="user-tabs mb-4">
                    <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                      <li class="nav-item">
                        <a class="nav-link active" href="">
                          Appointments
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="">
                          Prescriptions
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="">
                          <span class="med-records">Medical Records</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="">
                          Billing
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="tab-content pt-0">
                  <div id="pat_appointments" class="tab-pane fade show active">
                    <div class="card card-table mb-0">
                      <div class="card-body">
                        <div class="table-responsive">
                          <table class="table table-hover table-center mb-0">
                            <thead>
                              <tr>
                                <th>Doctor</th>
                                <th>Appt Date</th>
                                <th>Booking Date</th>
                                <th>Amount</th>
                                <th>Follow Up</th>
                                <th>Status</th>
                                <th></th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patient;
