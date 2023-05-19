import React from "react";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [BackToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {BackToTopButton && (
        <button
          onClick={scrollUp}
          className="text-xl text-ds-light-green font-bold tracking-wide bg-hero-pattern bg-cover rounded-full fixed bottom-10 right-10 h-16 w-16 z-10  border-4 border-ds-light-green"
        >
          ⬆
        </button>
      )}
    </>
  );
}
