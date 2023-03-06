import React from "react";
import ayo from "../assets/images/ayoogunseind.jpg";
import christianbuehne from "../assets/images/christian-buehner.jpg";
import jacksondavid from "../assets/images/jackson-david.jpg";
import vincefleming from "../assets/images/vince-fleming.jpg";
import brookecagle from "../assets/images/brooke-cagle.jpg";
import christina from "../assets/images/christina.jpg";

export default function Testimonials() {
  const testimonials = [
    [
      {
        content:
          "I can't believe how amazing this app is! I had an old photo that had been damaged by water, and it was almost completely ruined. But after using this app, the photo looked like it had just been taken yesterday! The app restored the color and detail beautifully, and I couldn't be happier with the results. Thank you so much!",

        author: {
          name: "Arnold Rauch",
          role: "Photographer",
          image: ayo,
        },
      },
      {
        content:
          "I'm blown away by how easy it was to use this app. The restored photo looks amazing, and I'm thrilled with the results!",

        author: {
          name: "Christian Buehne",
          role: "Video editor",
          image: christianbuehne,
        },
      },
    ],
    [
      {
        content:
          "This app is a game-changer! It brought an old family photo back to life and now it looks like it was taken yesterday!",

        author: {
          name: "Fawaz Adeniji",
          role: "Software Engineer",
          image: jacksondavid,
        },
      },
      {
        content:
          "Turning blurred photos into perfectly sharp ones. Works like magic",

        author: {
          name: "Sergei Vinderskikh",
          role: "enterprenur",
          image: vincefleming,
        },
      },
    ],
    [
      {
        content:
          "I've been trying to restore some old family photos for years, but I just didn't have the skills or tools to do it. That is until I found this app! The app was incredibly easy to use, and it brought new life to these precious memories. The before-and-after photos are simply amazing. I can't thank the developers enough for creating this app!",

        author: {
          name: "Himanil Gole",
          role: "Designer",
          image: brookecagle,
        },
      },
      {
        content:
          "Wow, thank you! Tried a few and love it! My small example (pic of father from 70s original on right), really cleaned it up!",

        author: {
          name: "Charlotte Ellison",
          role: "Software Engineer",
          image: christina,
        },
      },
    ],
  ];

  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="py-10"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto md:text-center">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl">
            Loved by many worldwide.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-700 leading-7">
            See what our 200,000+ users are saying about the product.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li
                    key={testimonialIndex}
                    className="hover:scale-105 transition duration-300 ease-in-out"
                  >
                    <a href={testimonial.link} target="_blank" rel="noreferrer">
                      <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-slate-900">
                            "{testimonial.content}"
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base text-slate-900">
                              {testimonial.author.name}
                            </div>
                            <div className="mt-1 text-sm text-slate-500">
                              {testimonial.author.role}
                            </div>
                          </div>
                          <div className="overflow-hidden rounded-full bg-slate-50">
                            <img
                              className="h-14 w-14 object-cover"
                              src={testimonial.author.image}
                              alt="picture of the testimonial author"
                              width={56}
                              height={56}
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
