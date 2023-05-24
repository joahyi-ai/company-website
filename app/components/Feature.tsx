import React from "react";
import Image from "next/image";

export default function Feature() {
  return (
    <div>
      <div className="mt-6">
        <div className="container has-text-centered">
          <div className="columns is-centered">
            <div className="column is-8">
              <figure className="image ">
                <Image
                  src="/demo.png"
                  alt="Description"
                  width={800}
                  height={200}
                />
              </figure>
            </div>
            <div className="column is-3 is-offset-1 py-6">
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
