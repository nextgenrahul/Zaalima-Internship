function ResultsSection() {
return ( <section className="mt-24 bg-gradient-to-b from-slate-50 to-white"> <div className="max-w-7xl mx-auto px-6 py-20">
    {/* Header */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        ATS Analysis Results
      </h2>
      <p className="mt-3 text-slate-600">
        Detailed breakdown of how well your resume matches the job description.
      </p>
    </div>

    {/* Score Card */}
    <div className="flex justify-center mb-16">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-md px-12 py-10 text-center">

        <p className="text-sm text-slate-500">
          Overall Match Score
        </p>

        <h3 className="text-5xl font-bold text-blue-600 mt-3">
          82%
        </h3>

        <p className="mt-3 text-slate-600 text-sm">
          Your resume matches most of the required keywords and skills.
        </p>

      </div>
    </div>

    {/* Result Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Strengths */}
      <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
        <h4 className="font-semibold text-green-600 mb-4">
          Strengths
        </h4>

        <ul className="space-y-3 text-slate-700 text-sm">
          <li className="bg-green-50 px-3 py-2 rounded-md">
            Strong React experience
          </li>
          <li className="bg-green-50 px-3 py-2 rounded-md">
            Backend API development
          </li>
          <li className="bg-green-50 px-3 py-2 rounded-md">
            TypeScript proficiency
          </li>
        </ul>
      </div>

      {/* Missing Skills */}
      <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
        <h4 className="font-semibold text-orange-500 mb-4">
          Missing / Weak Skills
        </h4>

        <ul className="space-y-3 text-slate-700 text-sm">
          <li className="bg-orange-50 px-3 py-2 rounded-md">
            Docker experience
          </li>
          <li className="bg-orange-50 px-3 py-2 rounded-md">
            CI/CD knowledge
          </li>
          <li className="bg-orange-50 px-3 py-2 rounded-md">
            Testing frameworks
          </li>
        </ul>
      </div>

      {/* Suggestions */}
      <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
        <h4 className="font-semibold text-blue-600 mb-4">
          Improvement Suggestions
        </h4>

        <ul className="space-y-3 text-slate-700 text-sm">
          <li className="bg-blue-50 px-3 py-2 rounded-md">
            Add measurable achievements
          </li>
          <li className="bg-blue-50 px-3 py-2 rounded-md">
            Include cloud experience
          </li>
          <li className="bg-blue-50 px-3 py-2 rounded-md">
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
