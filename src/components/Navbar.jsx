import { ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  
  const links = [
    { name: 'About Us', path: '/about' },
    { name: 'Ecosystem', path: '/ecosystem' },
    { name: 'For Students', path: '/for-students' },
    { name: 'For Brands', path: '/for-brands' },
    { name: 'Artists', path: '/artists' }, // 
    { name: 'Events', path: '/events' },
    { name: 'Campus Buzz', path: '/campus-buzz' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-16">
        <Link to="/" className="text-xl font-extrabold tracking-tight text-inglu-ink">
          INGLU
        </Link>
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`flex items-center gap-1 cursor-pointer hover:text-inglu-blue transition-colors ${
                  location.pathname === link.path ? 'text-inglu-blue font-semibold' : ''
                }`}
              >
                {link.name}
                {link.name === 'Ecosystem' && <ChevronDown size={14} />}
              </Link>
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