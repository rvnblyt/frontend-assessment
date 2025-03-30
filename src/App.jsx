import React from "react";
import MultiCardCarousel from "./components/MultiCardCarousel.jsx";
import FeatureList from "./components/FeatureList.jsx";
import "@fontsource/raleway";
import "@fontsource/raleway/700.css";

const App = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full">
        {/* Latest News Section */}
        <div className="latest-news-col relative flex flex-row items-center py-11 px-5 animate-fade-in">
          <div className="max-w-con mx-auto">
            <div className="latest-news-con text-light relative flex flex-col md:flex-row mb-4 items-center mx-0">
              <div className="latest-news-text-con w-full md:w-1/4 text-center md:text-left z-1 pr-10">
                <h2 className="font-raleway text-[36px] text-[#0C233F]">Latest News</h2>
                <p className="font-minion text-[16px] leading-[1.3em] text-[#0C233F] text-18">
                  Lorem ipsum dolor sit amet consectetur urna dolor
                </p>
              </div>
              <div className="ln-carousel w-full md:w-3/4 mt-4 md:mt-0 relative">
                <MultiCardCarousel />
              </div>
            </div>
          </div>
        </div>

        {/* Feature List Section */}
        <div className="featured-list-sec flex flex-col md:flex-row mb-4 items-center max-w-con mx-auto">
          <div className="featured-list-con flex items-center">
            <div className="w-full md:w-2/5 text-center md:text-left">
              <h2 className="font-raleway text-[36px] text-[#0C233F] font-normal">Expanding Your Knowledge</h2>
              <p className="font-minion text-[16px] leading-[1.3em] text-[#0C233F] text-18">
                Lorem ipsum dolor sit amet consectetur urna dolor
              </p>
            </div>
            <div className="w-full md:w-3/5 mt-4 md:mt-0">
              <FeatureList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
