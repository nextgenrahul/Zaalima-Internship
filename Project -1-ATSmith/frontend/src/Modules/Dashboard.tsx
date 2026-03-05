import { useNavigate } from "react-router-dom";

const analyses = [
{
id: 1,
resume: "Frontend Developer Resume",
role: "React Developer",
score: 82,
date: "2026-03-01",
},
{
id: 2,
resume: "Backend Resume",
role: "Node.js Developer",
score: 74,
date: "2026-02-25",
},
{
id: 3,
resume: "Full Stack Resume",
role: "Full Stack Engineer",
score: 88,
date: "2026-02-20",
},
];

function Dashboard() {
const navigate = useNavigate();

return ( <div className="min-h-screen bg-slate-50">

  {/* Header */}
  <div className="border-b border-slate-200 bg-white">
    <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-slate-900">
        Dashboard
      </h1>

      <button
        onClick={() => navigate("/#analyze")}
        className="px-5 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600"
      >
        New Analysis
      </button>

    </div>
  </div>

  <div className="max-w-7xl mx-auto px-6 py-10">

    {/* Stats */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <p className="text-sm text-slate-500">Total Analyses</p>
        <h2 className="text-3xl font-bold text-slate-900 mt-2">12</h2>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <p className="text-sm text-slate-500">Average ATS Score</p>
        <h2 className="text-3xl font-bold text-blue-600 mt-2">79%</h2>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <p className="text-sm text-slate-500">Best Score</p>
        <h2 className="text-3xl font-bold text-green-600 mt-2">88%</h2>
      </div>

    </div>

    {/* Analysis Table */}
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">

      <div className="px-6 py-4 border-b border-slate-200">
        <h3 className="font-semibold text-slate-900">
          Recent Resume Analyses
        </h3>
      </div>

      <table className="w-full text-sm">

        <thead className="bg-slate-50 text-slate-600">
          <tr>
            <th className="text-left px-6 py-3">Resume</th>
            <th className="text-left px-6 py-3">Job Role</th>
            <th className="text-left px-6 py-3">Score</th>
            <th className="text-left px-6 py-3">Date</th>
            <th className="text-left px-6 py-3">Action</th>
          </tr>
        </thead>

        <tbody>

          {analyses.map((item) => (
            <tr key={item.id} className="border-t border-slate-200">

              <td className="px-6 py-4 text-slate-900">
                {item.resume}
              </td>

              <td className="px-6 py-4 text-slate-600">
                {item.role}
              </td>

              <td className="px-6 py-4 font-semibold text-blue-600">
                {item.score}%
              </td>

              <td className="px-6 py-4 text-slate-600">
                {item.date}
              </td>

              <td className="px-6 py-4">
                <button className="text-blue-600 hover:underline">
                  View
                </button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>

  </div>

</div>

);
}

export default Dashboard;
