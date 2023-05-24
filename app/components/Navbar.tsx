"use client";
import React from "react";
import Image from "next/image";

export default function Navbar() {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <Image src="/favicon.ico" width={28} height={28} alt="logo" />
            <h1 className="title ml-3">IG Export</h1>
          </a>

          <a
            onClick={() => {
              setIsActive(!isActive);
            }}
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <a className="navbar-item ">About</a>
            <a className="navbar-item">Feature</a>
            <a className="navbar-item">Pricing</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-info">
                  <strong>GET STARTED</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
