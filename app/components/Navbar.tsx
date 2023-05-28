"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/" className="navbar-item">
            <Image src="/favicon.ico" width={28} height={28} alt="logo" />
            <h1 className="title ml-3">IG Export</h1>
          </Link>

          <Link
            href="/"
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
          </Link>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <Link className="navbar-item" href="#feature">
              Feature
            </Link>
            <Link className="navbar-item" href="#testimonials">
              Testimonials
            </Link>
            <Link className="navbar-item" href="pricing">
              Pricing
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <Link href="/" className="button is-link">
                <strong>GET STARTED</strong>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
