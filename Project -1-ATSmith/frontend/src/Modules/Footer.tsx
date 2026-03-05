import { useNavigate } from "react-router-dom";
import URLS from "../Constant";

function Footer() {
const navigate = useNavigate();

return ( <footer className="bg-slate-50 text-slate-600 border-t border-slate-200"> <div className="max-w-7xl mx-auto px-6 py-14">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* Brand */}
      <div>
        <h2
          onClick={() => navigate("/")}
          className="font-bold text-xl text-slate-900 mb-4 cursor-pointer hover:text-blue-600 transition"
        >
          ATSmith
        </h2>

        <p className="text-sm leading-relaxed max-w-xs">
          AI Resume Architect & ATS Optimizer helping you align your resume
          with job descriptions and improve match scores.
        </p>
      </div>

      {/* Product */}
      <div>
        <h3 className="font-semibold text-slate-900 mb-4">
          Product
        </h3>

        <ul className="space-y-3 text-sm">
          <li className="hover:text-blue-600 cursor-pointer transition">
            Resume Analyzer
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            Match Scoring
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            Skill Gap Insights
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            AI Suggestions
          </li>
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h3 className="font-semibold text-slate-900 mb-4">
          Resources
        </h3>

        <ul className="space-y-3 text-sm">
          <li className="hover:text-blue-600 cursor-pointer transition">
            Blog
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            Guides
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            FAQ
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            Support
          </li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <h3 className="font-semibold text-slate-900 mb-4">
          Legal
        </h3>

        <ul className="space-y-3 text-sm">
          <li className="hover:text-blue-600 cursor-pointer transition">
            Privacy Policy
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            Terms of Service
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition">
            Cookies
          </li>
        </ul>
      </div>

    </div>

    {/* Bottom bar */}
    <div className="border-t border-slate-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

      <div className="text-sm text-slate-500">
        © {new Date().getFullYear()} ATSmith. All rights reserved.
      </div>

      <div className="flex gap-6 text-sm">

        <a
          href={URLS.TWITTER}
          target="_blank"
          className="hover:text-blue-600 transition"
        >
          Twitter
        </a>

        <a
          href={URLS.LINKEDIN}
          target="_blank"
          className="hover:text-blue-600 transition"
        >
          LinkedIn
        </a>

        <a
          href={URLS.GITHUB}
          target="_blank"
          className="hover:text-blue-600 transition"
        >
          GitHub
        </a>

      </div>

    </div>

  </div>
</footer>

);
}

export default Footer;
