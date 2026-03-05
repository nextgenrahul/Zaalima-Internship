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

return ( <section className="mt-24 bg-gradient-to-b from-white to-slate-50"> <div className="max-w-5xl mx-auto px-6 py-20">

    {/* Section Title */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        Understanding ATS
      </h2>
      <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
        Learn how Applicant Tracking Systems work and how to optimize
        your resume to pass automated screening.
      </p>
    </div>

    <div className="space-y-5">

      {faqData.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden"
        >

          <button
            onClick={() => toggle(index)}
            className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-50 transition"
          >
            <span className="font-medium text-slate-800">
              {item.question}
            </span>

            <span className="text-xl font-bold text-blue-600">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          {openIndex === index && (
            <div className="px-6 pb-6 text-slate-600 leading-relaxed">
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
