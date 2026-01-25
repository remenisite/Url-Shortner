import { FaLink, FaRocket } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-white/10">
      <div className="flex items-center gap-2 text-xl font-bold">
        <FaLink className="text-emerald-400" />
        <span>LinkSnap</span>
      </div>

      <ul className="hidden md:flex gap-8 text-sm text-gray-300">
        <li className="hover:text-white cursor-pointer">Features</li>
        <li className="hover:text-white cursor-pointer">Pricing</li>
        <li className="hover:text-white cursor-pointer">API</li>
      </ul>

      <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg text-sm">
        <FaRocket />
        Get Started
      </button>
    </nav>
  );
}
