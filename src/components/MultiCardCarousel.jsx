import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import React from "react";
import newsImage1 from "../assets/news-items-1.png";
import newsImage2 from "../assets/news-item-2.png";
import newsImage3 from "../assets/news-item-3.png";
import rarrow from "../assets/rarrow.svg";
import larrow from "../assets/larrow.svg";

const cards = [
  { 
    id: 1, 
    title: "Lorem ipsum dolor sit amet consectetur. Sed vulputate eget", 
    content: "Lorem ipsum dolor sit amet consectetur. Consequat sollicitudin in euismod dolor. Nec sodales viverra turpis molestie.", 
    image: newsImage1, 
    link: "#" 
  },
  { 
    id: 2, 
    title: "Lorem ipsum dolor sit amet consectetur. Sed vulputate eget", 
    content: "Lorem ipsum dolor sit amet consectetur. Consequat sollicitudin in euismod dolor. Nec sodales viverra turpis molestie.", 
    image: newsImage2, 
    link: "x" 
  },
  { 
    id: 3, 
    title: "Lorem ipsum dolor sit amet consectetur. Sed vulputate eget", 
    content: "Lorem ipsum dolor sit amet consectetur. Consequat sollicitudin in euismod dolor. Nec sodales viverra turpis molestie.", 
    image: newsImage3, 
    link: "#" 
  },
  { 
    id: 4, 
    title: "Lorem ipsum dolor sit amet consectetur. Sed vulputate eget", 
    content: "Lorem ipsum dolor sit amet consectetur. Consequat sollicitudin in euismod dolor. Nec sodales viverra turpis molestie.", 
    image: newsImage1, 
    link: "#" 
  },
];

const MultiCardCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
<div className="w-full card-item max-w-4xl text-center relative">
      <div className="w-full flex justify-between items-center space-x-4 arrow-nav">
        <button ref={prevRef} className="arrow-prev">
            <img src={larrow} alt="Left Arrow" />
        </button>
        <button ref={nextRef} className="arrow-next">
            <img src={rarrow} alt="Right Arrow" />
        </button>
      </div>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
          640: { slidesPerView: 2, spaceBetween: 15 }, // Tablet
          1024: { slidesPerView: 3, spaceBetween: 30 }, // Desktop
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper flex justify-center py-20"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} className="flex bg-white justify-center overflow-hidden w-[275px]">
          <a 
              href={card.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block transition transform hover:scale-105 max-w-xs mx-auto"
            >
              <img src={card.image} alt={card.title} className="w-full h-36 object-cover" />
              <div className="ln-card text-left">
                <h4 className="text-heading font-raleway text-xl pb-1">{card.title}</h4>
                <p className="font-minion text-lg">{card.content}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MultiCardCarousel;