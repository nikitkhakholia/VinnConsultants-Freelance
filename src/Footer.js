import React from "react";

export default function Footer() {
  return (
    <div
      className="text-light side-spacer bg-dark"
    >
      <div className="p-2">
        <div className="row">
          <div className="col-sm pt-4">
            <ul className="nav flex-column">
              <li className="font-weight-bold pb-2"><h5>Services</h5></li>
              <li className="  nav-item">
                <a href="/services#promotions" style={{ color: "white" }}>
                  Promotions
                </a>
              </li>
              <li className="  nav-item">
                <a href="/services#admissions" style={{ color: "white" }}>
                  Admissions
                </a>
              </li>
              <li className="  nav-item">
                <a href="/services#placements" style={{ color: "white" }}>
                  Placements
                </a>
              </li>
            </ul>
          </div>

          <div className="col-sm pt-4">
            <ul className="nav flex-column">
              <li className="font-weight-bold pb-2"><h5>Support</h5></li>

              <li className={"  nav-item"}>
                <a
                  href="mailto: vinnconsultants@hotmail.com"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Write to our CEO
                </a>
              </li>
              <li className="  nav-item">
                <a
                  href="mailto: vinnconsultants@hotmail.com"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Email Us
                </a>
              </li>
              <li className="  nav-item">
                <a
                  href="whatsapp://send?phone=+91-9573800210"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Chat With Us ↗
                </a>
              </li>
              <li className="  nav-item">
                <a
                  href="tel:9573800210"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Phone
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm pt-4">
            <ul className="nav flex-column">
              <li className="font-weight-bold pb-2"><h5>Registered Office</h5></li>
              <li className="nav-item">
                B2, Nehar's Enclave,
                <br /> Christian Basti, G.S. Road,
                <br /> Guwahati-781006
              </li>
            </ul>
          </div>
        </div>
        <center>
          <a href="/privacypolicy" >
          Privacy Policy
          </a>
          </center>
          <center>
        <a href="/termsandconditions" >
          Terms and Conditions
          </a>
        </center>
        {/* <p className="text-center">
          Copyright ⓒ ????-2022 Vinn Consultants, All Rights reserved.
        </p> */}
      </div>
    </div>
  );
}
