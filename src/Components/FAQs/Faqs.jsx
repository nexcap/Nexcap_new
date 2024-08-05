import { useRef, useState } from "react";

const FaqsCard = ({ faqsItem, idx }) => {
  const answerElRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [answerHeight, setAnswerHeight] = useState("0px");

  const handleOpenAnswer = () => {
    const answerElHeight = answerElRef.current.childNodes[0].offsetHeight;
    setIsOpen(!isOpen);
    setAnswerHeight(isOpen ? "0px" : `${answerElHeight + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-100 font-medium">
        {faqsItem.q}
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-amber-200 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-amber-200 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={{ height: answerHeight }}
      >
        <div>
          <p className="text-gray-300">{faqsItem.a}</p>
        </div>
      </div>
    </div>
  );
};

export default function Faqs() {
  const faqsList = [
    {
      q: "What does your company do?",
      a: "We offer a wide range of services including web, mobile, and desktop applications, as well as social media marketing.",
    },
    {
      q: "How can I contact customer support?",
      a: "You can reach our customer support through email, phone, live chat, or social media.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept UPI transactions, credit card, debit card, net banking as well as cash",
    },
    {
      q: "What is the average response time for customer support?",
      a: "We will get back to you within 1-2 business days.",
    },
    {
      q: "Do you offer customized design for products?",
      a: "Yes, we provide personalized design services. Contact us to discuss your unique requirements.",
    },
  ];

  return (
    <>
      <br id="faqs" />
      <br />
      <br />

      <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl text-white font-semibold">
            Frequently Asked Questions
          </h1>
          <p className="text-amber-100 max-w-lg mx-auto text-base">
            Clear your doubts. Still confused? Feel free to contact us.
          </p>
        </div>
        <div className="mt-14 max-w-2xl mx-auto">
          {faqsList.map((item, idx) => (
            <FaqsCard key={idx} faqsItem={item} idx={idx} />
          ))}
        </div>
      </section>
    </>
  );
}
