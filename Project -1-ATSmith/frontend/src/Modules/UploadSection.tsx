import { useState } from "react";

function UploadSection() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [jobDescription, setJobDescription] = useState("");

  return (
    <section
      id="analyze"
      className="mt-20 bg-gradient-to-b from-slate-50 to-white"
    >
      {" "}
      <div className="max-w-7xl mx-auto px-6 py-20">
        ```
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Analyze Your Resume
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Upload your resume and paste the job description to see how well
            your resume matches the role.
          </p>
        </div>
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Upload Resume */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8 space-y-6">
            <h3 className="text-lg font-semibold text-slate-800">
              Upload Resume (PDF / DOCX)
            </h3>

            <div className="border-2 border-dashed border-slate-300 rounded-xl p-10 flex flex-col items-center justify-center gap-4 hover:border-blue-500 transition">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) =>
                  setFileName(e.target.files ? e.target.files[0].name : null)
                }
                className="text-sm"
              />

              {fileName && (
                <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-md text-sm">
                  Selected: {fileName}
                </div>
              )}
            </div>
          </div>

          {/* Job Description */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8 space-y-6">
            <h3 className="text-lg font-semibold text-slate-800">
              Paste Job Description
            </h3>

            <textarea
              rows={10}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste job description here..."
              className="w-full border border-slate-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>
        </div>
        {/* Button */}
        <div className="mt-14 text-center">
          <button className="px-10 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition shadow-md">
            Analyze Resume
          </button>
        </div>
      </div>
    </section>
  );
}

export default UploadSection;
