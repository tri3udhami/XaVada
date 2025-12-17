import { useEffect, useState } from "react";
import logoLight from "../assets/logo-light.svg";
import logoDark from "../assets/logo-dark.svg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Initialize theme (always light by default)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))]">
      <nav className="px-[1rem] mx-auto  flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex justify-center items-center gap-12">
          <div className="flex logo items-center gap-2">XAVADA</div>
          <button
            onClick={toggleTheme}
            className="btn btn-outline"
            aria-label="Toggle theme"
          >
            <img
              src={theme === "dark" ? logoDark : logoLight}
              alt="theme"
              className="h-4 w-auto"
            />
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-12 text-sm font-medium">
          <li>
            <a href="#" className="hover:text-[rgb(var(--color-primary))]">
              Browse Listings
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[rgb(var(--color-primary))]">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[rgb(var(--color-primary))]">
              Contact
            </a>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="btn btn-outline">
            Login
          </a>
          <a href="#" className="btn btn-primary">
            Post Property
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-5 h-0.5 bg-[rgb(var(--color-text))]"></span>
          <span className="w-5 h-0.5 bg-[rgb(var(--color-text))]"></span>
          <span className="w-5 h-0.5 bg-[rgb(var(--color-text))]"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))]">
          <div className="container-page flex flex-col gap-4 py-4">
            <a href="#">Browse Listings</a>
            <a href="#">Agents</a>
            <a href="#">About</a>
            <a href="#">Contact</a>

            <button onClick={toggleTheme} className="btn btn-outline w-full">
              Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>

            <a href="#" className="btn btn-outline w-full">
              Login
            </a>
            <a href="#" className="btn btn-primary w-full">
              Post Property
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
