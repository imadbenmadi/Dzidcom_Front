import React from "react";
import chat_icon from "../../../../public/chat.png";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function Default() {
    const { chats } = useOutletContext();

    if (!chats || chats == null || chats == undefined) {
        return (
            <div className="w-screen h-[80vh] flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    } else if (chats && chats.length === 0) {
        return (
            <p className="text-sm font-semibold text-gray_v pt-12">
                No chats available.
            </p>
        );
    }

    return (
        <>
            <div className="w-[70%] flex-col items-center pt-12 h-screen hidden md:flex gap-6">
                <div className="text-gray_v font-semibold">
                    Please select a room to start chat
                </div>
                <img src={chat_icon} className="w-32" alt="Chat Icon" />
            </div>
            <div className="w-full min-h-[calc(100vh-60px)] shrink-0 border-r border-r-gray_white block md:hidden">
                <ul className="space-y-4 w-full">
                    {chats.map((chat) => (
                        <li key={chat.id} className="">
                            <Link
                                className="p-4 flex items-center gap-x-4 border-y border-y-gray_white"
                                to={`/Client/rooms/${chat.id}`}
                            >
                                <img
                                    className="rounded-full w-12 h-12 object-cover"
                                    src={`http://localhost:3000/${chat?.Freelancer?.profile_pic_link}`}
                                    alt=""
                                />
                                <h3 className="text-xs text-gray_v font-semibold">
                                    {`${chat?.Freelancer?.lastName}`}
                                </h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Default;
