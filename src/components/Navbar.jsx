import { ChevronDown } from 'lucide-react'

export default function Navbar() {
  const links = ['About Us', 'Ecosystem', 'For Students', 'For Brands', 'Events', 'Campus Buzz']

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-16">
        <span className="text-xl font-extrabold tracking-tight text-inglu-ink">INGLU</span>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <li key={link} className="flex items-center gap-1 cursor-pointer hover:text-inglu-blue transition-colors">
              {link}
              {link === 'Ecosystem' && <ChevronDown size={14} />}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline text-sm font-semibold text-slate-700 hover:text-inglu-blue transition-colors">
            Sign In
          </button>
          <button className="bg-inglu-blue text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 hover:bg-inglu-blue-dark transition-colors">
            Get Started <span aria-hidden>→</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
