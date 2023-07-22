export default function Header() {
  const scroll = () => {
    const section = document.querySelector("#contact-us");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <header className=" py-5 grid grid-cols-8 items-center">
        <img
          src="/images/ds-logo.jpg"
          alt="Defenceless Souls Logo"
          className="col-span-2 col-start-4 md:col-span-1 h-auto mx-auto md:mx-0 rounded-full border-2 border-ds-light-green"
        />
        <h1 className="text-center col-span-4 col-start-3 md:col-span-3 flex items-center font-bold text-3xl md:text-4xl drop-shadow-lg text-ds-dark-green">
          Defenceless Souls Dog Sanctuary
        </h1>

        <button
          onClick={scroll}
          className="h-14 col-start-7 col-span-2 md:text-xl hidden text-2xl tracking-wide rounded-3xl bg-hero-pattern bg-cover shadow-xl border-4 uppercase text-white border-ds-light-green font-semibold md:flex items-center justify-center hover:scale-105"
        >
          volunteer form
        </button>
      </header>
    </>
  );
}
