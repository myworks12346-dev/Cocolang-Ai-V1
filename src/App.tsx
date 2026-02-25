import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Generator from "./components/Generator";
import Features from "./components/Features";
import CTA from "./components/CTA";
import WhyCocolang from "./components/WhyCocolang";
import { ToastProvider } from "./components/Toast";

function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Generator />
      <Features />
      <CTA />
    </>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <Router>
        <div className="min-h-screen selection:bg-primary-start/30">
          <Navbar />
          
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/why" element={<WhyCocolang />} />
            </Routes>
          </main>

          <footer className="py-12 px-6 border-t border-white/5 bg-bg-dark/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-primary-start to-primary-end flex items-center justify-center">
                  <span className="text-white font-bold text-xs">C</span>
                </div>
                <span className="font-bold">Cocolang AI</span>
              </div>
              
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Cocolang AI. Built for the MOI Ecosystem.
              </p>

              <div className="flex gap-6">
                <a href="https://docs.moi.technology/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm">Documentation</a>
                <a href="https://moi.technology/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm">MOI Network</a>
                <a href="https://github.com/MOI-Protocol" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-sm">GitHub</a>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </ToastProvider>
  );
}
