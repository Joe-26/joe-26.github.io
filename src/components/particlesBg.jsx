import React, { useEffect } from "react";

const ParticlesBackground = () => {
  useEffect(() => {
    // Wait for the script to be available in the global scope
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        interactivity: {
          detect_on: "canvas",
          events: {
            onclick: {
              enable: true,
              mode: "repulse",
            },
            onhover: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              opacity: 0,
              size: 0,
              speed: 3,
            },
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
            repulse: {
              distance: 400,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          line_linked: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.4,
            width: 1,
          },
          move: {
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600,
            },
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "out",
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 160,
          },
          opacity: {
            anim: {
              enable: true,
              opacity_min: 0,
              speed: 1,
              sync: false,
            },
            random: true,
            value: 1,
          },
          shape: {
            image: {
              height: 100,
              src: "img/github.svg",
              width: 100,
            },
            polygon: {
              nb_sides: 5,
            },
            stroke: {
              color: "#000000",
              width: 0,
            },
            type: "circle",
          },
          size: {
            anim: {
              enable: false,
              size_min: 0.3,
              speed: 4,
              sync: false,
            },
            random: true,
            value: 3,
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <div
      id="particles-js"
      className="absolute inset-0 -z-0 pointer-events-none"
    ></div>
  );
};

export default ParticlesBackground;
