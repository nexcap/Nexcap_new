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
    
      className=" space-y-3 mt-5 overflow-hidden border-b "
      key={idx}
      onClick={handleOpenAnswer}
    >
      <div className="text-base font-semibold cursor-pointer pb-5 flex items-center justify-between  text-gray-200 ">
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
      </div>
      <div
        ref={answerElRef}
        className="duration-300"
        style={{ height: answerHeight }}
      >
        <div>
          <p className="text-amber-100 text-base">{faqsItem.a}</p>
        </div>
      </div>
    </div>
  );
};

export default function InternFAQS() {
  const faqsList = [
    {
      q: "Is the internship remote?",
      a: "Yes, the internship is completely online.",
    },
    {
      q: "What is the duration of the internship?",
      a: "The duration will be specified in the internship details.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept UPI transactions, credit card, debit card, net banking as well as cash",
    },
    {
      q: "What are the eligibility criteria?",
      a: "Applicants should have a basic understanding of the area they are applying for. ",
    },
    {
      q: "How do I apply for the internship?",
      a: "You can apply through our website by filling out the application form.",
    },
    {
      q: "Will I receive a certificate at the end of the internship?",
      a: "Yes, you will receive a certificate upon successful completion of the internship.",
    }
  ];

  return (
    <>
      <br id="faqs" />
      <br />
      <br />

      <section className="py-24 leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-300">
            Interns’ Most Common Questions
            </h2>
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
