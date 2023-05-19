export default function Hero() {
  const scroll = () => {
    const section = document.querySelector("#contact-us");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <div className="hero grid grid-cols-5 gap-10 items-center my-20 shadow-2xl p-10 rounded bg-gradient-to-br from-ds-beige to-slate-300">
        <div className="hero-text col-span-5 md:col-span-2 mt-11 order-last md:order-first text-center md:text-start">
          <h2 className="uppercase text-5xl font-bold tracking-wide pb-5 bg-hero-pattern bg-cover bg-clip-text ">
            Defenceless Souls{" "}
            <span className="text-transparent text-7xl">dog rescue </span>
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
          className="col-span-5 md:col-span-3 rounded-full border-4 border-ds-dark-green"
        />
        <button
          onClick={scroll}
          className="md:hidden  col-span-5 order-last md:order-first mt-10 p-6 max-h-4 text-3xl tracking-wider bg-hero-pattern bg-cover border-4 border-ds-light-green rounded-xl uppercase text-white font-semibold flex flex-col items-center justify-center hover:scale-105"
        >
          volunteer form
        </button>
      </div>
    </>
  );
}
