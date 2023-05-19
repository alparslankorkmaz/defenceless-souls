export default function Header() {
  const scroll = () => {
    const section = document.querySelector("#contact-us");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <header className=" py-5 flex justify-between items-center">
        <img
          src="/images/ds-logo.jpg"
          alt="Defenceless Souls Logo"
          className="w-48 h-auto mx-auto md:mx-0 rounded-full border-2 border-ds-light-green"
        />
        <h1 className="font-bold text-2xl md:text-4xl drop-shadow-lg text-ds-dark-green">
          Defenceless Souls Dog Sanctuary
        </h1>
        <button
          onClick={scroll}
          className="hidden p-3 text-2xl tracking-wider rounded-3xl bg-hero-pattern bg-cover shadow-xl border-4 uppercase text-white border-ds-light-green  font-semibold md:flex flex-col items-center justify-center hover:scale-105"
        >
          volunteer form
        </button>
      </header>
    </>
  );
}
