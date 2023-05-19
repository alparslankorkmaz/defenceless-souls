export default function Footer() {
  return (
    <>
      <div className="">
        <div className="relative mt-20 flex items-center justify-center">
          <div className="z-0 w-1/2">
            {" "}
            <img
              src="/images/hero-pattern.webp"
              alt="pattern"
              className="rounded-xl "
            />
          </div>
          <div className="footer w-3/4 bg-gradient-to-br from-ds-dark-green to-transparent rounded-3xl p-6 grid md:grid-cols-2 md:gap-20 items-center absolute z-10 top-10 md:bottom-0 md:top-10">
            <div className="  ">
              <img
                src="/images/ds-logo.jpg"
                alt="Defenceless Souls Logo"
                className="w-48 mx-auto md:mx-0 rounded-full border-4 border-ds-light-green"
              />
            </div>
            <div className="">
              <p className="text-white font-semibold text-center md:text-right mt-8 md:mt-0">
                Defenceless Souls | © 2023
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
