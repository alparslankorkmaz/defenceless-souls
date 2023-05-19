export default function Content() {
  return (
    <>
      <div className="content mt-32">
        {/* ---------------------------WHY CHOOSE EDVENTURE--------------------------- */}
        <h2 className="uppercase text-7xl font-bold text-center mt-11 tracking-wide">
          why choose{" "}
          <span className="bg-hero-pattern bg-cover bg-clip-text text-transparent inline-block">
            {" "}
            edventure{" "}
          </span>
        </h2>
        <div className="doodle flex justify-center">
          <img src="/images/doodle.png" alt="doodle" className="w-32 mt-7" />
        </div>
        {/* ENGAGEMENT */}
        <div className="grid grid-cols-2 my-20 md:my-32 gap-10 md:gap-0">
          <div className="images relative m-auto col-span-2 md:col-span-1">
            <img
              src="/images/hero-pattern-sm.webp"
              alt="EdVenture Pattern"
              className="w-64 z-0"
            />
            <img
              src="/images/img1.png"
              alt="Young People"
              className="w-64 absolute z-10 bottom-0"
            />
          </div>
          <div className="txt w-3/4 m-auto col-span-2 md:col-span-1">
            <h3 className="uppercase text-5xl tracking-wide font-bold mb-5">
              gamification for targeted engagement
            </h3>
            <p>
              We understand that capturing the attention of your target audience
              is crucial. Through gamification, we craft interactive experiences
              that captivate and engage your audience, creating memorable
              interactions that drive results.
            </p>
          </div>
        </div>
        {/* EDUCATION */}
        <div className="grid grid-cols-2 my-32 gap-10 md:gap-0">
          <div className="txt w-3/4 m-auto  col-span-2 md:col-span-1 order-last md:order-first">
            <h3 className="uppercase text-5xl tracking-wide font-bold mb-5">
              Education in Playful Experiences
            </h3>
            <p>
              Learning doesn't have to be mundane. At EdVenture, we believe in
              the power of play. We design gamified solutions that seamlessly
              integrate educational content, allowing your audience to absorb
              information while having fun.
            </p>
          </div>

          <div className="images relative m-auto col-span-2 md:col-span-1">
            <img
              src="/images/hero-pattern-sm2.webp"
              alt="EdVenture Pattern"
              className="w-64 z-0"
            />
            <img
              src="/images/img2.webp"
              alt="Computer Guy"
              className="w-64 absolute z-10 bottom-3 left-8"
            />
          </div>
        </div>
        {/* STAND OUT */}
        <div className="grid grid-cols-2 my-32 gap-10 md:gap-0">
          <div className="images relative m-auto col-span-2 md:col-span-1">
            <img
              src="/images/hero-pattern-sm3.webp"
              alt="EdVenture Pattern"
              className="w-64 z-0"
            />
            <img
              src="/images/img3.webp"
              alt="Stadium full of people"
              className="w-64 absolute z-10 bottom-0"
            />
          </div>
          <div className="txt w-3/4 m-auto col-span-2 md:col-span-1">
            <h3 className="uppercase text-5xl tracking-wide font-bold mb-5">
              Stand Out from the Crowd
            </h3>
            <p>
              In a competitive marketplace, it's essential to differentiate
              yourself. Our gamification strategies enable you to stand out by
              offering unique, immersive experiences that leave a lasting
              impression on your audience.
            </p>
          </div>
        </div>
        {/* TARGETED */}
        <div className="grid grid-cols-2 my-32 gap-10 md:gap-0">
          <div className="txt w-3/4 m-auto col-span-2 md:col-span-1 order-last md:order-first">
            <h3 className="uppercase text-5xl tracking-wide font-bold mb-5">
              Targeted Reach and Conversion
            </h3>
            <p>
              We don't just stop at engagement. EdVenture is committed to
              helping you convert your audience into loyal customers. By
              strategically aligning gamification with your marketing
              objectives, we ensure your efforts generate measurable results.
            </p>
          </div>

          <div className="images relative m-auto col-span-2 md:col-span-1">
            <img
              src="/images/hero-pattern-sm4.webp"
              alt="EdVenture Pattern"
              className="w-64 z-0"
            />
            <img
              src="/images/img4.webp"
              alt="Two guys gaming"
              className="w-64 absolute z-10 top-0 left-5"
            />
          </div>
        </div>
      </div>
    </>
  );
}
