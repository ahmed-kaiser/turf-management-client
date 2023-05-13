import { useEffect, useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import turfImage1 from "../assets/images/turf1.jpg";
import turfImage2 from "../assets/images/turf2.jpg";
import turfImage3 from "../assets/images/turf3.jpg";

const images = [turfImage1, turfImage2, turfImage3];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const goToPrevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  useEffect(() => {
    let interval = null;

    if (autoplay) {
      interval = setInterval(goToNextImage, 5000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoplay]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToPrevImage}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <RiArrowLeftSLine className="w-6 h-6" />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToNextImage}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <RiArrowRightSLine className="w-6 h-6" />
          <span className="sr-only">Next</span>
        </span>
      </button>
      <div className="relative overflow-hidden h-56 md:h-[600px]">
        {images.map((image, index) => (
          <div key={index} className="duration-700 ease-in-out">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className={`absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 duration-700 ease-in-out transition-opacity ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
