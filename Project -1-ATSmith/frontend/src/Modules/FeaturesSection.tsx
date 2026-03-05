function FeaturesSection() {
const features = [
{
title: "Resume Parsing",
description:
"Automatically extracts and processes text from PDF and DOCX resumes for accurate analysis.",
},
{
title: "ATS Match Score",
description:
"Calculates a percentage score based on how well your resume aligns with the job description.",
},
{
title: "Keyword Analysis",
description:
"Identifies missing and matched keywords to improve resume relevance.",
},
{
title: "Skill Gap Detection",
description:
"Highlights technical and soft skills missing from your resume.",
},
{
title: "AI Improvement Suggestions",
description:
"Provides intelligent suggestions to improve clarity, impact, and alignment.",
},
{
title: "Section-Wise Feedback",
description:
"Breaks down feedback into strengths, weaknesses, and actionable improvements.",
},
];

return ( <section className="mt-28 py-24 bg-gradient-to-b from-slate-50 to-white"> <div className="max-w-6xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        What ATSmith Offers
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-slate-600">
        Powerful AI-driven tools designed to optimize your resume and
        increase your chances of passing ATS filters.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {features.map((feature, index) => (
        <div
          key={index}
          className="group bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
        >

          {/* Icon Placeholder */}
          <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-5 group-hover:bg-blue-600 group-hover:text-white transition">
            {index + 1}
          </div>

          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            {feature.title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed">
            {feature.description}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>

);
}

export default FeaturesSection;
