export default function CallToAction() {
  return (
    <>
      <div className="call-to-action relative mb-48">
        <div className="z-0">
          {" "}
          <img
            src="/images/hero-pattern-cta.webp"
            alt="pattern"
            className="hidden md:inline"
          />
          <img
            src="/images/hero-pattern-mobile.webp"
            alt="pattern"
            className="md:hidden"
          />
        </div>
        <div className="flex justify-center">
          <div className="call-to-action bg-[#2D2D2D] rounded-3xl w-11/12 p-10 md:p-11 grid grid-cols-4 absolute z-10 top-16">
            <div className="col-span-4 md:col-span-3">
              <img
                src="/images/diamond3d.webp"
                alt="Diamond and a cursor"
                className="w-48 md:w-24 mb-11"
              />
              <h4 className="uppercase text-6xl md:text-5xl tracking-wide font-bold mb-5 text-white">
                Unlock the{" "}
                <span className="bg-gradient-to-tr from-purple-500 to-orange-500 bg-clip-text text-transparent inline-block">
                  Power of Gamification
                </span>{" "}
                Today!
              </h4>
              <p className="text-white text-lg md:text-base">
                Don't miss out on the tremendous potential of gamification.
                Partner with EdVenture to transform your marketing efforts,
                reach new heights of engagement, and attract your target
                audience like never before. Contact us now to embark on an
                adventure that will revolutionise your brand.
              </p>
              <div className=" md:hidden w-100 mt-14">
                <img
                  src="/images/getstarted3d.webp"
                  alt="get started!"
                  className="updown-animation"
                />
              </div>
            </div>
            <div className="hidden md:block absolute w-100 col-start-3">
              <img
                src="/images/getstarted3d.webp"
                alt="get started!"
                className="updown-animation"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
