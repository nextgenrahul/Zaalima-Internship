function ResultsSection() {
  return (
    <section className="border border-black mt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="border border-black p-4 mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            ATS Analysis Results
          </h2>
          <p className="mt-2">
            Detailed breakdown of your resume match performance.
          </p>
        </div>

        <div className="border border-black p-8 mb-10 text-center">
          <div className="border border-black p-6 inline-block">
            <p className="text-sm">Overall Match Score</p>
            <h3 className="text-4xl font-bold mt-2">82%</h3>
          </div>
        </div>

        <div className="border border-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">

          <div className="border border-black p-6 space-y-4">
            <h4 className="border border-black p-2 font-semibold">
              Strengths
            </h4>

            <ul className="space-y-2">
              <li className="border border-black p-2">
                Strong React experience
              </li>
              <li className="border border-black p-2">
                Backend API development
              </li>
              <li className="border border-black p-2">
                TypeScript proficiency
              </li>
            </ul>
          </div>

          <div className="border border-black p-6 space-y-4">
            <h4 className="border border-black p-2 font-semibold">
              Missing / Weak Skills
            </h4>

            <ul className="space-y-2">
              <li className="border border-black p-2">
                Docker experience
              </li>
              <li className="border border-black p-2">
                CI/CD knowledge
              </li>
              <li className="border border-black p-2">
                Testing frameworks
              </li>
            </ul>
          </div>

          <div className="border border-black p-6 space-y-4">
            <h4 className="border border-black p-2 font-semibold">
              Improvement Suggestions
            </h4>

            <ul className="space-y-2">
              <li className="border border-black p-2">
                Add measurable achievements
              </li>
              <li className="border border-black p-2">
                Include cloud experience
              </li>
              <li className="border border-black p-2">
                Use more action verbs
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ResultsSection;