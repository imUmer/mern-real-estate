import React, { useEffect, useState } from "react";

export const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState(slides.imageUrls);
    // console.log(slides);
    console.log(slides);

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
            backgroundImage: `url(${images[currentIndex] || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw9JzG9-BcR653gmoC2jhd7amrEj-HFzYWfQ&s'})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
}
export const  ImageSliderHome = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const filteredImages = slides
      .filter((slide) => slide.imageUrls && slide.imageUrls.length > 0)
      .flatMap((slide) => slide.imageUrls);
    setImages(filteredImages);
  }, [slides]);

  const previousImage = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImage = () => {
    const isLastIndex = currentIndex === images.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div style={{ position: "relative" }} key={images[currentIndex]}>
        <div
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
          className="h-[450px] bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${images[currentIndex] || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw9JzG9-BcR653gmoC2jhd7amrEj-HFzYWfQ&s'})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );

}

export default (ImageSlider,ImageSlider);