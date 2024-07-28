// src/components/ChatList.jsx
import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAppContext } from "../../../AppContext";
const ChatList = ({ userId }) => {
    const { user } = useAppContext();
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = `http://localhost:3000/Messages/freelancer/${user.id}/rooms`;

    useEffect(() => {
        const fetchChats = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(apiUrl, {
                    withCredentials: true,
                    validateStatus: () => true,
                });
                console.log(response.data);
                if (response.status === 200) {
                    setChats(response.data.rooms);
                } else {
                    throw new Error("Failed to fetch chats");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchChats();
    }, []);

    if (loading) {
        return (
            <div className="w-screen h-[80vh] flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-screen h-[80vh] flex items-center justify-center">
                <div className="text-red-600 font-semibold">{error}</div>
            </div>
        );
    }

    return (
        <div className="">
            {chats.length === 0 ? (
                <p className="text-sm font-semibold text-gray_v pt-12">
                    No chats available.
                </p>
            ) : (
                <div className=" flex ">
                    {" "}
                    <div className=" w-full md:w-[30%] min-h-[calc(100vh-60px)] shrink-0 border-r border-r-gray_white">
                        <ul className="space-y-4 w-full">
                            {chats.map((chat) => (
                                <li key={chat.id} className="">
                                    <Link
                                        className="p-4  flex items-center
                                         gap-x-4 border-y border-y-gray_white"
                                        to={`/Freelancer/rooms/${chat.id}`}
                                    >
                                        <img
                                            className=" rounded-full w-12 h-12 object-cover"
                                            src={`http://localhost:3000/${chat?.Client?.profile_pic_link}`}
                                            alt=""
                                        />
                                        <h3 className="text-xs text-gray_v font-semibold ">
                                            {`${chat?.Client?.lastName}`}
                                        </h3>
                                        {/* <p className="text-sm text-gray-600">
                                            {chat?.lastMessage[0]?.message}
                                        </p> */}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Outlet />
                </div>
            )}
        </div>
    );
};

export default ChatList;
