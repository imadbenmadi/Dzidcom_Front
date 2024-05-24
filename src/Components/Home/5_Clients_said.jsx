import { Swiper, SwiperSlide } from "swiper/react";
import user from "../../../public/Home/Client said/user.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ServiceCard from "./Services/ServiceCard";
import ClientsSaidCard from "./ClientsSaid/ClientsSaidCard";

function Clients_said() {
  const dataChoose = [
    {
      image: user,
      user: " Loretta Upton",
      text: "Illo nihil vitae possimus minima consequatur itaque doloremque. Illo nihil vitae possimus minima consequatur itaque doloremque. Illo nihil vitae possimus minima consequatur itaque doloremque.",
    },
    {
      image: user,
      user: " Loretta Upton",
      text: "Illo nihil vitae possimus minima consequatur itaque doloremque. Illo nihil vitae possimus minima consequatur itaque doloremque. Illo nihil vitae possimus minima consequatur itaque doloremque.",
    },
    {
      image: user,
      user: " Loretta Upton",
      text: "Illo nihil vitae possimus minima consequatur itaque doloremque. Illo nihil vitae possimus minima consequatur itaque doloremque. Illo nihil vitae possimus minima consequatur itaque doloremque.",
    },
    {
      image: user,
      user: " Loretta Upton",
      text: "Illo nihil vitae possimus minima consequatur itaque doloremque. Illo nihil vitae possimus minima consequatur itaque doloremque. Illo nihil vitae possimus minima consequatur itaque doloremque.",
    },
  ];
  return (
    <div className=" lg:px-16 max-md:px-5 px-5  mt-10 max-w-[1200px] mx-auto ">
      <div className="text-5xl  leading-[72.8px] text-zinc-800 max-md:max-w-full max-md:text-4xl">
        The services we provide
      </div>
      <div className="mt-2 text-xl max-md:text-xs text-zinc-800 max-md:max-w-full">
        Discover services to help your company thrive with our freelance
        platform.
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
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {dataChoose.map((item, index) => (
          <SwiperSlide key={index}>
            <ClientsSaidCard
              image={item.image}
              text={item.text}
              user={item.user}
              key={index}
            />
          </SwiperSlide>
        ))}{" "}
      </Swiper>
    </div>
  );
}

export default Clients_said;
