import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactUs() {
  const [state, handleSubmit] = useForm(process.env.formKey);
  if (state.succeeded) {
    return (
      <>
        <div>
          <h3 className="uppercase text-7xl font-bold text-center mt-11 tracking-wide">
            contact{" "}
            <span className="bg-hero-pattern bg-cover bg-clip-text text-transparent inline-block">
              {" "}
              us{" "}
            </span>
          </h3>
          <div className="doodle flex justify-center">
            <img src="/images/doodle.png" alt="doodle" className="w-32 mt-7" />
          </div>

          <div className="grid grid-cols-2">
            <p className="text-5xl tracking-wide text-center font-bold uppercase bg-play-green p-5 rounded-xl text-white my-20 leading-loose">
              message sent succesfully! ✅
            </p>
            <div className="">
              <img
                src="/images/lasergun3d.webp"
                alt="3D character with laser guns"
                className="w-2/5 absolute right-11 updown-animation"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div id="contact-us">
        <h3 className="uppercase text-7xl font-bold text-center mt-11 tracking-wide">
          contact{" "}
          <span className="bg-hero-pattern bg-cover bg-clip-text text-transparent inline-block">
            {" "}
            us{" "}
          </span>
        </h3>
        <div className="doodle flex justify-center">
          <img src="/images/doodle.png" alt="doodle" className="w-32 mt-7" />
        </div>

        <div className="form-container grid md:grid-cols-5 md:my-20 mx-6 md:mx-0">
          <div className="col-span-3">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="grid md:grid-cols-12 gap-3">
                <div className="col-span-6">
                  <label htmlFor="name" className="text-xl">
                    <p className="py-5 text-base">Name</p>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="p-4 tracking-widest rounded-xl bg-input-field border w-full text-xl"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="company" className="text-xl">
                    <p className="py-5 text-base">Company Name</p>
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="p-4 tracking-widest rounded-xl bg-input-field border w-full text-xl"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-12 gap-3">
                <div className="col-span-6">
                  <label htmlFor="email" className="text-xl">
                    <p className="py-5 text-base">Email Address</p>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="p-4 tracking-widest rounded-xl bg-input-field border w-full text-xl"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="phone" className="text-xl">
                    <p className="py-5 text-base">Contact Number</p>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="p-4 tracking-widest rounded-xl bg-input-field border w-full text-xl"
                    required
                  />
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                  />
                </div>
              </div>
              <label htmlFor="message" className="text-xl">
                <p className="py-5 text-base">Ask us a question</p>
              </label>
              <textarea
                id="message"
                name="message"
                className="p-4 tracking-widest rounded-xl bg-input-field border w-full text-xl"
                rows={6}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="p-6 my-6 max-h-3 text-3xl w-32 tracking-wider rounded-md bg-hero-pattern bg-cover uppercase text-white font-semibold flex flex-col items-center justify-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="hidden md:block">
            <img
              src="/images/lasergun3d.webp"
              alt="3D character with laser guns"
              className="w-2/5 absolute right-11 updown-animation"
            />
          </div>
        </div>
        <div className=" md:hidden">
          <img
            src="/images/lasergun3d.webp"
            alt="3D character with laser guns"
            className=" updown-animation"
          />
        </div>
      </div>
    </>
  );
}
