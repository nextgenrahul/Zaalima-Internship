function Footer() {
  return (
    <footer className="border border-black mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className=" p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className=" p-4">
            <h2 className="font-bold text-lg mb-4">ATSmith</h2>
            <p>
              AI Resume Architect & ATS Optimizer helping you align your
              resume with job descriptions and improve match scores.
            </p>
          </div>

          <div className=" p-4">
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li className=" px-2 py-1">Resume Analyzer</li>
              <li className=" px-2 py-1">Match Scoring</li>
              <li className=" px-2 py-1">Skill Gap Insights</li>
              <li className=" px-2 py-1">AI Suggestions</li>
            </ul>
          </div>

          <div className=" p-4">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li className=" px-2 py-1">Blog</li>
              <li className=" px-2 py-1">Guides</li>
              <li className=" px-2 py-1">FAQ</li>
              <li className=" px-2 py-1">Support</li>
            </ul>
          </div>

          <div className=" p-4">
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li className=" px-2 py-1">Privacy Policy</li>
              <li className=" px-2 py-1">Terms of Service</li>
              <li className=" px-2 py-1">Cookies</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <div className=" px-4 py-2">
            © {new Date().getFullYear()} ATSmith. All rights reserved.
          </div>

          <div className="flex gap-4">
            <div className=" px-4 py-2">Twitter</div>
            <div className=" px-4 py-2">LinkedIn</div>
            <div className=" px-4 py-2">GitHub</div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;