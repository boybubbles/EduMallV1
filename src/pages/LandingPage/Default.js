/** @format */

import React, { useEffect } from "react";
//css
import "./_Default.scss";
import "./index.scss";

//gsap animation
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import MouseFollower from "mouse-follower";

// data
import Footer from "../../templates/HomeTemplate/layout/Footer";
import videoEducation from "../LandingPage/videos/video_preview_h264.mp4";
import app from "./videos/apps.mp4";
import branding from "./videos/branding.mp4";
import website from "./videos/websites.mp4";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";

MouseFollower.registerGSAP(gsap);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const Default = () => {
  const cursor = new MouseFollower({
    speed: 0.6,
  });

  useEffect(() => {
    let paddingWebsite = document.querySelector(
      ".hero-inner-link-item-website"
    );
    let paddingApp = document.querySelector(".hero-inner-link-item-app");
    let paddingBranding = document.querySelector(
      ".hero-inner-link-item-branding"
    );
    let websiteSpan = document.querySelector(".website");
    let appSpan = document.querySelector(".app");
    let brandingSpan = document.querySelector(".branding");
    //set video
    websiteSpan.addEventListener("mouseenter", () => {
      cursor.addState("-exclusion");
    });
    appSpan.addEventListener("mouseover", () => {
      cursor.addState("-exclusion");
    });
    brandingSpan.addEventListener("mouseenter", () => {
      cursor.addState("-exclusion");
    });
    paddingApp.addEventListener("mouseenter", () => {
      cursor.setVideo(app);
    });
    paddingWebsite.addEventListener("mouseenter", () => {
      cursor.setVideo(website);
    });
    paddingBranding.addEventListener("mouseenter", () => {
      cursor.setVideo(branding);
    });
    //remove video
    paddingApp.addEventListener("mouseleave", () => {
      cursor.removeMedia();
    });
    paddingWebsite.addEventListener("mouseleave", () => {
      cursor.removeMedia();
    });
    paddingBranding.addEventListener("mouseleave", () => {
      cursor.removeMedia();
    });
    websiteSpan.addEventListener("mouseleave", () => {
      cursor.removeState("-exclusion");
    });
    appSpan.addEventListener("mouseleave", () => {
      cursor.removeState("-exclusion");
    });
    brandingSpan.addEventListener("mouseleave", () => {
      cursor.removeState("-exclusion");
    });
    gsap.to(".mask", {
      scrollTrigger: {
        trigger: ".default__container__background__scale",
        start: "center center",
        end: "+=500",
        pin: true,
        scrub: true,
      },
      scale: 1.5,
    });
    const handleScrollHeader = () => {
      if (window.scrollY >= "100") {
        document.querySelector(".default__container__header").style.height =
          "120px";
        document.querySelector(
          ".default__container__header"
        ).style.backgroundColor = "#111111";
        document.querySelector(".header__logo").style.color = "#ffffff";
      } else {
        document.querySelector(".default__container__header").style.height =
          "75px";
        document.querySelector(
          ".default__container__header"
        ).style.backgroundColor = "#ffffff";
        document.querySelector(".header__logo").style.color = "#111111";
      }
    };
    window.addEventListener("scroll", handleScrollHeader);
    return () => {
      window.removeEventListener("scroll", handleScrollHeader);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="default__container">
        <div className="default__container__header">
          <div className="header__logo">EduMall</div>
          <div className="header__buttons">
            <div className="signin">
              <SignIn />
            </div>
            <div className="signup">
              <span
                onClick={() => {
                  gsap.to(window, { duration: 1, scrollTo: "#signup" });
                }}
                className="signup"
              >
                Đăng ký
              </span>
            </div>
          </div>
        </div>
        <div className="default__container__hero">
          <div className="hero-inner">
            <div className="hero-inner-col">
              <div className="hero-inner-title">
                <h1>We Make It Happen</h1>
              </div>
              <div className="hero-inner-links">
                <div className="hero-inner-link-item-website">
                  <div className="hero-inner-link-item-padding-website" />
                  <span className="website">LEARNING</span>
                </div>
                <div className="hero-inner-link-item-app">
                  <div className="hero-inner-link-item-padding-app" />
                  <span className="app">MORE</span>
                </div>
                <div className="hero-inner-link-item-branding">
                  <div className="hero-inner-link-item-padding-branding" />
                  <span className="branding">EASIER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="default__container__background__scale">
          <div className="mask"></div>
          <video src={videoEducation} autoPlay={true} loop muted></video>
        </div>
        <SignUp />
        <Footer />
      </div>
    </>
  );
};

export default Default;
