import React from "react";
import chat_icon from "../../../../public/chat.png";

function Default() {
    return (
        <div
            className=" w-[70%]  flex-col items-center
                        pt-12  h-screen hidden md:flex gap-6"
        >
            <div className=" text-gray_v font-semibold">
                please select a room to start chat
            </div>
            <img src={chat_icon} className=" w-32" alt="" />
        </div>
    );
}

export default Default;
