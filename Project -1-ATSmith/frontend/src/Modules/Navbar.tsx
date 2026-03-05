import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
const navigate = useNavigate();
const [isOpen, setIsOpen] = useState(false);

const scrollToSection = (id: string) => {
document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
setIsOpen(false);
};

return ( 
<nav className="sticky top-0 z-50 bg-slate-50 border-b border-slate-200">  
  
  
  
  <div className="max-w-7xl mx-auto px-6">

    <div className="flex justify-between items-center h-16">

      <div
        onClick={() => navigate("/")}
        className="text-xl font-bold text-slate-900 cursor-pointer"
      >
        ATSmith
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">

        <button
          onClick={() => scrollToSection("home")}
          className="hover:text-blue-600 transition"
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection("analyze")}
          className="hover:text-blue-600 transition"
        >
          Analyze
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="hover:text-blue-600 transition"
        >
          Dashboard
        </button>

        {/* CTA */}
        <button
          onClick={() => scrollToSection("analyze")}
          className="ml-2 px-5 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition"
        >
          Try Now
        </button>

      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-slate-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

    </div>

  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden border-t border-slate-200 bg-white">

      <div className="flex flex-col px-6 py-4 gap-3 text-sm font-medium text-slate-700">

        <button
          onClick={() => scrollToSection("home")}
          className="text-left hover:text-blue-600 transition"
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection("analyze")}
          className="text-left hover:text-blue-600 transition"
        >
          Analyze
        </button>

        <button
          onClick={() => scrollToSection("dashboard")}
          className="text-left hover:text-blue-600 transition"
        >
          Dashboard
        </button>

        <button
          onClick={() => scrollToSection("analyze")}
          className="mt-2 px-4 py-2 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Try Now
        </button>

      </div>

    </div>
  )}
</nav>

);
};

export default Navbar;
