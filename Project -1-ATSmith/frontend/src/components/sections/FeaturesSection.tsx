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

  return (
    <section className="mt-20">
      <div className="max-w-6xl mx-auto px-4 py-16 border border-black rounded-2xl">

        {/* Section Title */}
        <div className="border border-black rounded-xl p-6 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            What ATSmith Offers
          </h2>
          <p className="mt-3 max-w-2xl mx-auto">
            Powerful tools to optimize your resume and increase your job match rate.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-black rounded-2xl p-8 space-y-4 hover:scale-105 transition-transform duration-200"
            >
              <div className="border border-black rounded-lg p-3 font-semibold">
                {feature.title}
              </div>

              <p className="border border-black rounded-lg p-4">
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