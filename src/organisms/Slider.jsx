import { useState, useEffect } from "react";
import Hero from "./Hero";
import { ButtonIcon } from "../atoms/Buttons";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";


// Componente Slider Hero
const SliderContainer = ({ children }) => (
  <div className="relative w-full h-auto">{children}</div>
);

const Slide = ({ active, children }) => (
  <div
    className={`w-full h-full absolute top-0 left-0 transition-opacity duration-500 ${
      active ? "opacity-100" : "opacity-0"
    }`}
  >
    {children}
  </div>
);

const SliderButton = ({ onClick, children, style }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 transform -translate-y-1/2 text-white text-3xl cursor-pointer"
    style={style}
  >
    {children}
  </button>
);


const SliderHero = ({ heroList }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % heroList.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + heroList.length) % heroList.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <SliderContainer>
      {heroList.map((hero, index) => (
        <Slide key={index} active={index === currentSlide}>
          <Hero
            button={hero.button}
            title={hero.title}
            subtitle={hero.subtitle}
            img={hero.image}
          />
        </Slide>
      ))}
      <SliderButton onClick={prevSlide} style={{ left: 0 }}>
        <GrCaretPrevious />
      </SliderButton>
      <SliderButton onClick={nextSlide} style={{ right: 0 }}>
        <GrCaretNext />
      </SliderButton>
    </SliderContainer>
  );
};


//Componente Slider items 
const SliderItemsContainer = ({ children }) => (
  <div className="relative flex justify-start items-center gap-12 overflow-hidden w-full">
    {children}
  </div>
);

const SliderItem = ({ children }) => (
  <div className="flex-shrink-0 w-300px h-auto flex items-center justify-center bg-gray-300">
    {children}
  </div>
);


const SliderItems = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < items.length - itemsPerPage) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  return (
    <SliderItemsContainer>
      {currentIndex > 0 && (
        <SliderButton onClick={handlePrevClick} style={{ left: 0 }}>
          <ButtonIcon
            color="white"
            bgColor="primary-300"
            padding="10px 12px"
            fontSize="17px"
            border="none"
            icon={<BsFillCaretLeftFill />}
          />
        </SliderButton>
      )}
      {currentIndex < items.length - 1 && (
        <SliderButton onClick={handleNextClick} style={{ right: 0 }}>
          <ButtonIcon
            color="white"
            bgColor="primary-300"
            padding="10px 12px"
            fontSize="17px"
            border="none"
            icon={<BsFillCaretRightFill />}
          />
        </SliderButton>
      )}
      {items
        .slice(currentIndex, currentIndex + itemsPerPage)
        .map((item, index) => (
          <SliderItem key={index}>{item}</SliderItem>
        ))}
    </SliderItemsContainer>
  );
};

export { SliderHero, SliderItems };
