import React from "react";
// import bootstrap from 'bootstrap/dist/css/bootstrap.css'

export default function Menu() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Vinn Consultants
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="me-auto mb-2 mb-lg-0"></div>
            <ul class="navbar-nav d-flex">
              <li class="nav-item"></li>
              <li class="nav-item">
                <a class="nav-link" href="#register">
                  Register
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#none"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/services#promotions">
                      Promotions
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/services#addmissions">
                      Addmissions
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/services#placements">
                      Placements
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
            {/* <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
