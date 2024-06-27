"use client";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import React, { useEffect, useState } from "react";

const CarouselComponent = ({
  items,
  autoSlide = false,
  autoSlideInterval = 3000,
  showButton = false,
}: {
  items: any;
  autoSlide?: boolean;
  autoSlideInterval?: number;
  showButton: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    let slideInterval: any;
    if (autoSlide) {
      slideInterval = setInterval(handleNext, autoSlideInterval);
    }
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="overflow-hidden w-full relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item: any, index: number) => (
            <div key={index} className="w-full flex h-auto items-center justify-center flex-shrink-0">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          !showButton
            ? "hidden"
            : "flex gap-10 mt-10 w-full items-center justify-center self-center "
        }
      >
        <button onClick={handlePrev} className=" w-10 h-10 ">
          <ArrowLeftCircle size={52} />
        </button>
        <button onClick={handleNext} className=" w-10 h-10 ">
          <ArrowRightCircle size={52} />
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
