import React, { useEffect } from "react";
import gsap, { Power2, Power3, Expo, Circ } from "gsap";
import user from "./avatar.jpg";
function App() {

  useEffect(() => {

    gsap.to(".left", 2, {
      delay: 0.8,
      width: "50%",
      ease: Power2.easeInOut,
    });

    gsap.to(".right", 2, {
      delay: 0.6,
      width: "50%",
      ease: Power3.easeInOut,
    });

    gsap.to(".navbar", 2, {
      delay: 2,
      opacity: 1,
      ease: Expo.easeInOut,
    });

    gsap.to(".text h1", 2, {
      delay: 1,
      x: 100,
      opacity: 1,
      ease: Circ.easeInOut,
    });

    gsap.to(".text p", 2, {
      delay: 1.3,
      x: 100,
      opacity: 1,
      ease: Circ.easeInOut,
    });

    gsap.to(".user_img", 2, {
      delay: 1.5,
      width: "800px",
      ease: Power2.easeInOut,
    });

    gsap.to(
      ".bottomnav ul li",
      2,
      {
        delay: 1,
        x: -500,
        ease: Circ.easeInOut,
      },
      0.08
    );

    gsap.to(
      ".info",
      2,
      {
        delay: 2,
        y: -200,
        ease: Circ.easeInOut,
      },
      0.08
    );

    gsap.to(".name", 2, {
      delay: 1.5,
      x: 700,
      ease: Circ.easeInOut,
    });
  }, []);

  return (
    <div className="App">
      <div class="wrapper">
        <div class="left"></div>
        <div class="right"></div>

        <nav class="navbar">
          <ul>
            <li class="logo">Asomiddin Dev</li>
            <li > home </li>
            <li >about</li>
            <li >portfolio</li>
            <li >contact</li>
            <li class="profile">
              <div
                class="img"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + user})`,
                }}
              ></div>
            </li>
          </ul>
        </nav>

        <div class="content">
          <div class="img-wrapper">
            <div
              class="user_img"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + user})`,
              }}
            ></div>
          </div>

          <div class="info">
            <ul>
              <li>instagram.com</li>
              <li>@asomiddin_ochilov</li>
              <li>https://asomiddin.netlify.app</li>
             
            </ul>
          </div>

          <div class="text">
            <h1>Ochilov</h1>
            <p>Frontend Developer</p>
          </div>

          <div class="name">Asomiddin </div>

          <div class="bottomnav">
            <ul>
              <li>about</li>
              <li>portfolio</li>
              <li>contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
