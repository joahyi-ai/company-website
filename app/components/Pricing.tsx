import React from "react";
import "../styles/pricing.css";

export default function Pricing() {
  return (
    <div id="pricing">
      <section className="section">
        <div className="container">
          <h1 className="title is-1 has-text-centered has-text-weight-bold">
            Choose the plan that fits your needs.
          </h1>
          <div className="spacer"></div>
          <div className="columns">
            <div className="column  has-text-centered has-background-info-light pb-4">
              <h2 className="title is-3 plan_title has-text-weight-bold">
                Basic Plan
              </h2>
              <p className="has-text-weight-light plan_subtitle">
                This is the basic plan
              </p>
              <div className="price">
                <h2 className="title is-2 has-text-weight-bold has-text-info">
                  $0<span className="has-text-weight-light">/month</span>
                </h2>
              </div>
              <div className="spacer"></div>
              <div className="features">
                <p className="subtitle has-text-weight-bold">
                  Extract followers and following from any Instagram profile
                </p>
                <p className="subtitle has-text-weight-bold">
                  Up to 500 profiles per time
                </p>
              </div>
              <div className="spacer"></div>
              <button className="button is-info">Get Started Now</button>
            </div>
            <div className="column  has-text-centered best_selling is-active">
              <h2 className="title is-3 plan_title has-text-white has-text-weight-bold">
                Best Selling
              </h2>
              <p className="has-text-weight-light plan_subtitle">
                This is the best selling plan
              </p>
              <div className="price">
                <h2 className="title is-2 has-text-weight-bold">
                  $20<span className="has-text-weight-light">/month</span>
                </h2>
              </div>
              <div className="spacer"></div>
              <div className="features has-text-white">
                <p className="subtitle has-text-weight-bold  has-text-white">
                  Extract followers and following from any Instagram profile
                </p>
                <p className="subtitle has-text-weight-bold has-text-white">
                  Unlimited profiles per time
                </p>
              </div>
              <div className="spacer"></div>
              <button className="button is-primary best_selling_btn">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
