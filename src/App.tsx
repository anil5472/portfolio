import React, { useState, useEffect, lazy, Suspense, useMemo, MouseEvent } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";
import iitp from "./assets/AIS Logo_v2.png";
import { Helmet } from "react-helmet";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Students = lazy(() => import("./pages/Students"));
const Research = lazy(() => import("./pages/Research"));
const Teaching = lazy(() => import("./pages/Teaching"));
const Publications = lazy(() => import("./pages/Publications"));
const Contact = lazy(() => import("./pages/Contact"));
const SynergisticActivities = lazy(() => import("./pages/SynergisticActivities"));
const Gallery = lazy(() => import("./pages/Gallery"));

// Types for navigation
type NavItem = { name: string; href: string };

// Error Boundary for lazy loading
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <div className="text-center py-10 text-red-500">Something went wrong while loading this page.</div>;
    }
    return this.props.children;
  }
}

// Navigation Component
const Navigation: React.FC<{
  mainNavigation: NavItem[];
  moreNavigation: NavItem[];
  menuState: MenuState;
  setMenuState: React.Dispatch<React.SetStateAction<MenuState>>;
  handleLinkClick: () => void;
}> = ({ mainNavigation, moreNavigation, menuState, setMenuState, handleLinkClick }) => {
  // For highlighting active link
  const location = useLocation();

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3" tabIndex={0}>
            <img src={iitp} alt="IIT Patna Logo" className="h-[3.5rem]" />
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center space-x-3">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={handleLinkClick}
                className={`text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium ${location.pathname === item.href ? 'font-bold text-indigo-700' : ''}`}
                tabIndex={0}
              >
                {item.name}
              </Link>
            ))}
            <div className="relative more-dropdown">
              <button
                onClick={() => setMenuState((prev) => ({ ...prev, isMoreOpen: !prev.isMoreOpen }))}
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-lg font-medium flex items-center"
                aria-expanded={menuState.isMoreOpen}
                aria-haspopup="true"
                aria-controls="more-menu"
                aria-label="Toggle more menu"
                tabIndex={0}
              >
                More <ChevronDown className="ml-2 h-5 w-5" />
              </button>
              {menuState.isMoreOpen && (
                <div id="more-menu" className="absolute mt-2 bg-white shadow-lg rounded-md w-48 py-2 z-50">
                  {moreNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={handleLinkClick}
                      className="block px-4 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-100"
                      tabIndex={0}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuState((prev) => ({ ...prev, isMenuOpen: !prev.isMenuOpen }))}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none"
              aria-label="Toggle mobile menu"
              aria-controls="mobile-menu"
              tabIndex={0}
            >
              {menuState.isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation Dropdown */}
      {menuState.isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg px-4 py-4 space-y-2">
          {mainNavigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={handleLinkClick}
              className={`block text-gray-600 hover:text-indigo-600 text-lg ${location.pathname === item.href ? 'font-bold text-indigo-700' : ''}`}
              tabIndex={0}
            >
              {item.name}
            </Link>
          ))}
          <div className="border-t border-gray-200 pt-2">
            {moreNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={handleLinkClick}
                className="block text-gray-600 hover:text-indigo-600 text-lg"
                tabIndex={0}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Footer Component
const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-10 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Anilkumar Bachu. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/anilkumar.bachu.547"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/anilkumar08689"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/anilkumar-bachu/"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:anilkumar@iitp.ac.in"
            className="text-gray-400 hover:text-white"
            aria-label="Mail"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// State type for menu
type MenuState = {
  isMenuOpen: boolean;
  isMoreOpen: boolean;
};

function App() {
  const [menuState, setMenuState] = useState<MenuState>({
    isMenuOpen: false,
    isMoreOpen: false,
  });

  // Memoized navigation
  const mainNavigation: NavItem[] = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "Research", href: "/research" },
      { name: "Publications", href: "/publications" },
      { name: "Students", href: "/students" },
      { name: "Teaching", href: "/teaching" },
      { name: "Contact", href: "/contact" },
    ],
    []
  );
  const moreNavigation: NavItem[] = useMemo(
    () => [
      { name: "Synergistic Activities", href: "/synergistic-activities" },
      { name: "Gallery", href: "/gallery" },
    ],
    []
  );

  const handleLinkClick = () => {
    setMenuState({ isMenuOpen: false, isMoreOpen: false });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".more-dropdown")) {
        setMenuState((prev) => ({ ...prev, isMoreOpen: false }));
      }
    };
    document.addEventListener("click", handleClickOutside as any);
    return () => document.removeEventListener("click", handleClickOutside as any);
  }, []);

  return (
    <Router>
      <Helmet>
        <title>Anilkumar Bachu | Portfolio</title>
        <meta name="description" content="Portfolio of Anilkumar Bachu, IIT Patna" />
      </Helmet>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation
          mainNavigation={mainNavigation}
          moreNavigation={moreNavigation}
          menuState={menuState}
          setMenuState={setMenuState}
          handleLinkClick={handleLinkClick}
        />
        {/* Main Content */}
        <div className="pt-16 flex-grow">
          <ErrorBoundary>
            <Suspense fallback={
              <div className="text-center py-10 flex justify-center items-center">
                <svg className="animate-spin h-8 w-8 text-indigo-600 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Loading...
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/students" element={<Students />} />
                <Route path="/research" element={<Research />} />
                <Route path="/teaching" element={<Teaching />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/synergistic-activities" element={<SynergisticActivities />} />
                <Route path="/gallery" element={<Gallery />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
