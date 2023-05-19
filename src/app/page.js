"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import Content from "@/components/Content";
// import CallToAction from "@/components/CallToAction";
// import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

export default function Home() {
  return (
    <main className="container mx-auto px-10 lg:px-32">
      <Header />
      <Hero />
      {/* <Content /> */}
      {/* <CallToAction /> */}
      {/* <ContactUs /> */}
      <Footer />
      <BackToTopButton />
    </main>
  );
}
