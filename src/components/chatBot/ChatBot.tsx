"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import botAnimation from "../../../public/robot.json";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm ACES 🤖", from: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { text: input, from: "user" }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Let me think... 🤔", from: "bot" }
      ]);
    }, 600);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 overflow-hidden">
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="w-80 bg-white dark:bg-gray-900 text-black dark:text-white rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700"
        >
          {/* Header */}
          <div className="p-3 bg-gradient-to-r from-black to-indigo-800 text-white rounded-t-2xl flex items-center gap-3">
            <Lottie loop play animationData={botAnimation} style={{ width: 40, height: 40 }} />
            <h2 className="font-bold text-lg">ACESBot</h2>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto bg-white text-black px-2 py-1 rounded hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              ×
            </button>
          </div>

          {/* Chat Messages */}
          <div className="max-h-60 overflow-y-auto p-4 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-xl max-w-[70%] ${
                  msg.from === "bot"
                    ? "bg-blue-100 dark:bg-blue-900 text-left"
                    : "bg-gray-200 dark:bg-gray-700 self-end ml-auto text-right"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="flex border-t border-gray-300 dark:border-gray-700 p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 outline-none px-2 bg-transparent text-black dark:text-white dark:placeholder-gray-400"
              placeholder="Type here..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white px-3 rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.button
          onClick={() => setOpen(true)}
          className="p-3 rounded-full shadow-lg hover:scale-105"
          whileHover={{ rotate: 5 }}
        >
          <Lottie loop play animationData={botAnimation} style={{ width: 50, height: 50 }} />
        </motion.button>
      )}
    </div>
  );
}
