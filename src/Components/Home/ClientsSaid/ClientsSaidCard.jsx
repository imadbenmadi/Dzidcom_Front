import React from "react";
import Rating from "react-rating";
import start from "../../../../public/Home/Client said/start.png";
import user from "../../../../public/Home/Client said/user.png";
function ClientsSaidCard({ image, user, text }) {
  return (
    <div className=" slide w-[100%] my-5 px-5 py-4 bg-white rounded-3xl shadow flex-col justify-start items-start gap-5 inline-flex">
      <div className="flex justify-start items-center gap-4">
        <div className="w-20 h-20 rounded-full">
          <img className="w-full h-ful" src={image} alt="" />
        </div>
        <div className="flexjustify-start items-center gap-2.5">
          <div> {user}</div>
          <Rating
            className="w-full"
            fullSymbol={<img src={start} className="icon w-7 h-fit" />}
            initialRating={3}
            stop={3}
            // direction="rtl"
            readonly
          />{" "}
        </div>
      </div>
      <div className="text-sm">{text}</div>
    </div>
  );
}

export default ClientsSaidCard;
