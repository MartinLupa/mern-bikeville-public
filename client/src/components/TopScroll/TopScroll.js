import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import React, { useEffect, useState } from "react";
import "./TopScroll.css";

export const TopScroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={isVisible ? "top-scroll" : "hidden"}
      onClick={scrollToTop}
    >
      <ArrowCircleUpOutlinedIcon sx={{ fontSize: 80 }} />
    </button>
  );
};
