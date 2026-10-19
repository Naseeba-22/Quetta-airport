import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Bot,
  X,
  Send,
  Plane,
  Car,
  ShieldCheck,
  Phone,
} from "lucide-react";

function AirportAssistant() {
  const navigate = useNavigate();

  const [open, setOpen] =
    useState(false);

  const [messages, setMessages] =
    useState([
      {
        type: "bot",
        text:
          "Hello! I'm the Quetta Airport Assistant. How can I help you?",
      },
    ]);

  const options = [
    {
      label: "Check flight status",
      icon: Plane,
      path: "/flight-status",
      reply:
        "Opening the flight status page for you.",
    },
    {
      label: "Airport services",
      icon: ShieldCheck,
      path: "/services",
      reply:
        "Here are the passenger services available at the airport.",
    },
    {
      label: "Transport",
      icon: Car,
      path: "/transport",
      reply:
        "Opening airport transport information.",
    },
    {
      label: "Contact airport",
      icon: Phone,
      path: "/contact",
      reply:
        "Opening airport contact information.",
    },
  ];

  function handleOption(option) {
    setMessages((previous) => [
      ...previous,
      {
        type: "user",
        text: option.label,
      },
      {
        type: "bot",
        text: option.reply,
      },
    ]);

    setTimeout(() => {
      navigate(option.path);
      setOpen(false);
    }, 500);
  }

  return (
    <>
      {open && (
        <div className="assistant-panel">

          <div className="assistant-header">

            <div>
              <Bot size={22} />

              <div>
                <strong>
                  Airport Assistant
                </strong>

                <small>
                  Online • Demo
                </small>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
            >
              <X size={19} />
            </button>

          </div>

          <div className="assistant-messages">

            {messages.map(
              (message, index) => (
                <div
                  key={index}
                  className={`assistant-message ${message.type}`}
                >
                  {message.text}
                </div>
              )
            )}

          </div>

          <div className="assistant-options">

            {options.map((option) => {
              const Icon = option.icon;

              return (
                <button
                  key={option.label}
                  onClick={() =>
                    handleOption(option)
                  }
                >
                  <Icon size={16} />
                  {option.label}
                </button>
              );
            })}

          </div>

          <div className="assistant-input">

            <span>
              Choose an option above
            </span>

            <Send size={16} />

          </div>

        </div>
      )}

      <button
        className="assistant-button"
        onClick={() => setOpen(!open)}
        aria-label="Airport Assistant"
      >
        {open ? (
          <X size={25} />
        ) : (
          <Bot size={25} />
        )}

        <span>Assistant</span>
      </button>
    </>
  );
}

export default AirportAssistant;