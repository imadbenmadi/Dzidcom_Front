import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAppContext } from "../../../AppContext";
import { FaArrowUp } from "react-icons/fa";

const ChatRoom = () => {
    const { user } = useAppContext();
    const userId = user.id;
    const { roomId } = useParams();
    const [messages, setMessages] = useState([]);
    const [room, setRoom] = useState();
    const [newMessage, setNewMessage] = useState("");
    const [isNewMessage, setIsNewMessage] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const chatApiUrl = `http://localhost:3000/Messages/freelancer/${userId}/rooms/${roomId}`;
    const postApiUrl = `http://localhost:3000/Messages/freelancer/${userId}/rooms/${roomId}`;

    useEffect(() => {
        const fetchMessages = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(chatApiUrl, {
                    withCredentials: true,
                    validateStatus: () => true,
                });
                console.log("response form get messsages", response.data);
                if (response.status === 200) {
                    setMessages(response.data.messages);
                    setRoom(response.data.room);
                } else {
                    throw new Error("Failed to fetch messages");
                }
            } catch (error) {
                console.error("Error fetching messages:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
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

    const handleSendMessage = async () => {
        if (newMessage.trim() === "") return;
        try {
            const response = await axios.post(
                postApiUrl,
                {
                    message: newMessage,
                    clientId: room.Client.id,
                },
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            console.log("response form post message", response.data);

            setMessages([...messages, response.data]);
            setNewMessage("");
            setIsNewMessage(true);
            setTimeout(() => setIsNewMessage(false), 500); // Reset the new message state after the transition
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <div className="h-[calc(100vh-60px)] flex flex-col justify-between w-full">
            <div className="space-y-4 mb-4 flex-grow overflow-y-auto h-[calc(100vh-60px-70px)] px-6">
                {!messages || messages.length === 0 ? (
                    <p className="text-sm font-semibold text-gray-500 pt-12">
                        No messages available.
                    </p>
                ) : (
                    messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`p-4 rounded-lg shadow transition-transform duration-300 ${
                                msg.senderId === userId
                                    ? "bg-blue-100 transform translate-x-2"
                                    : "bg-gray-100 transform -translate-x-2"
                            } ${
                                isNewMessage && index === messages.length - 1
                                    ? "transform translate-y-[-10px] opacity-0"
                                    : ""
                            }`}
                            onAnimationEnd={() => {
                                if (index === messages.length - 1) {
                                    setIsNewMessage(false);
                                }
                            }}
                        >
                            <p>{msg.message}</p>
                        </div>
                    ))
                )}
            </div>
            <div className="flex items-center space-x-4 w-full h-[70px] overflow-auto bg-white border-t px-6">
                <textarea
                    rows={1}
                    className="text-gray outline-0  placeholder:font-light text-start
                                    resize-none overflow-auto max-h-[50px] w-full border px-2 py-2  shadow-md"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => {
                        const textarea = e.target;
                        textarea.style.height = "auto"; // Reset height to calculate new height
                        textarea.style.height = textarea.scrollHeight + "px"; // Set new height based on scrollHeight
                        if (textarea.scrollHeight > textarea.clientHeight) {
                            textarea.style.overflowY = "scroll";
                        } else {
                            textarea.style.overflowY = "hidden";
                        }
                        setNewMessage(e.target.value); // Call your change handler
                    }}
                ></textarea>
                <button
                    onClick={handleSendMessage}
                    className="p-2 bg-blue-500 text-white rounded-lg"
                >
                    <FaArrowUp />
                </button>
            </div>
        </div>
    );
};

export default ChatRoom;
