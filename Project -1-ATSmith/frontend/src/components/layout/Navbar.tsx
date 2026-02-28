import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="border border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 border-b border-black">
            <div className="font-bold text-lg">ATSmith</div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="border border-black px-3 py-1">
                Home
              </a>
              <a href="#" className="border border-black px-3 py-1">
                Analyze
              </a>
              <a href="#" className="border border-black px-3 py-1">
                Dashboard
              </a>
            </div>
            <button
              className="md:hidden border border-black px-3 py-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              Menu
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden border-t border-black px-4 py-4 space-y-3">
            <a href="#" className="block border border-black px-3 py-2">
              Home
            </a>
            <a href="#" className="block border border-black px-3 py-2">
              Analyze
            </a>
            <a href="#" className="block border border-black px-3 py-2">
              Dashboard
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
