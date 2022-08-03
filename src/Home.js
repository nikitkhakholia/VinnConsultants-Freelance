import React, { useEffect } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import Menu from "./Menu";
import Footer from "./Footer";
require("bootstrap/dist/js/bootstrap");
const pointingGoal = require("./assets/pointing-goal.png");
const blueBg = require("./assets/blue-bg.jpeg");
const promotionsImage = require("./assets/promotions.jpeg");
const addmissionsImage = require("./assets/addmissions.jpg");
const placementImage = require("./assets/profesional.jpg");
const steps = require("./assets/steps.png");
const check = require("./assets/check.svg");
export default function Home() {
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
    <div
      className="m-0 p-0"
      style={{ minHeight: "1000px", fontFamily: "Poppins" }}
    >
      <Menu />

      <section
        className="xxxx"
        style={{
          background: `#f0f7ff`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="row m-0">
          <div
            className="col-lg-8 text-center"
            style={{ paddingTop: "5rem", zIndex: "1", zoom: "1.5" }}
          >
            <h1 className="">
              Complete <strong>guide</strong>
            </h1>
            <h1 className="">to meet your</h1>
            <h1 className="">
              <strong>goal</strong>
            </h1>
          </div>
        </div>
        <div className="pointing-finger">
          <img
            className="w-100"
            src={pointingGoal}
            alt="image pointing to goal"
          />
        </div>
      </section>

      <section
        className="bg-dark side-spacer py-4"
        style={{ paddingBottom: "10rem" }}
      >
        <h5 className="text-light text-center p-2 reveal">
          Grab your seat 💺 now
        </h5>
        <h5 className="text-light text-center p-2 reveal">
          in reputed colleges 🏫
        </h5>
        <h5 className="text-light text-center p-2 reveal">
          affiliated to recognized Universities 🎓
        </h5>
        <h5 className="text-light text-center p-2 reveal">
          Prepare for 📝 aptitude rounds
        </h5>
        <h5 className="text-light text-center p-2 reveal">
          get 💯 placed in fortune
        </h5>
        <h5 className="text-light text-center p-2 reveal">
          500 conpanies 🏢 and others.
        </h5>
        <div className=" reveal">
          <br />

          <br />
          <br />
        </div>
      </section>

      <section className="side-spacer" style={{ marginTop: "-5rem" }}>
        <div
          className="p-4 bg-light border border-dark shadow border-5 reveal"
          style={{ borderRadius: "1rem" }}
        >
          <div className="row m-0 p-0 text-center">
            <div className="col">
              <marquee>
                <h1 className="">
                  <strong>About Us</strong>
                </h1>
              </marquee>
              <p className="m-0 p-0 reveal">
                Vinn Consultants was formed by Mrs Satya Sri keeping in mind the
                intrest of North Eastern students and job seekers. Our focus is
                on Promotions, Admissions and Placements along with Training
                programes. Vinn Consultants has satellite offices all over India
                and abroad.
                <br />
                So what are you waiting for. Click below to know more of your
                intrested segment.
              </p>
            </div>
           
          </div>
        </div>
      </section>

      <section className="p-4 mt-4 text-center">
        <marquee>
          <h1 className="">
            <strong>Click to know about our Services</strong>
          </h1>
        </marquee>
        <div className="row m-0 justify-content-center">
          <a href="/services#promotions"
            className="col-md reveal"
          >
            <div
              className="circle circle-pr rounded-circle mx-auto"
              style={{
                backgroundImage: `url(${promotionsImage})`,
                backgroundSize: "cover",
              }}
            >
              <h5 className="circle-text">Promotions</h5>
            </div>
          </a>
          <a href="/services#admissions"
            className="col-md reveal"
          >
            <div
              className="circle circle-ad rounded-circle mx-auto"
              style={{
                backgroundImage: `url(${addmissionsImage})`,
                backgroundSize: "cover",
              }}
            >
              <h5 className="circle-text">Admissions</h5>
            </div>
          </a>
          <a href="/services#placements"
            className="col-md reveal"
          >
            <div
              className="circle circle-pl rounded-circle mx-auto"
              style={{
                backgroundImage: `url(${placementImage})`,
                backgroundSize: "cover",
              }}
            >
              <h5 className="circle-text">Placements</h5>
            </div>
          </a>
        </div>
      </section>

      <section className="p-0 m-0 mt-4">
        <div className="side-spacer">
          <marquee classList="">
            <h1 className="">
              <strong>Why choose us?</strong>
            </h1>
          </marquee>

          <div className="row m-0 justify-content-center">
            <div className="col-md-4 col-8">
              <div className="row m-0 align-items-center p-2 reveal">
                <div className="col-2 text-end  p-1">
                  <img style={{ width: "2rem" }} src={check} alt="ckh" />
                </div>
                <h5 className="col text-start  p-1">Job Opportunities</h5>
              </div>
              <div className="row m-0 align-items-center p-2 reveal">
                <div className="col-2 text-end p-1">
                  <img style={{ width: "2rem" }} src={check} alt="ckh" />
                </div>
                <h5 className="col text-start  p-1">Aptitude Preparition</h5>
              </div>
              <div className="row m-0 align-items-center p-2 reveal">
                <div className="col-2 text-end  p-1">
                  <img style={{ width: "2rem" }} src={check} alt="ckh" />
                </div>
                <h5 className="col text-start  p-1">Admission Assistance</h5>
              </div>
              <div className="row m-0 align-items-center p-2 reveal">
                <div className="col-2 text-end  p-1">
                  <img style={{ width: "2rem" }} src={check} alt="ckh" />
                </div>
                <h5 className="col text-start  p-1"> Career Guidance</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
