import React, { useState } from "react";

export default function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState(slides.imageUrls);
  //   console.log(slides.imageUrls);
  //   console.log(images);

  const previousImage = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextImage = () => {
    console.log(currentIndex);
    const isLastIndex = currentIndex === images.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div>
      <div
        className=""
        style={{ position: "relative" }}
        key={images[currentIndex]}
      >
        <div
          className=""
          style={{
            position: "absolute",
            top: "50%",
            transform: "translate(0, -50%)",
            left: "32px",
            fontSize: "45px",
            color: "#fff",
            zIndex: 1,
            cursor: "pointer",
            textShadow: "0 0 3px #FF00, 0 0 5px #000",
          }}
          onClick={previousImage}
        >
          {"◀"}
        </div>
        {/* {console.log(images)} */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            transform: "translate(0, -50%)",
            right: "32px",
            fontSize: "45px",
            color: "#fff",
            zIndex: 1,
            cursor: "pointer",
            textShadow: "0 0 3px #FF00, 0 0 5px #000",
          }}
          onClick={nextImage}
        >
          {"▶"}
        </div>
        <div
          className="h-[550px] bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      {/* {slides.imageUrls.map((url, index) => (
        <div key={url}>
          <div
            className="h-[550px] bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${url})` }}
          ></div>
        </div>
      ))} */}
    </div>
  );
}
