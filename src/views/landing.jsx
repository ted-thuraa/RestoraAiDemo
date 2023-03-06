import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import originalPhoto from "../assets/images/blurr.jpg";
import restoredImage from "../assets/images/blurr-new.jpg";
import flick from "../assets/images/flick.png";
import Testimonials from "../components/Testimonials";

export default function Landing() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <div>
        <title>Face Photo Restorer</title>
      </div>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20">
        <p className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out">
          Used by over <span className="font-semibold">200,000</span> happy
          users
        </p>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          Experience the Magic of{" "}
          <span className="relative whitespace-nowrap ">
            <span className="relative text_rgb">AI-Powered</span>
          </span>{" "}
          Photo Restoration.
        </h1>
        <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
          Experience the magic of restoring your favorite photographs with
          unparalleled accuracy and detail. . 100% free – restore your photos
          today.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            className="bg-rgb rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
            href="/restore"
          >
            Restore your photos
          </a>
        </div>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="is_hidden">
            <svg
              width="150"
              height="150"
              viewBox="0 0 260 276"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-32 top-64"
            >
              <path
                d="M107.398 129.86C98.5148 140.754 88.9235 148.878 80.8654 153.336C76.8157 155.576 73.5231 156.685 71.1504 156.991C68.8018 157.293 68.1256 156.744 68.0712 156.7C68.0169 156.656 67.3437 156.104 67.1669 153.742C66.9883 151.357 67.4119 147.908 68.7915 143.491C71.5365 134.7 77.5634 123.67 86.4466 112.776C95.3298 101.882 104.921 93.7577 112.979 89.2995C117.029 87.059 120.321 85.9499 122.694 85.6447C125.043 85.3425 125.719 85.8909 125.773 85.9352C125.828 85.9795 126.501 86.5315 126.678 88.8928C126.856 91.2784 126.433 94.7269 125.053 99.1447C122.308 107.935 116.281 118.965 107.398 129.86Z"
                stroke="#FFCC17"
                stroke-width="16"
              />
              <path
                d="M159.298 177.677C151.274 188.28 142.352 196.144 134.709 200.432C130.876 202.583 127.708 203.641 125.372 203.927C123.089 204.206 122.153 203.708 121.808 203.447C121.463 203.186 120.73 202.421 120.378 200.148C120.018 197.822 120.176 194.485 121.204 190.212C123.254 181.691 128.397 170.968 136.421 160.366C144.444 149.763 153.366 141.899 161.009 137.611C164.842 135.46 168.01 134.401 170.346 134.116C172.63 133.836 173.565 134.335 173.91 134.596C174.255 134.857 174.989 135.622 175.34 137.895C175.7 140.22 175.542 143.558 174.514 147.831C172.464 156.352 167.321 167.075 159.298 177.677Z"
                stroke="#FFCC17"
                stroke-width="16"
              />
              <path
                d="M126.164 99.3592C130.758 64.7494 118.602 16.3818 33.2205 99.7901"
                stroke="#FFCC17"
                stroke-width="16"
                stroke-linecap="round"
              />
              <path
                d="M113.45 87.9259C141.981 76.0655 193.944 72.7174 173.541 154.208"
                stroke="#FFCC17"
                stroke-width="16"
                stroke-linecap="round"
              />
              <path
                d="M164.125 134.709C188.387 123.292 247.716 140.632 199.212 218.903C187.357 238.033 172.661 255.983 167.084 255.777"
                stroke="#FFCC17"
                stroke-width="16"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Original Photo</h2>
                <img
                  alt="Original photo"
                  src={originalPhoto}
                  className="w-96 h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Restored Photo</h2>
                <img
                  alt="Restored photo"
                  src={restoredImage}
                  width={400}
                  height={400}
                  className="w-96 h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
          <div className="is_hidden">
            <svg
              width="48"
              height="132"
              viewBox="0 0 124 144"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-32 top-96 "
            >
              <path
                d="M84.5514 11.3426C104.915 17.8302 134.343 35.6025 89.1519 54.7908C63.3056 66.2814 63.2931 79.8721 95.2057 109.95C127.118 140.027 51.8427 144.346 11.2251 99.3559"
                stroke="#FFCC17"
                stroke-width="22"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="mx-auto w-full px-8 max-w-5xl">
          <div className="py-12 md:py-24">
            <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col !space-y-4 justify-center ">
                <h2 className="font-display text-left font-bold m-0 text-4xl text-slate-900 sm:text-5xl">
                  Restore photos 100% automatically in 5 seconds with one click
                </h2>
                <div className="text-base text-left">
                  <p>
                    Thanks to our clever AI, you can slash editing time - and
                    have more fun! No matter if you want to restore old photos
                    or cleanup Poorly generated Ai images, we got you{" "}
                  </p>
                </div>
              </div>
              <div className="flex flex-col !space-y-4 justify-center">
                <img
                  alt="Within a flick"
                  src={flick}
                  className="w-96 h-96 rounded-2xl ml_8r"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
}
