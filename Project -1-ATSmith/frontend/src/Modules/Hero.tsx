function Hero() {
return ( <section id="home" className="bg-gradient-to-b from-white to-slate-50"> <div className="max-w-7xl mx-auto px-6 py-24">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* Left Content */}
      <div className="space-y-7">

        <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
          AI Resume Architect
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
          Optimize Your Resume for ATS in Seconds
        </h1>

        <p className="text-lg text-slate-600 max-w-xl">
          Upload your resume, paste a job description, and instantly
          receive an AI-powered ATS match score with personalized
          improvement suggestions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">

          <button className="px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:opacity-90 transition">
            Analyze Resume
          </button>

          <button className="px-7 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition">
            Learn More
          </button>

        </div>

      </div>

      {/* Right Preview */}
      <div className="flex justify-center lg:justify-end">

        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-8 w-full max-w-md">

          <div className="text-center mb-6">
            <p className="text-sm text-slate-500">
              ATS Match Score
            </p>
            <h3 className="text-5xl font-bold text-blue-600 mt-2">
              82%
            </h3>
          </div>

          <div className="space-y-3 text-sm text-slate-600">

            <div className="flex justify-between bg-green-50 px-3 py-2 rounded-md">
              <span>React</span>
              <span className="text-green-600 font-medium">Matched</span>
            </div>

            <div className="flex justify-between bg-green-50 px-3 py-2 rounded-md">
              <span>TypeScript</span>
              <span className="text-green-600 font-medium">Matched</span>
            </div>

            <div className="flex justify-between bg-orange-50 px-3 py-2 rounded-md">
              <span>Docker</span>
              <span className="text-orange-500 font-medium">Missing</span>
            </div>

            <div className="flex justify-between bg-orange-50 px-3 py-2 rounded-md">
              <span>CI/CD</span>
              <span className="text-orange-500 font-medium">Missing</span>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>

);
}

export default Hero;
