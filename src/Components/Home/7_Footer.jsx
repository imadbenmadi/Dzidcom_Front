import React, { useRef } from "react";
import Logo from "../../../public/Logo.png";
import { Link } from "react-router-dom";
import feacbook from "../../../public/Home/Footer/Facebook.png";
import Instagram from "../../../public/Home/Footer/Instagram.png";
import Linkedin from "../../../public/Home/Footer/Linkedin.png";
import Twitter from "../../../public/Home/Footer/Twitter.png";
import { motion, useInView } from "framer-motion";

function Footer() {
  var currentYear = new Date().getFullYear();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const itemVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.5 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } },
  };
  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : ""}
      className=" bg-zinc-100 py-4 mt-10 "
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <div>
          <div className="flex  content-center max-md:gap-4 max-md:flex-col justify-center items-center max-w-full text-sm font-bold leading-5 text-zinc-800  max-md:flex-wrap">
            <a href="#Hero" className="   w-fit max-md:w-fit  my-auto">
              <div className="text-center  ">Why choose us</div>
            </a>
            <a href="#Goal" className="  w-[12%] max-md:w-fit  my-auto">
              <div className="text-center">Our goals</div>
            </a>

            <a href="#Our_features" className=" w-[12%] my-auto max-md:w-fit ">
              Our services
            </a>
            <Link to={"/"} className="select-none  :w-[20%] max-md:order-first">
              <img src={Logo} alt="Logo" className=" w-full lg:w-[145px] " />
            </Link>
            <a href="#Contact_us" className=" w-[12%] max-md:w-fit    my-auto">
              <div>Contact us </div>
            </a>
            <div className="  w-[12%] ">
              <div>Hire</div>
            </div>
            <div className=" w-[12%] max-md:w-fit my-auto">Work</div>
          </div>
        </div>
        <hr className="h-[2px] my-2 max-md:hidden bg-gray-300"></hr>
        <div className="flex justify-center gap-2 items-center mx-auto  w-full  mt-12 max-md:mt-10">
          <img src={feacbook} className=" w-12 " />
          <img src={Instagram} className=" w-12 " />
          <img src={Linkedin} className=" w-12 " />
          <img src={Twitter} className=" w-12 " />
        </div>
        <div className="self-center mt-16 text-sm leading-5 text-center text-black max-md:mt-10">
          © {currentYear}
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
