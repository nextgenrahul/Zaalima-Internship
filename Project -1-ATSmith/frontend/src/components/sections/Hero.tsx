function Hero() {
  return (
    <section className="border border-black">
      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="border border-black grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-6">

          <div className="p-6 space-y-6">
            
            <div className="border border-black p-2 inline-block">
              AI Resume Architect
            </div>

            <h1 className="p-4 text-3xl md:text-4xl lg:text-5xl font-bold">
              Optimize Your Resume for ATS in Seconds
            </h1>

            <p className="border border-black p-4 text-base md:text-lg">
              Upload your resume, paste a job description, and get an
              intelligent ATS match score with improvement suggestions.
            </p>

            <div className="border border-black p-4 flex flex-col sm:flex-row gap-4">
              <button className="border border-black px-6 py-3">
                Analyze Resume
              </button>

              <button className="border border-black px-6 py-3">
                Learn More
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="border border-black h-64 flex items-center justify-center">
              Resume Preview / Illustration Placeholder
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;