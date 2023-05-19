export default function How() {
  return (
    <>
      {/* ------------------------------HOW WE WORK----------------------------- */}
      <div className="how-we-work mb-48">
        <h2 className="uppercase text-7xl font-bold text-center mt-11 tracking-wide">
          how we{" "}
          <span className="bg-hero-pattern bg-cover bg-clip-text text-transparent inline-block">
            work
          </span>
        </h2>
        <div className="doodle flex justify-center">
          <img
            src="/images/doodle.png"
            alt="doodle"
            className="w-32 mt-7 mb-32"
          />
        </div>
        <div className="grid grid-cols-4 mb-11 gap-8 md:gap-0">
          <div className="p-3 col-span-4 md:col-span-1">
            <h4 className="uppercase text-6xl font-bold m-auto mb-5 tracking-wide">
              <span className="block text-discovery-orange">Discovery</span> and
              Strategy
            </h4>
            <p className="">
              We begin by understanding your business, target audience, and
              goals. Our team collaborates with you to develop a tailored
              gamification strategy that aligns with your brand and objectives.
            </p>
          </div>
          <div className="p-3 col-span-4 md:col-span-1">
            <h4 className="uppercase text-6xl font-bold m-auto mb-5 tracking-wide">
              <span className="block text-game-blue"> game </span> development
            </h4>
            <p className="">
              Our experienced game developers bring your vision to life,
              crafting interactive games that are tailored to your target
              audience. We focus on seamless gameplay, intuitive design, and a
              delightful user experience.
            </p>
          </div>
          <div className="p-3 col-span-4 md:col-span-1">
            <h4 className="uppercase text-6xl font-bold m-auto mb-5 tracking-wide">
              <span className="block text-play-green"> play </span> and promote
            </h4>
            <p className="">
              Once your gamified solution is ready, we assist you in
              implementing it across relevant platforms, ensuring maximum
              exposure. We provide comprehensive marketing support to drive
              awareness and engagement.
            </p>
          </div>
          <div className="p-3 col-span-4 md:col-span-1">
            <h4 className="uppercase text-6xl font-bold m-auto mb-5 tracking-wide">
              <span className="block text-track-pink"> track </span> and
              optimise
            </h4>
            <p className="">
              At EdVenture, we believe in data-driven decision-making. We
              monitor and analyse the performance of your gamified campaigns,
              allowing us to fine-tune strategies and optimise results.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
