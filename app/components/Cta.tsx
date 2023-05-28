import React from "react";
import Link from "next/link";

export default function Cta() {
  return (
    <div className="pb-5 m-auto">
      {" "}
      <Link href="/" className="button is-medium is-link has-text-centered">
        Add to Chrome(It's FREE)
      </Link>
    </div>
  );
}
