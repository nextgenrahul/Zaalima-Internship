import { useState } from "react";

function UploadSection() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [jobDescription, setJobDescription] = useState("");

  return (
    <section className="border border-black mt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Section Title */}
        <div className="border border-black p-4 mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Analyze Your Resume
          </h2>
          <p className="mt-2">
            Upload your resume and paste the job description below.
          </p>
        </div>

        {/* Main Upload Grid */}
        <div className="border border-black grid grid-cols-1 lg:grid-cols-2 gap-10 p-6">

          {/* Resume Upload Box */}
          <div className="border border-black p-6 space-y-6">

            <h3 className="border border-black p-3 font-semibold">
              Upload Resume (PDF / DOCX)
            </h3>

            <div className="border border-black p-6 flex flex-col items-center justify-center gap-4">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) =>
                  setFileName(e.target.files ? e.target.files[0].name : null)
                }
                className="border border-black p-2"
              />

              {fileName && (
                <div className="border border-black px-4 py-2">
                  Selected: {fileName}
                </div>
              )}
            </div>

          </div>

          {/* Job Description Box */}
          <div className="border border-black p-6 space-y-6">

            <h3 className="border border-black p-3 font-semibold">
              Paste Job Description
            </h3>

            <textarea
              rows={10}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste job description here..."
              className="border border-black p-4 w-full resize-none"
            />

          </div>

        </div>

        {/* Analyze Button Section */}
        <div className="border border-black mt-10 p-6 text-center">
          <button className="border border-black px-8 py-3 font-semibold">
            Analyze Resume
          </button>
        </div>

      </div>
    </section>
  );
}

export default UploadSection;