import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactUs() {
  const [state, handleSubmit] = useForm(process.env.formKey);
  if (state.succeeded) {
    return (
      <>
        <div>
          <h3 className="uppercase text-7xl font-bold text-center mt-11 tracking-wide">
            <span className="bg-hero-pattern bg-cover bg-clip-text text-transparent inline-block">
              {" "}
              volunteer{" "}
            </span>{" "}
            form
          </h3>
          <div className="doodle flex justify-center">
            <img
              src="/images/doodle.png"
              alt="bone doodle"
              className="w-32 mt-7"
            />
          </div>

          <div className="grid grid-cols-2">
            <p className="text-5xl tracking-wide text-center font-bold uppercase bg-play-green p-5 rounded-xl text-white my-20 leading-loose">
              application sent succesfully! ✅ 🐶
            </p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div id="contact-us">
        <h3 className="uppercase text-7xl font-bold text-center mt-11 tracking-wide">
          <span className="bg-hero-pattern bg-cover bg-clip-text text-transparent inline-block">
            {" "}
            volunteer{" "}
          </span>{" "}
          form
        </h3>
        <div className="doodle flex justify-center">
          <img src="/images/doodle.png" alt="doodle" className="w-32 mt-7" />
        </div>

        <div className="form-container grid md:grid-cols-6 md:my-20 mx-6 md:mx-0">
          <div className="col-span-4 col-start-2">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="grid md:grid-cols-12 gap-3">
                <div className="col-span-6">
                  <label htmlFor="name" className="text-xl">
                    <p className="py-5 text-base">First and last name</p>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="p-4  rounded-xl border w-full text-xl"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="age" className="text-xl">
                    <p className="py-5 text-base">Age</p>
                  </label>
                  <input
                    type="text"
                    name="message"
                    id="age"
                    className="p-4  rounded-xl border w-full text-xl"
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="msg"
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
                    className="p-4  rounded-xl border w-full text-xl"
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
                    className="p-4  rounded-xl border w-full text-xl"
                    required
                  />
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                  />
                </div>
              </div>
              <p className="py-5 text-2xl">
                Details -{" "}
                <span className="font-bold">
                  {" "}
                  Answer the questions below, please 🐶
                </span>
              </p>

              <label htmlFor="message" className="text-xl">
                <p className="py-5 text-base">Will you need accommodation?</p>
              </label>
              <textarea
                id="message"
                name="message"
                className="p-4  rounded-xl border w-full text-xl"
                rows={2}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <label htmlFor="message" className="text-xl">
                <p className="py-5 text-base">
                  Medical conditions. If applicable, please specify.
                </p>
              </label>
              <textarea
                id="message"
                name="message"
                className="p-4  rounded-xl border w-full text-xl"
                rows={2}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <label htmlFor="message" className="text-xl">
                <p className="py-5 text-base">Occupation </p>
              </label>
              <textarea
                id="message"
                name="message"
                className="p-4  rounded-xl border w-full text-xl"
                rows={2}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <label htmlFor="message" className="text-xl">
                <p className="py-5 text-base">
                  We need help this September when we enclose the sanctuary with
                  fences. Are you available during this month? If so, tell us
                  when. (Other availability welcome)
                </p>
              </label>
              <textarea
                id="message"
                name="message"
                className="p-4  rounded-xl border w-full text-xl"
                rows={2}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <label htmlFor="message" className="text-xl">
                <p className="py-5 text-base">
                  Please tell us about any experience you have with dogs, please
                  specify breeds and durations. If you do not have any
                  experience but are passionate about volunteering with us, this
                  is also fine!
                </p>
              </label>
              <textarea
                id="message"
                name="message"
                className="p-4  rounded-xl border w-full text-xl"
                rows={2}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <label htmlFor="message" className="text-xl">
                <p className="py-5 text-base">
                  Let us know why you would like to volunteer with Defenceless
                  Souls
                </p>
              </label>
              <textarea
                id="message"
                name="message"
                className="p-4  rounded-xl border w-full text-xl"
                rows={2}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="p-6 my-6 max-h-3 text-3xl w-40 tracking-wider rounded-md bg-hero-pattern bg-cover uppercase text-white font-semibold flex flex-col items-center justify-center"
                >
                  Submit
                </button>
              </div>
              <div className="flex justify-center items-center">
                <label htmlFor="waiver" className="text-3xl font-bold my-5">
                  Confirm
                </label>
                <input
                  type="checkbox"
                  className=" mx-10 p-4 bg-green-100 border-green-300 text-green-500 focus:ring-green-200"
                  name="_optin"
                  id="_optin"
                  required
                />
              </div>
              <p className="text-2xl font-bold mt-10">
                We would like to highlight that you will be fully responsible
                for any accidents or medical emergencies that could occur during
                your time volunteering with Defenceless Souls Dog Rescue. So we
                ask that you to confirm you are happy with this. <br /> I hereby
                agree to taking full responsibility of all and any accidents or
                medical emergencies that occur at Defenceless Souls Dog Rescue.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
