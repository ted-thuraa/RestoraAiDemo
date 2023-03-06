import { AnimatePresence, motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import { useState } from "react";
import axiosClient from "../axios-client.js";
//import CountUp from "react-countup";
//import { UploadDropzone } from "react-uploader";
import Uploader from "../components/Uploader";
import DropZone from "../components/DropZone";
import { CompareSlider } from "../components/CompareSlider";
import Footer from "../components/Footer";
import Header from "../components/Header";
//import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";
import Toggle from "../components/Toggle";
import appendNewToName from "../utils/appendNewToName";
import downloadPhoto from "../utils/downloadPhoto";
//import NSFWPredictor from "../utils/nsfwCheck";
//import va from "@vercel/analytics";

export default function Restore() {
  const { token } = useStateContext();
  if (!token) {
    return <Navigate to="/login" />;
  }

  const [originalPhoto, setOriginalPhoto] = useState(null);
  const [restoredImage, setRestoredImage] = useState(null);
  const [restoredLoaded, setRestoredLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sideBySide, setSideBySide] = useState(false);
  const [photoName, setPhotoName] = useState(null);
  const [error, setError] = useState(null);

  const setOriginalImg = (img, name) => {
    setOriginalPhoto(img);
    setLoading(true);
    setPhotoName(name);
  };
  console.log(photoName);
  const setRestoredPhoto = (img) => {
    setLoading(false);
    setRestoredImage(img);
  };

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-28 sm:mb-0 mb-8">
        <p className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out">
          <span className="font-bold">325321 +</span> photos generated and
          counting.{" "}
        </p>
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl mb-5">
          Restore any face photo
        </h1>

        {/* <DropZone
          onRestoredImgChange={setRestoredPhoto}
          onOriginalImgChange={setOriginalImg}
        /> */}
        <ResizablePanel>
          <AnimatePresence exitBeforeEnter>
            <motion.div className="flex justify-between items-center w-full flex-col mt-4">
              <Toggle
                className={`${restoredImage ? "visible" : "invisible"} mb-6`}
                sideBySide={sideBySide}
                setSideBySide={(newVal) => setSideBySide(newVal)}
              />
              {restoredImage && sideBySide && (
                <CompareSlider
                  original={originalPhoto}
                  restored={restoredImage}
                />
              )}
              {!originalPhoto && (
                <DropZone
                  onRestoredImgChange={setRestoredPhoto}
                  onOriginalImgChange={setOriginalImg}
                />
              )}
              {originalPhoto && !restoredImage && (
                <img
                  alt="original photo"
                  src={originalPhoto}
                  className="rounded-2xl"
                  width={475}
                  height={475}
                />
              )}
              {restoredImage && originalPhoto && !sideBySide && (
                <div className="flex sm:space-x-4 sm:flex-row flex-col">
                  <div>
                    <h2 className="mb-1 font-medium text-lg">Original Photo</h2>
                    <img
                      alt="original photo"
                      src={originalPhoto}
                      className="rounded-2xl relative"
                      width={475}
                      height={475}
                    />
                  </div>
                  <div className="sm:mt-0 mt-8">
                    <h2 className="mb-1 font-medium text-lg">Restored Photo</h2>
                    <a href={restoredImage} target="_blank" rel="noreferrer">
                      <img
                        alt="restored photo"
                        src={restoredImage}
                        className="rounded-2xl relative sm:mt-0 mt-2 cursor-zoom-in"
                        width={475}
                        height={475}
                        onLoadingComplete={() => setRestoredLoaded(true)}
                      />
                    </a>
                  </div>
                </div>
              )}
              {loading && (
                <button
                  disabled
                  className="bg-black rounded-full text-white font-medium px-4 pt-2 pb-3 mt-8 hover:bg-black/80 w-40"
                >
                  <span className="pt-4">
                    {/* <LoadingDots color="white" style="large" /> */}
                    loading....
                  </span>
                </button>
              )}
              {error && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mt-8"
                  role="alert"
                >
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
              <div className="flex space-x-2 justify-center">
                {originalPhoto && !loading && (
                  <button
                    onClick={() => {
                      setOriginalPhoto(null);
                      setRestoredImage(null);
                      setRestoredLoaded(false);
                      setError(null);
                    }}
                    className="bg-rgb rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
                  >
                    Upload New Photo
                  </button>
                )}
                {restoredImage && originalPhoto && (
                  <button
                    onClick={() => {
                      if (restoredImage && photoName) {
                        downloadPhoto(
                          restoredImage,
                          appendNewToName(photoName)
                        );
                      }
                    }}
                    className="bg-white rounded-full text-black border font-medium px-4 py-2 mt-8 hover:bg-gray-100 transition"
                  >
                    Download Restored Photo
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </ResizablePanel>
      </main>
      <Footer />
    </div>
  );
}
