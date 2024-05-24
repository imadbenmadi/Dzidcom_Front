import React from "react";
import Rating from "react-rating";
import start from "../../../../public/Home/Client said/start.png";
import user from "../../../../public/Home/Client said/user.png";
function ClientsSaidCard({ image, user, text }) {
  return (
    <div className=" w-[100%] px-10 py-12 bg-white rounded-3xl shadow flex-col justify-start items-start gap-5 inline-flex">
      <div className="flex justify-start items-center gap-4">
        <div className="w-24 h-24 rounded-full">
          <img className="w-full h-ful" src={image} alt="" />
        </div>
        <div className="flexjustify-start items-center gap-2.5">
          <div> {user}</div>
          <Rating
            className="w-full"
            emptySymbol={<img src={start} className="icon w-10" />}
            fullSymbol={null}
            initialRating={3}
            direction="rtl"
            readonly
          />{" "}
        </div>
      </div>
      <div>{text}</div>
    </div>
  );
}

export default ClientsSaidCard;
