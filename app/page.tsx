// import Image from "next/image";
// import Cta from "./components/Cta";
import Feature from "./components/Feature";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      {" "}
      <Navbar />
      <Feature />
      <Testimonials />
      <Pricing />
    </div>
  );
}
