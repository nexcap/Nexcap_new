import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    
    <div
      className="space-y-3 mt-5 overflow-hidden border-b "
      key={idx}
      onClick={handleOpenAnswer}
      
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-100 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-amber-200 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
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
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-300">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

export default () => {
  const faqsList = [
    {
      q: "What does your company do?",
      a: "Currently, We offers a wide range of services including, Web applications, Mobile applications, Desktop applications, Social media marketing"
    },
    {
      q: "How can i connect your customer support?",
      a: "To contact our customer support, you can reach out through the following channels ( Email, Phone, Live chats, Socialmedia)",
    },
    {
      q: "What payment methods do you accept?",
      a: "Currently we are accepting UPI transactions and cash .We are working to bring credit card , debit card, Netbanking modes soon.  ",
    },
    {
      q: "What is the average response time for customer support?",
      a: " We'll get back to you in 1-2 business days.",
    },
    {
      q: "Do you offer customized design for our product?",
      a: "Yes, we provide personalized design services to meet your product specifications. Contact us to discuss your unique requirements.",
    }
  ];

  return (

    <>
<br id="faqs"/>
<br /><br />

    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-white font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-amber-100 max-w-lg mx-auto text-base">
          Clear your doubts . Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard idx={idx} faqsList={item} />
        ))}
      </div>
    </section>




    </>
  );
};
