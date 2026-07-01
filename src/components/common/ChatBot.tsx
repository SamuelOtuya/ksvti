import { MessageCircle, Send, X, Bot, CheckCircle } from "lucide-react";
import { useState } from "react";

type Message = {
  sender: "bot" | "user";
  text: string;
};

const quickQuestions = [
  "Which courses do you offer?",
  "How do I apply?",
  "Where are you located?",
  "Do you offer practical training?",
];

function getBotReply(question: string) {
  const text = question.toLowerCase();

  if (text.includes("course") || text.includes("program")) {
    return "We offer courses in Tech & Digital, Technical Skills, Beauty & Hospitality, Business and Languages. Examples include Web Design, Coding, Graphic Design, AI, Cyber Security, Electrical Installation, Plumbing, Hairdressing, Catering, Accounting, German, French and Chinese.";
  }

  if (
    text.includes("location") ||
    text.includes("located") ||
    text.includes("where")
  ) {
    return "We are located at Mizpah Plaza, 4th Floor, opposite Quickmart Supermarket, Kahawa Sukari.";
  }

  if (text.includes("apply") || text.includes("admission")) {
    return "You can apply online by clicking the Apply Now button on the website. Fill in your details and our admissions office will contact you shortly.";
  }

  if (text.includes("fee") || text.includes("fees")) {
    return "For fee details, kindly contact the admissions office through WhatsApp or phone: +254 717 976 448.";
  }

  if (text.includes("practical") || text.includes("training")) {
    return "Yes. KSVTI focuses on practical hands-on training to prepare learners for employment and self-employment.";
  }

  return "Thank you for your question. For detailed assistance, kindly contact us on WhatsApp: +254 717 976 448.";
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! Welcome to KSVTI. I can help you with courses, admissions, fees, location and application guidance.",
    },
  ]);

  function sendMessage(text?: string) {
    const messageText = text || input;

    if (!messageText.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: messageText },
      { sender: "bot", text: getBotReply(messageText) },
    ]);

    setInput("");
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-8 right-6 z-50 flex items-center gap-3 rounded-full bg-[#2d1b5e] px-5 py-4 text-white shadow-2xl transition hover:scale-105 hover:bg-[#3d2680]"
        >
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#f5a623]">
            <MessageCircle size={23} />
            <span className="absolute -right-1 -top-1 h-3 w-3 animate-ping rounded-full bg-green-400" />
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-green-400" />
          </span>

          <span className="text-left leading-tight">
            <span className="block text-sm font-black">Chat with us</span>
            <span className="block text-xs text-white/70">We’re online</span>
          </span>
        </button>
      )}

      {open && (
        <div className="fixed bottom-10 right-6 z-50 w-[360px] overflow-hidden rounded-2xl bg-white shadow-2xl max-sm:right-3 max-sm:w-[calc(100vw-24px)]">
          <div className="flex items-center justify-between bg-[#2d1b5e] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5a623]">
                <Bot size={24} />
              </div>

              <div>
                <h3 className="font-black">KSVTI Assistant</h3>
                <p className="flex items-center gap-2 text-xs text-white/70">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Online admissions help
                </p>
              </div>
            </div>

            <button onClick={() => setOpen(false)}>
              <X size={22} />
            </button>
          </div>

          <div className="bg-[#fffaf0] px-5 py-4">
            <p className="text-sm font-bold text-[#2d1b5e]">
              Need help choosing a course?
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#f5a623]" />
                Course Selection
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#f5a623]" />
                Admissions
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#f5a623]" />
                Fees Info
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#f5a623]" />
                Location
              </div>
            </div>
          </div>

          <div className="h-[300px] space-y-3 overflow-y-auto bg-[#f5f5f5] p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-6 ${
                  message.sender === "bot"
                    ? "bg-white text-gray-700"
                    : "ml-auto bg-[#f5a623] text-white"
                }`}
              >
                {message.text}
              </div>
            ))}

            <div className="space-y-2 pt-2">
              {quickQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => sendMessage(question)}
                  className="block w-full rounded-full bg-white px-4 py-2 text-left text-xs font-semibold text-[#2d1b5e] hover:bg-[#f5a623] hover:text-white"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t bg-white p-3">
            <a
              href="https://wa.me/254717976448?text=Hello%20KSVTI%2C%20I%20would%20like%20to%20make%20an%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg bg-green-500 px-4 py-3 text-center text-sm font-bold text-white no-underline transition hover:bg-green-600"
            >
              Chat with us on WhatsApp
            </a>
          </div>

          <div className="flex gap-2 border-t bg-white p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your question..."
              className="flex-1 rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#f5a623]"
            />

            <button
              onClick={() => sendMessage()}
              className="rounded-lg bg-[#f5a623] px-4 text-white hover:bg-[#d4891a]"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
