"use client";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

emailjs.init("aNuTOnuQYJ83TDbwG"); // Your public key

export default function ContactSection() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({ name: "", email: "", message: "" });

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const checkRequired = () => {
    if (userInput.name && userInput.email && userInput.message) {
      setError((prev) => ({ ...prev, required: false }));
    }
  };

  const handleSendMail = (e) => {
    e.preventDefault();

    if (!userInput.name || !userInput.email || !userInput.message) {
      setError((prev) => ({ ...prev, required: true }));
      return;
    }
    if (!isValidEmail(userInput.email)) {
      setError({ email: true, required: false });
      return;
    }

    setError({ email: false, required: false });
    setIsLoading(true);

    const templateParams = {
      from_name: userInput.name.trim() || "(No name provided)",
      from_email: userInput.email.trim(),
      message: userInput.message.trim() || "(No message provided)",
      time: new Date().toLocaleString(),
      subject: "Portfolio Contact Form", // optional
    };

    emailjs
      .send("service_igbi7uh", "template_8y6s6uv", templateParams)
      .then(() => {
        toast.success("Message sent successfully!");
        setUserInput({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        toast.error("Failed to send message, try again.");
        console.error("EmailJS send error:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
  {/* Heading with horizontal lines and box style */}
  <div className="flex justify-center my-5 lg:py-8">
    <div className="flex items-center">
      <span className="w-24 h-[2px] bg-[#1a1443]"></span>
      <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
        Contact Me
      </span>
      <span className="w-24 h-[2px] bg-[#1a1443]"></span>
    </div>
  </div>

  {/* Box container for content */}
  <div className="max-w-3xl w-full text-white rounded-lg border border-[#464c6a] p-6 mx-auto">
    <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Contact with me</p>
    <p className="text-sm text-[#d3d8e8]">
      If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.
    </p>
        <form onSubmit={handleSendMail} className="mt-6 flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name:</label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
              type="text"
              maxLength="100"
              value={userInput.name}
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
            />
          </div>
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email:</label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
              type="email"
              maxLength="100"
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError((prev) => ({ ...prev, email: !isValidEmail(userInput.email) }));
              }}
            />
            {error.email && <p className="text-sm text-red-400">Please provide a valid email!</p>}
          </div>
          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message:</label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
              maxLength="500"
              rows="4"
              value={userInput.message}
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
            />
          </div>
          {/* Submit */}
          <div className="flex flex-col items-center gap-3">
            {error.required && <p className="text-sm text-red-400">All fields are required!</p>}
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                "Sending Message..."
              ) : (
                <span className="flex items-center gap-1">
                  Send Message
                  <TbMailForward size={20} />
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
