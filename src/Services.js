import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Menu from "./Menu";
const promotionsImage = require("./assets/promotions.jpeg");
const check = require("./assets/check.svg");

export default function Services() {
  const [data, setdata] = useState({
    otp: "",
    service: "",
    name: "",
    email: "",
    mobile: "",
    schoolCollegeUniversity: "",

    lastDegreeHeld: "",
    courseDegIntrested: "",
    desiredLocation: "",

    percentage: "",
    professionIntrested: "",
    comments: "",
  });
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  useEffect(() => {
    reveal();
  }, []);
  window.addEventListener("scroll", reveal);
  return (
    <div>
      <Menu />
      <section className="">
        <div className="">
          <h1
            className="text-center"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <marquee>
              <strong>Our Services</strong>
            </marquee>
          </h1>
          <div className="vc-orange-1 side-spacer reveal" id="promotions">
            <h2
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span class="material-symbols-rounded display-2">campaign</span>
              <span className="mx-2">Promotions</span>
            </h2>
            <div className="row m-0 justify-content-center">
              <div className="col-md-6">
                <div className="row m-0 align-items-center p-2 reveal">
                  <div className="col-2 text-end  p-1">
                    <img style={{ width: "2rem" }} src={check} alt="ckh" />
                  </div>
                  <h5 className="col text-start  p-1">
                    We take up marketing activities for Schools, Colleges and
                    Universities.
                  </h5>
                </div>
                <div className="row m-0 align-items-center p-2 reveal">
                  <div className="col-2 text-end p-1">
                    <img style={{ width: "2rem" }} src={check} alt="ckh" />
                  </div>
                  <h5 className="col text-start  p-1">
                    Kiosk to Edufairs & Edusummits.
                  </h5>
                </div>
                <div className="row m-0 align-items-center p-2 reveal">
                  <div className="col-2 text-end  p-1">
                    <img style={{ width: "2rem" }} src={check} alt="ckh" />
                  </div>
                  <h5 className="col text-start  p-1">
                    Create visibility on new courses, integrated courses etc
                    through us.
                  </h5>
                </div>
                <div className="row m-0 align-items-center p-2 reveal">
                  <div className="col-2 text-end  p-1">
                    <img style={{ width: "2rem" }} src={check} alt="ckh" />
                  </div>
                  <h5 className="col text-start  p-1">
                    We are focused on visibility & promotions in Northeast
                    region.
                  </h5>
                </div>

                <div className="row m-0 align-items-center p-2 reveal">
                  <div className="col-2 text-end  p-1">
                    <img style={{ width: "2rem" }} src={check} alt="ckh" />
                  </div>
                  <h5 className="col text-start  p-1">
                    Training , Admissions & Placements.
                  </h5>
                </div>

                <div className="row m-0 align-items-center p-2 reveal">
                  <div className="col-2 text-end  p-1">
                    <img style={{ width: "2rem" }} src={check} alt="ckh" />
                  </div>
                  <h5 className="col text-start  p-1">
                    We provide visibility to your college or schools with our
                    promotional activities for Northeast region.
                  </h5>
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="reveal">
                  Interested schools & colleges may contact us.
                </h3>
                <div class="form-floating mb-3 mt-3 reveal">
                  <input
                    id="pr-name"
                    type="text"
                    class="form-control"
                    placeholder="Contact Person Name"
                    value={data.name}
                    onChange={(e) => {
                      setdata({ ...data, name: e.target.value });
                    }}
                  />
                  <label for="floatingInput">Contact Person Name</label>
                </div>
                <div class="form-floating mb-3 reveal">
                  <input
                    id="pr-email"
                    type="text"
                    class="form-control"
                    placeholder="Contact Person Email"
                    value={data.email}
                    onChange={(e) => {
                      setdata({ ...data, email: e.target.value });
                    }}
                  />
                  <label for="floatingInput">Contact Person Email</label>
                </div>
                <div class="form-floating mb-3 reveal">
                  <input
                    id="pr-mobile"
                    type="text"
                    class="form-control"
                    placeholder="Contact Person Phone"
                    value={data.mobile}
                    onChange={(e) => {
                      var regex = /[^0-9]/gi;
                      e.target.value = e.target.value.replace(regex, "");
                      setdata({ ...data, mobile: e.target.value });
                    }}
                  />
                  <label for="floatingInput">Contact Person Phone</label>
                </div>
                <div class="form-floating mb-3 reveal">
                  <input
                    id="pr-college"
                    type="text"
                    class="form-control"
                    placeholder="Name of School/College/University"
                    value={data.schoolCollegeUniversity}
                    onChange={(e) => {
                      setdata({
                        ...data,
                        schoolCollegeUniversity: e.target.value,
                      });
                    }}
                  />
                  <label for="floatingInput">
                    Name of School/College/University
                  </label>
                </div>
                <p id="pr-er" className="d-none">
                  Error text
                </p>
                <div className="reveal text-end">
                  <button
                    className="btn btn-dark mb-3"
                    onClick={(e) => {
                      document.getElementById("pr-er").classList.add("d-none");
                      var name = document.getElementById("pr-name");
                      var email = document.getElementById("pr-email");
                      var mobile = document.getElementById("pr-mobile");
                      var college = document.getElementById("pr-college");

                      if (!data.name) {
                        name.focus();
                        document.getElementById("pr-er").innerText =
                          "Please enter a valid Name.";
                        document
                          .getElementById("pr-er")
                          .classList.remove("d-none");
                        return;
                      }
                      if (
                        !data.email.match(
                          "^[\\w-\\.+]*[\\w-\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$"
                        )
                      ) {
                        email.focus();
                        document.getElementById("pr-er").innerText =
                          "Please enter a valid Email.";
                        document
                          .getElementById("pr-er")
                          .classList.remove("d-none");
                        return;
                      }
                      if (data.mobile.length != 10) {
                        mobile.focus();
                        document.getElementById("pr-er").innerText =
                          "Please enter a valid Mobile.";
                        document
                          .getElementById("pr-er")
                          .classList.remove("d-none");
                        return;
                      }
                      if (!data.schoolCollegeUniversity) {
                        college.focus();
                        document.getElementById("pr-er").innerText =
                          "Please enter a valid School/College/University.";
                        document
                          .getElementById("pr-er")
                          .classList.remove("d-none");
                        return;
                      }

                      fetch("http://192.168.240.72:8100/gotp", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email: data.email }),
                      })
                        .then((res) => {
                          return res.json();
                        })
                        .then((res1) => {
                          if (res1.status) {
                            setdata({ ...data, service: "Promotion" });
                            document.getElementById("otpBtn").click();
                            //todo
                          } else {
                            document.getElementById("pr-er").innerText =
                              "Failed to submit your request. Please try again after some time.";
                            document
                              .getElementById("pr-er")
                              .classList.remove("d-none");
                          }
                        });
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="vc-blue-1 side-spacer reveal" id="admissions">
            <h2
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span class="material-symbols-rounded display-2  p-2">
                school
              </span>
              <span className="mx-2">Admissions</span>
            </h2>
            <div className="row m-0 justify-content-center">
              <div className="col-md-6">
                <div className="row m-0 align-items-center p-2 reveal">
                  <div className="col-2 text-end  p-1">
                    <img style={{ width: "2rem" }} src={check} alt="ckh" />
                  </div>
                  <h5 className="col text-start  p-1">From KG to PG</h5>
                </div>
                <div className="row m-0 align-items-center p-2 reveal">
                  <div className="col-2 text-end p-1">
                    <img style={{ width: "2rem" }} src={check} alt="ckh" />
                  </div>
                  <h5 className="col text-start  p-1">
                    Get admissions in your interested Schools & Colleges.
                  </h5>
                </div>
                <div className="row m-0 align-items-center p-2 reveal">
                  <div className="col-2 text-end  p-1">
                    <img style={{ width: "2rem" }} src={check} alt="ckh" />
                  </div>
                  <h5 className="col text-start  p-1">
                    We guide you to best University & Colleges depending on your
                    percentage.
                  </h5>
                </div>
                <div className="row m-0 align-items-center p-2 reveal">
                  <div className="col-2 text-end  p-1">
                    <img style={{ width: "2rem" }} src={check} alt="ckh" />
                  </div>
                  <h5 className="col text-start  p-1">
                    We guide you to Scholarship & Sponsorship programmers.
                  </h5>
                </div>

                <div className="row m-0 align-items-center p-2 reveal">
                  <div className="col-2 text-end  p-1">
                    <img style={{ width: "2rem" }} src={check} alt="ckh" />
                  </div>
                  <h5 className="col text-start  p-1">
                    We conduct training relating to Admisdions & Employment.
                  </h5>
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="reveal">Interested may click below</h3>
                <div class="form-floating mb-3 mt-3 reveal">
                  <input
                    id="ad-name"
                    type="text"
                    class="form-control"
                    placeholder="Name of Student"
                    value={data.name}
                    onChange={(e) => {
                      setdata({ ...data, name: e.target.value });
                    }}
                  />
                  <label for="floatingInput">Name of Student</label>
                </div>
                <div class="form-floating mb-3 reveal">
                  <input
                    id="ad-email"
                    type="text"
                    class="form-control"
                    placeholder="Contact Person Email"
                    value={data.email}
                    onChange={(e) => {
                      setdata({ ...data, email: e.target.value });
                    }}
                  />
                  <label for="floatingInput">Contact Person Email</label>
                </div>
                <div class="form-floating mb-3 reveal">
                  <input
                    id="ad-mobile"
                    type="text"
                    class="form-control"
                    placeholder="Contact Person Phone"
                    value={data.mobile}
                    onChange={(e) => {
                      var regex = /[^0-9]/gi;
                      e.target.value = e.target.value.replace(regex, "");
                      
                      setdata({ ...data, mobile: e.target.value });
                    }}
                  />
                  <label for="floatingInput">Contact Person Phone</label>
                </div>
                <div class="form-floating mb-3 reveal">
                  <input
                    id="ad-ldh"
                    type="text"
                    class="form-control"
                    placeholder="Last Degree Held"
                    value={data.lastDegreeHeld}
                    onChange={(e) => {
                      setdata({ ...data, lastDegreeHeld: e.target.value });
                    }}
                  />
                  <label for="floatingInput">Last Degree Held</label>
                </div>
                <div class="form-floating mb-3 reveal">
                  <input
                    id="ad-cdi"
                    type="text"
                    class="form-control"
                    placeholder="Course/Degree intrested in"
                    value={data.courseDegIntrested}
                    onChange={(e) => {
                      setdata({ ...data, courseDegIntrested: e.target.value });
                    }}
                  />
                  <label for="floatingInput">Course/Degree intrested in</label>
                </div>

                <div class="form-floating mb-3 reveal">
                  <input
                    id="ad-dl"
                    type="text"
                    class="form-control"
                    placeholder="Location"
                    value={data.desiredLocation}
                    onChange={(e) => {
                      setdata({ ...data, desiredLocation: e.target.value });
                    }}
                  />
                  <label for="floatingInput">Preferrd Location</label>
                </div>
                <p id="ad-er" className="d-none">
                  Error text
                </p>
                <div className="reveal text-end">
                  <button
                    className="btn btn-dark mb-3"
                    onClick={(e) => {
                      document.getElementById("pr-er").classList.add("d-none");
                      var name = document.getElementById("ad-name");
                      var email = document.getElementById("ad-email");
                      var mobile = document.getElementById("ad-mobile");
                      var ldh = document.getElementById("ad-ldh");
                      var cdi = document.getElementById("ad-cdi");
                      var dl = document.getElementById("ad-dl");
                      var error = document.getElementById("ad-er");
                      if (!data.name) {
                        name.focus();
                        error.innerText = "Please enter a valid Name.";
                        error.classList.remove("d-none");
                        return;
                      }
                      if (
                        !data.email.match(
                          "^[\\w-\\.+]*[\\w-\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$"
                        )
                      ) {
                        email.focus();
                        error.innerText = "Please enter a valid Email.";
                        error.classList.remove("d-none");
                        return;
                      }
                      if (data.mobile.length != 10) {
                        mobile.focus();
                        error.innerText = "Please enter a valid Mobile.";
                        error.classList.remove("d-none");
                        return;
                      }
                      if (!data.lastDegreeHeld) {
                        ldh.focus();
                        error.innerText = "Please enter a valid Degree.";
                        error.classList.remove("d-none");
                        return;
                      }
                      if (!data.courseDegIntrested) {
                        cdi.focus();
                        error.innerText = "Please enter a valid Course.";
                        error.classList.remove("d-none");
                        return;
                      }
                      if (!data.desiredLocation) {
                        dl.focus();
                        error.innerText = "Please enter a valid Location.";
                        error.classList.remove("d-none");
                        return;
                      }

                      fetch("http://192.168.240.72:8100/gotp", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email: data.email }),
                      })
                        .then((res) => {
                          return res.json();
                        })
                        .then((res1) => {
                          if (res1.status) {
                            setdata({ ...data, service: "Admission" });
                            document.getElementById("otpBtn").click();
                            //todo
                          } else {
                            error.innerText =
                              "Failed to submit your request. Please try again after some time.";
                            error.classList.remove("d-none");
                          }
                        });
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="vc-red-1 side-spacer reveal" id="placements">
            <h2
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span class="material-symbols-rounded display-2  p-2">work</span>
              <span className="mx-2">Placements</span>
            </h2>
            <div className="row m-0 justify-content-center">
              <div className="col-md-6">
                <div className="row m-0 align-items-center p-2 reveal">
                  <div className="col-2 text-end  p-1">
                    <img style={{ width: "2rem" }} src={check} alt="ckh" />
                  </div>
                  <h5 className="col text-start  p-1">
                    Get a job of your dream in India and overseas.
                  </h5>
                </div>
                <div className="row m-0 align-items-center p-2 reveal">
                  <div className="col-2 text-end p-1">
                    <img style={{ width: "2rem" }} src={check} alt="ckh" />
                  </div>
                  <h5 className="col text-start  p-1">
                    We are here to groom you for job relating to MNC sector
                    including various other sectors.
                  </h5>
                </div>
                <div className="row m-0 align-items-center p-2 reveal">
                  <div className="col-2 text-end  p-1">
                    <img style={{ width: "2rem" }} src={check} alt="ckh" />
                  </div>
                  <h5 className="col text-start  p-1">
                    Fullfill your dream of working in prefered sector through
                    us.
                  </h5>
                </div>
                <div className="row m-0 align-items-center p-2 reveal">
                  <div className="col-2 text-end  p-1">
                    <img style={{ width: "2rem" }} src={check} alt="ckh" />
                  </div>
                  <h5 className="col text-start  p-1">
                    Aptitude tests & campus recruits guidance .
                  </h5>
                </div>
              </div>
              <div className="col-md-6 text-dark">
                <h3 className="reveal">Interested may click below</h3>
                <div class="form-floating mb-3 mt-3 reveal">
                  <input
                  id="pl-name"
                    type="text"
                    class="form-control"
                    placeholder="Contact Person Name"
                    value={data.name}
                    onChange={(e) => {
                      setdata({ ...data, name: e.target.value });
                    }}
                  />
                  <label for="floatingInput">Contact Person Name</label>
                </div>
                <div class="form-floating mb-3 reveal">
                  <input
                  id="pl-email"
                    type="text"
                    class="form-control"
                    placeholder="Contact Person Email"
                    value={data.email}
                    onChange={(e) => {
                      setdata({ ...data, email: e.target.value });
                    }}
                  />
                  <label for="floatingInput">Contact Person Email</label>
                </div>
                <div class="form-floating mb-3 reveal">
                  <input
                  id="pl-mobile"
                    type="text"
                    class="form-control"
                    placeholder="Contact Person Phone"
                    value={data.mobile}
                    onChange={(e) => {
                      var regex = /[^0-9]/gi;
                      e.target.value = e.target.value.replace(regex, "");
                      setdata({ ...data, mobile: e.target.value });
                    }}
                  />
                  <label for="floatingInput">Contact Person Phone</label>
                </div>
                <div class="form-floating mb-3 reveal">
                  <input
                  id="pl-ldh"
                    type="text"
                    class="form-control"
                    placeholder="Last Degree"
                    value={data.lastDegreeHeld}
                    onChange={(e) => {
                      setdata({ ...data, lastDegreeHeld: e.target.value });
                    }}
                  />
                  <label for="floatingInput">Last Degree/Phd</label>
                </div>
                <div class="form-floating mb-3 reveal">
                  <input
                  id="pl-perc"
                    type="text"
                    class="form-control"
                    placeholder="Percentage"
                    value={data.percentage}
                    onChange={(e) => {
                      var regex = /[^0-9]/gi;
                      e.target.value = e.target.value.replace(
                        regex,
                        ""
                      );
                      setdata({ ...data, percentage: e.target.value });
                    }}
                  />
                  <label for="floatingInput">Percentage</label>
                </div>
                <div class="form-floating mb-3 reveal">
                  <input
                  id="pl-pi"
                    type="text"
                    class="form-control"
                    placeholder="Profession Intrested in"
                    value={data.professionIntrested}
                    onChange={(e) => {
                      setdata({ ...data, professionIntrested: e.target.value });
                    }}
                  />
                  <label for="floatingInput">Profession Intrested in</label>
                </div>
                <div class="form-floating mb-3 reveal">
                  <input
                  id="pl-dl"
                    type="text"
                    class="form-control"
                    placeholder="Location"
                    value={data.desiredLocation}
                    onChange={(e) => {
                      setdata({ ...data, desiredLocation: e.target.value });
                    }}
                  />
                  <label for="floatingInput">Preferred Location</label>
                </div>

                <div class="form-floating mb-3 reveal">
                  <input
                  id="pl-cm"
                    type="text"
                    class="form-control"
                    placeholder="Comments"
                    value={data.comments}
                    onChange={(e) => {
                      setdata({ ...data, comments: e.target.value });
                    }}
                  />
                  <label for="floatingInput">Comments *</label>
                  <p>* For experienced candidates</p>
                </div>
                <p id="pl-er" className="d-none">
                  Error text
                </p>
                <div className="reveal text-end">
                  <button
                    className="btn btn-dark mb-3"
                    onClick={(e) => {
                      document.getElementById("pr-er").classList.add("d-none");
                      var name = document.getElementById("pl-name");
                      var email = document.getElementById("pl-email");
                      var mobile = document.getElementById("pl-mobile");
                      var ldh = document.getElementById("pl-ldh");
                      var perc = document.getElementById("pl-perc");
                      var pi = document.getElementById("pl-pi");
                      var dl = document.getElementById("pl-dl");
                      var comments = document.getElementById("pl-cm");
                      var error = document.getElementById("pl-er");

                      if (!data.name) {
                        name.focus();
                        error.innerText = "Please enter a valid Name.";
                        error.classList.remove("d-none");
                        return;
                      }
                      if (
                        !data.email.match(
                          "^[\\w-\\.+]*[\\w-\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$"
                        )
                      ) {
                        email.focus();
                        error.innerText = "Please enter a valid Email.";
                        error.classList.remove("d-none");
                        return;
                      }
                      if (data.mobile.length != 10) {
                        mobile.focus();
                        error.innerText = "Please enter a valid Mobile.";
                        error.classList.remove("d-none");
                        return;
                      }
                      if (!data.lastDegreeHeld) {
                        ldh.focus();
                        error.innerText = "Please enter a valid Degree.";
                        error.classList.remove("d-none");
                        return;
                      }
                      if (!data.percentage) {
                        perc.focus();
                        error.innerText = "Please enter a valid Percentage.";
                        error.classList.remove("d-none");
                        return;
                      }
                      if (!data.professionIntrested) {
                        pi.focus();
                        error.innerText = "Please enter a valid Profession.";
                        error.classList.remove("d-none");
                        return;
                      }
                      if (!data.desiredLocation) {
                        dl.focus();
                        error.innerText = "Please enter a valid Location.";
                        error.classList.remove("d-none");
                        return;
                      }

                      fetch("http://192.168.240.72:8100/gotp", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email: data.email }),
                      })
                        .then((res) => {
                          return res.json();
                        })
                        .then((res1) => {
                          if (res1.status) {
                            setdata({ ...data, service: "Placement" });
                            document.getElementById("otpBtn").click();
                            //todo
                          } else {
                            error.innerText =
                              "Failed to submit your request. Please try again after some time.";
                            error.classList.remove("d-none");
                          }
                        });
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button
        type="button"
        class="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#otpModal"
        id="otpBtn"
      >
        Launch static backdrop modal
      </button>
      <div
        class="modal fade"
        id="otpModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="otpModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <h5 class="modal-title" id="staticBackdropLabel">
                OTP Verification
              </h5>
              <p>Please enter the OTP sent to {data.email}.</p>
              <div class="form-floating mb-3">
                <input
                  id="otp-input"
                  type="text"
                  class="form-control"
                  placeholder="OTP"
                  value={data.otp}
                  onChange={(element) => {
                    var regex = /[^0-9]/gi;
                    element.target.value = element.target.value.replace(
                      regex,
                      ""
                    );
                    setdata({ ...data, otp: element.target.value });
                  }}
                />
                <label for="floatingInput">OTP</label>
              </div>
              <p className="d-none" id="otp-error"></p>
              <div className="text-end">
                <button
                  className="btn btn-dark"
                  onClick={(e) => {
                    var xx = document.getElementById("otp-error");
                    xx.classList.add("d-none");
                    var otp = document.getElementById("otp-input");
                    if (!otp.value) {
                      xx.innerText = "Please enter a valid OTP.";
                      xx.classList.remove("d-none");
                      return;
                    }
                    if (otp.value && otp.value.length != 6) {
                      xx.innerText = "Please enter a valid OTP.";
                      xx.classList.remove("d-none");
                      return;
                    }
                    fetch("http://192.168.240.72:8100/register", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(data),
                    })
                      .then((res) => {
                        return res.json();
                      })
                      .then((res1) => {
                        if (res1.status) {
                          alert("Submitted Successfully");
                          window.location.reload();
                        } else {
                          xx.innerText = "Please enter a valid OTP.";
                          xx.classList.remove("d-none");
                        }
                      });
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
