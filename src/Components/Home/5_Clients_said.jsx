import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import ClientsSaidCard from "./ClientsSaid/ClientsSaidCard";
import user from "../../../public/Home/Client said/user.png";
import CustomPagination from "./ClientsSaid/CustomPagination";
import { Navigation } from "swiper/modules";
import "./ClientsSaid/clientSaidStyle.css";
function ClientsSaid() {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  const dataChoose = [
    {
      image: user,
      user: "Loretta Upton",
      text: "Illo nihil vitae possimus minima consequatur itaque doloremque. Illo nihil vitae possimus minima consequatur itaque doloremque. Illo nihil vitae possimus minima consequatur itaque doloremque.",
    },
    {
      image: user,
      user: "Loretta Upton",
      text: "Illo nihil vitae possimus minima consequatur itaque doloremque. Illo nihil vitae possimus minima consequatur itaque doloremque. Illo nihil vitae possimus minima consequatur itaque doloremque.",
    },
    {
      image: user,
      user: "Loretta Upton",
      text: "Illo nihil vitae possimus minima consequatur itaque doloremque. Illo nihil vitae possimus minima consequatur itaque doloremque. Illo nihil vitae possimus minima consequatur itaque doloremque.",
    },
    {
      image: user,
      user: "Loretta Upton",
      text: "Illo nihil vitae possimus minima consequatur itaque doloremque. Illo nihil vitae possimus minima consequatur itaque doloremque. Illo nihil vitae possimus minima consequatur itaque doloremque.",
    },
    {
      image: user,
      user: "Loretta Upton",
      text: "Illo nihil vitae possimus minima consequatur itaque doloremque. Illo nihil vitae possimus minima consequatur itaque doloremque. Illo nihil vitae possimus minima consequatur itaque doloremque.",
    },
    // Add more data objects as needed
  ];
  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <div className="lg:px-16 max-md:px-5 px-5 mt-10 max-w-[1200px] mx-auto">
      <div className="text-5xl leading-[72.8px] text-zinc-800 max-md:max-w-full max-md:text-4xl">
        The services we provide
      </div>
      <div className="mt-2 text-xl max-md:text-xs text-zinc-800 max-md:max-w-full">
        Discover services to help your company thrive with our freelance
        platform.
      </div>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        className="mt-10 h-[400px] w-[100%]"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        spaceBetween={10}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          400: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        // navigation={true}
        // navigation={true}
      >
        {dataChoose.map((item, index) => (
          <SwiperSlide key={index}>
            <ClientsSaidCard
              image={item.image}
              text={item.text}
              user={item.user}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom pagination */}
      <CustomPagination
        totalSlides={dataChoose.length}
        activeIndex={activeSlide}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
    </div>
  );
}

export default ClientsSaid;
