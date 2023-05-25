import React from "react";
import Image from "next/image";

export default function Feature() {
  return (
    <div id="feature">
      <div className="mt-6">
        <div className="container has-text-centered">
          <div className="columns is-centered">
            <div className="column is-9">
              <div className="box">
                <figure className="image is-16by9">
                  <Image
                    src="/demoOne.png"
                    alt="Description"
                    width={900}
                    height={300}
                  />
                </figure>
              </div>
            </div>
            <div className="column is-3  py-6">
              <h1 className="title is-2">
                Export Instagram Followers/Following List To CSV In Minutes!
              </h1>
              <br />
              <p className="has-text-centered">
                <a className="button is-medium is-info">
                  Add to Chrome(It's FREE)
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
