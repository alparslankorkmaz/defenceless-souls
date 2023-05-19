export default function Hero() {
  const scroll = () => {
    const section = document.querySelector("#contact-us");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-delay="300"
        className="hero grid grid-cols-6 gap-10 items-center my-20 shadow-2xl p-10 rounded bg-gradient-to-br from-ds-beige to-slate-300"
      >
        <div className="hero-text col-span-6 md:col-span-3 mt-11 order-last md:order-first text-center md:text-start">
          <h2 className="uppercase text-xl md:text-4xl font-bold tracking-wide pb-5 bg-hero-pattern bg-cover bg-clip-text ">
            Defenceless Souls{" "}
            <span className="block text-transparent text-4xl md:text-6xl">
              dog sanctuary{" "}
            </span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
            quas quo ut a officiis voluptate corrupti repudiandae incidunt,
            error reprehenderit laboriosam omnis sapiente culpa sed optio maxime
            nobis animi ab.
          </p>
        </div>
        <img
          src="/images/hero-img.jpg"
          alt="Timur holding a puppy"
          className="col-span-6 md:col-span-3 rounded-md"
        />
        <button
          onClick={scroll}
          className="md:hidden  col-span-6 order-last md:order-first mt-10 p-6 max-h-4 text-xl md:text-3xl tracking-wider bg-hero-pattern bg-cover border-4 border-ds-light-green rounded-xl uppercase text-white font-semibold flex flex-col items-center justify-center hover:scale-105"
        >
          volunteer form
        </button>
      </div>
    </>
  );
}
