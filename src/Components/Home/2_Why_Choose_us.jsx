import ChooseUsCard from "./WhyChooseUs/ChooseUsCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import image1 from "../../..//public/Home/Why choose us/image1.png";
import image2 from "../../../public/Home/Why choose us/image2.png";
import image3 from "../../../public/Home/Why choose us/image3.png";
import image4 from "../../../public/Home/Why choose us/image4.png";
import image5 from "../../../public/Home/Why choose us/image5.png";
import image6 from "../../../public/Home/Why choose us/image6.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Why_Choose_us() {
  const dataChoose = [
    {
      image: image1,
      text: "The projects' budget is streamlined for maximum efficiency, ensuring cost-effectiveness in our endeavors.",
    },
    {
      image: image2,
      text: "Multiple options available at varying costs, catering to diverse needs and budgets",
    },
    {
      image: image3,
      text: "Flexible employment contracts crafted through negotiations and compensations, tailored to meet your specific requirements",
    },
    {
      image: image4,

      text: "Building reputation and portfolio for the freelancer, establishing a strong presence in the market",
    },
    {
      image: image5,

      text: "Work flexibility combined with competitiveness, ensuring adaptability and excellence in performance.",
    },
    {
      image: image6,
      text: "Inspiring creativity and innovation, fostering a culture of continuous improvement and forward-thinking.",
    },
  ];
  return (
    <div className=" lg:px-16 max-md:px-5  mt-10">
      <div className="text-5xl  leading-[72.8px] text-zinc-800 max-md:max-w-full max-md:text-4xl">
        Why choose us?
      </div>
      <div className="mt-2 text-xl max-md:text-xs text-zinc-800 max-md:max-w-full">
        Discover the difference and elevate your expectations with us.
      </div>

      <Swiper
        className="mt-10"
        spaceBetween={50}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {dataChoose.map((item, index) => (
          <SwiperSlide key={index}>
            <ChooseUsCard image={item.image} text={item.text} key={index} />
          </SwiperSlide>
        ))}{" "}
      </Swiper>
    </div>
  );
}

export default Why_Choose_us;
