"use client";
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import "./globals.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <html lang="en">
      <head>
        <title>Defenceless Souls</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
