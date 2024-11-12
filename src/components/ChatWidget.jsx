// ChatWidget.jsx
import { useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa";

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSendMessage = () => {
        if (input.trim()) {
            const newMessage = { text: input, sender: "user" };
            setMessages([...messages, newMessage]);
            setInput("");
            // Aquí podrías llamar a la API para enviar el mensaje al servidor
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* Botón de abrir/cerrar chat */}
            <button
                onClick={toggleChat}
                className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
            >
                {isOpen ? <FaTimes /> : <FaComments />}
            </button>

            {/* Ventana de chat */}
            {isOpen && (
                <div className="w-80 h-96 bg-white border shadow-lg rounded-lg overflow-hidden mt-2">
                    <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
                        <h2 className="font-bold">Chat Soporte</h2>
                        <button onClick={toggleChat} className="text-white">
                            <FaTimes />
                        </button>
                    </div>
                    <div className="p-4 flex flex-col space-y-4 overflow-y-auto h-[70%]">
                        {messages.map((msg, index) => (
                            <div key={index} className={`text-sm ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                                <p className="px-4 py-2 rounded-lg inline-block shadow-sm bg-blue-100">
                                    {msg.text}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="p-2 border-t flex items-center">
                        <input
                            type="text"
                            className="flex-1 border border-gray-300 rounded-lg p-2 outline-none"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Escribe un mensaje..."
                        />
                        <button onClick={handleSendMessage} className="bg-blue-600 text-white px-3 py-2 ml-2 rounded-lg">
                            Enviar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWidget;
