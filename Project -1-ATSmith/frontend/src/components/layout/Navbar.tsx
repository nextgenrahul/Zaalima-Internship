import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-secondary text-textPrimary border-b border-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 border-b border-secondary">
            <div className="font-bold text-xl text-textPrimary">ATSmith</div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="px-3 py-1 text-textPrimary hover:bg-primary hover:text-white transition">
                Home
              </a>
              <a href="#" className="px-3 py-1 text-textPrimary hover:bg-primary hover:text-white transition">
                Analyze
              </a>
              <a href="#" className="px-3 py-1 text-textPrimary hover:bg-primary hover:text-white transition">
                Dashboard
              </a>
            </div>
            <button
              className="md:hidden px-3 py-1 bg-primary text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              Menu
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden border-t border-secondary px-4 py-4 space-y-3 bg-background">
            <a href="#" className="block px-3 py-2 text-textPrimary hover:bg-primary hover:text-white transition">
              Home
            </a>
            <a href="#" className="block px-3 py-2 text-textPrimary hover:bg-primary hover:text-white transition">
              Analyze
            </a>
            <a href="#" className="block px-3 py-2 text-textPrimary hover:bg-primary hover:text-white transition">
              Dashboard
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
