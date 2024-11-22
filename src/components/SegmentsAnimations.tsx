"use client";
import { useEffect } from "react";
import Lottie, { AnimationItem } from "lottie-web";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimationConfig {
  containerId: string;
  path: string;
}

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animations: AnimationConfig[] = [
      {
        containerId: "lottie-container-1",
        path: "https://lottie.host/56790166-7ae1-4c94-8f4e-165f6174806e/K7k2nGPOoh.json",
      },
      {
        containerId: "lottie-container-2",
        path: "https://lottie.host/abcde12345-1234-1234-1234-abcde12345.json",
      },
      {
        containerId: "lottie-container-3",
        path: "https://lottie.host/fghij67890-6789-6789-6789-fghij67890.json",
      },
    ];

    const loadedAnimations: {
      animation: AnimationItem | null;
      container: HTMLElement | null;
      resetAnimation: () => void;
    }[] = animations.map((config, index) => {
      const container = document.getElementById(config.containerId);

      if (!container) {
        console.error(`Container with ID ${config.containerId} not found.`);
        return { animation: null, container: null, resetAnimation: () => {} };
      }

      const animation = Lottie.loadAnimation({
        container,
        path: config.path,
        renderer: "svg",
        autoplay: false,
        loop: false,
      });

      console.log(`Loaded animation for ${config.containerId}`);

      // ScrollTrigger for bidirectional control
      ScrollTrigger.create({
        trigger: `#${config.containerId}`,
        scrub: true,
        start: `top center+=${index * 50}`,
        end: "bottom center",
        onUpdate: (self) => {
          const progress = self.progress;
          if (animation) {
            animation.goToAndStop(animation.totalFrames * progress, true);
          } else {
            console.warn(
              `Animation instance for ${config.containerId} is undefined.`
            );
          }
        },
      });

      // Add mouse event listeners for resetting animation
      const resetAnimation = () => {
        if (animation) {
          console.log(`Resetting animation for ${config.containerId}`);
          animation.goToAndStop(0, true);
        } else {
          console.error(
            `Cannot reset animation for ${config.containerId} as it is undefined.`
          );
        }
      };

      container.addEventListener("mouseleave", resetAnimation);

      return { animation, container, resetAnimation };
    });

    // Cleanup
    return () => {
      loadedAnimations.forEach(({ animation, container, resetAnimation }) => {
        if (animation) {
          animation.destroy();
        }
        if (container) {
          container.removeEventListener("mouseleave", resetAnimation);
        }
      });
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div id="lottie-container-1" className=""></div>
      <div id="lottie-container-2" className=""></div>
      <div id="lottie-container-3" className=""></div>
    </div>
  );
}
