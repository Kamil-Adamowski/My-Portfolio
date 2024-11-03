import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiTailwindcss, SiAdobephotoshop, SiAdobeillustrator, SiBlender, SiFigma } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";

export const iconStyle = "w-20 h-20 fill-dark" 

export const iconMap = {
  FaHtml5: <FaHtml5 className={iconStyle} />,
  FaCss3Alt: <FaCss3Alt className={iconStyle} />,
  FaReact: <FaReact className={iconStyle} />,
  FaPhp: <FaPhp className={iconStyle} />,
  IoLogoJavascript: <IoLogoJavascript className={iconStyle} />,
  SiTypescript: <SiTypescript className={iconStyle} />,
  SiTailwindcss: <SiTailwindcss className={iconStyle} />,
  BsFillBootstrapFill: <BsFillBootstrapFill className={iconStyle} />,
  SiAdobephotoshop: <SiAdobephotoshop className={iconStyle} />,
  SiAdobeillustrator: <SiAdobeillustrator className={iconStyle} />,
  SiBlender: <SiBlender className={iconStyle} />,
  SiFigma: <SiFigma className={iconStyle} />
};
