import React from "react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className=" block has-background-info-light mt-6">
      <h2 className="title is-capitalized has-text-centered pt-4">
        What Users Are saying about IG Export?
      </h2>
      <div className="columns is-centered">
        <div className="column is-one-third">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="Placeholder image"
                      width={96}
                      height={96}
                      className="is-rounded"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">Leslie Alexander</p>
                  <p className="subtitle is-6">@lindsaywalton</p>
                </div>
              </div>

              <div className="content">
                Love this extension. It's saved me hundreds of hours of work by
                allowing me to download instagram followers and following in one
                click!
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="Placeholder image"
                      width={96}
                      height={96}
                      className="is-rounded"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">Tom Cook</p>
                  <p className="subtitle is-6">@tomcook</p>
                </div>
              </div>

              <div className="content">
                I've been looking for a way to extract followers and following
                from any instagram profile and have finally found it. Thanks IG
                Export. Great iob!
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
