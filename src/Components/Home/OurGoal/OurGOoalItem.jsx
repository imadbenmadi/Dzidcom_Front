import React from "react";
import item from "../../../../public/Home/ower goal/item.png";

function OurGOoalItem() {
  return (
    <div>
      {" "}
      <img src={item} className="mt-2  w-[31px] max-md:w-5" />
      <div className="mt-3.5 max-md:max-w-full max-md:text-sm">
        Encouraging self-entrepreneurship stipulated in modern Algerian laws
      </div>
    </div>
  );
}

export default OurGOoalItem;
