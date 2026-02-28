import { useState } from "react";

const faqData = [
  {
    question: "What is an ATS?",
    answer:
      "An Applicant Tracking System (ATS) is software used by companies to filter and rank resumes before they reach a human recruiter.",
  },
  {
    question: "Why does my resume get rejected?",
    answer:
      "Most resumes are rejected because they lack relevant keywords, measurable achievements, or proper formatting compatible with ATS systems.",
  },
  {
    question: "How does ATS scan resumes?",
    answer:
      "ATS scans resumes by parsing text and matching keywords, skills, job titles, and experience against the job description.",
  },
  {
    question: "Do design and formatting matter?",
    answer:
      "Yes. Complex layouts, tables, graphics, and unusual fonts may cause ATS parsing errors.",
  },
  {
    question: "How can I improve my ATS score?",
    answer:
      "Use relevant job keywords, include measurable achievements, align your experience with the job description, and maintain clean formatting.",
  },
  {
    question: "Does ATS look at soft skills?",
    answer:
      "Yes, but mostly through keyword matching. Including leadership, communication, and teamwork examples improves scoring.",
  },
];

function ATSInfoSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="border border-black mt-16">
      <div className="max-w-5xl mx-auto px-4 py-16">

        {/* Section Title */}
        <div className="border border-black p-4 mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Understanding ATS
          </h2>
          <p className="mt-2">
            Learn how Applicant Tracking Systems work and how to optimize your resume.
          </p>
        </div>

        <div className="border border-black p-6 space-y-4">

          {faqData.map((item, index) => (
            <div key={index} className="border border-black">

              <button
                onClick={() => toggle(index)}
                className="w-full text-left border-b border-black p-4 flex justify-between items-center"
              >
                <span>{item.question}</span>
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>

              {openIndex === index && (
                <div className="border-t border-black p-4">
                  {item.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ATSInfoSection;