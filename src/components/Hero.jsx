import { useRef, useState } from 'react'
import { 
  Play, ThumbsUp, MessageCircle, Share2, Bookmark, Search, 
  MoreVertical, Sparkles, Globe2, Share2 as ShareIcon,
  Wifi, Battery, Signal
} from 'lucide-react'

const YOUTUBE_VIDEO_ID = 'UUxRK9Nk4v0'

// Subtle grain texture as a data-uri SVG (no network request, no external asset)
const GRAIN_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")"

export default function Hero() {
  const sectionRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width - 0.5 // -0.5 .. 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: px, y: py })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <section className="px-4 lg:px-10 pt-6 relative z-20">
      <div
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="max-w-7xl mx-auto relative isolate"
      >
        {/* ---- background layer (clipped to rounded corners) ---- */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-[#0b5ed7] via-blue-600 to-blue-500">
          {/* soft radial glow washes */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_35%,rgba(255,255,255,0.18),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_60%_at_15%_85%,rgba(10,20,80,0.25),transparent)]" />

          {/* blur circles */}
          <div className="absolute -top-16 -right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-[28%] w-64 h-64 bg-sky-300/25 rounded-full blur-[80px]" />
          <div className="absolute top-8 left-[12%] w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          {/* glow directly behind the phone */}
          <div className="absolute right-[4%] lg:right-[4%] top-1/2 -translate-y-1/2 w-[440px] h-[440px] bg-blue-300/35 rounded-full blur-[110px]" />

          {/* subtle grain */}
          <div
            className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: GRAIN_BG }}
          />
        </div>

        {/* ---- content layer ---- */}
        <div className="relative z-10 flex items-center min-h-[480px] sm:min-h-[540px] lg:min-h-[620px] xl:min-h-[660px] px-6 sm:px-10 lg:px-16 py-8 lg:py-10">
  <div className="grid lg:grid-cols-[55%_45%] gap-y-10 gap-x-4 items-center w-full">
    {/* ---- left copy ---- */}
    <div className="text-white animate-hero-fade-up">
      <span className="inline-block bg-white/15 border border-white/25 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full mb-4">
        INDIA'S #1 YOUTH ECOSYSTEM
      </span>

      <h1 className="font-black leading-[0.92] tracking-tight text-[38px] sm:text-[50px] lg:text-[64px] xl:text-[76px]">
        INDIA'S
        <br />
        FASTEST GROWING
        <br />
        GLOBAL YOUTH
        <br />
        <span
          className="italic font-black text-transparent inline-block"
          style={{
            WebkitTextStroke: '2px rgba(255,255,255,.35)',
            fontSize: '0.9em',
            marginTop: '-4px',
          }}
        >
          Community
        </span>
      </h1>

      <p className="mt-4 text-blue-50/90 text-sm sm:text-base max-w-md leading-relaxed">
        Building opportunities, experiences, leadership and growth for the next generation.
      </p>

      <div className="mt-5 flex flex-wrap gap-4">
        <button className="h-12 bg-white text-blue-600 text-sm font-semibold px-6 rounded-[14px] flex items-center gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:bg-blue-50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
          For Youth <span aria-hidden>→</span>
        </button>
        <button className="h-12 border border-white/60 text-white text-sm font-semibold px-6 rounded-[14px] flex items-center gap-2 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
          For Brands <span aria-hidden>→</span>
        </button>
      </div>
    </div>

    {/* ---- right: phone mockup ---- */}
    <div className="relative flex justify-center lg:justify-end lg:translate-x-[40px]">
      <FloatingIcon
        className="absolute -top-6 left-[36%] lg:left-[40%]"
        anim="animate-hero-float-a"
        delay="0s"
        ring="ring-purple-100"
        size="w-12 h-12"
        tilt={tilt}
        strength={22}
      >
        <Sparkles size={20} className="text-purple-500" />
      </FloatingIcon>

      <FloatingIcon
        className="absolute top-[44%] -left-6 lg:-left-12"
        anim="animate-hero-float-b"
        delay="0.4s"
        ring="ring-blue-100"
        size="w-10 h-10"
        tilt={tilt}
        strength={14}
      >
        <Globe2 size={16} className="text-blue-500" />
      </FloatingIcon>

      <FloatingIcon
        className="absolute bottom-4 left-[16%] lg:left-[20%]"
        anim="animate-hero-float-a"
        delay="0.8s"
        ring="ring-emerald-100"
        size="w-14 h-14"
        tilt={tilt}
        strength={18}
      >
        <ShareIcon size={22} className="text-emerald-500" />
      </FloatingIcon>

      <div
        className="relative animate-hero-float-phone will-change-transform"
        style={{
          transform: `translate(${tilt.x * 10}px, ${tilt.y * 10}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {/* Premium shadow & glow effect */}
        <div className="absolute inset-x-6 -bottom-4 h-12 bg-black/40 blur-2xl rounded-full" />
        <div className="absolute -inset-6 bg-blue-400/25 blur-3xl rounded-[3rem]" />

        {/* iPhone container scale adjustment if needed */}
        <div className="relative -mb-4 sm:-mb-5 lg:-mb-6">
          <PhoneMockup />
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  )
}

function FloatingIcon({ children, className, anim, delay, ring, size, tilt, strength }) {
  return (
    <div
      className={`hidden sm:flex ${size} rounded-full bg-white shadow-lg items-center justify-center ${anim} ring-4 ${ring} ${className}`}
      style={{
        animationDelay: delay,
        transform: `translate(${tilt.x * strength}px, ${tilt.y * strength}px)`,
        transition: 'transform 0.3s ease-out',
      }}
    >
      {children}
    </div>
  )
}

function PhoneMockup() {
  const [playing, setPlaying] = useState(false)
  const thumbnailUrl = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`

  return (
    /* Main iPhone Frame with standard iOS Aspect Ratio */
    <div
      className="w-[290px] sm:w-[320px] md:w-[340px] aspect-[9/19.5] rounded-[50px] bg-[#1f1f1f] p-3 ring-1 ring-black/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border-[4px] border-[#3a3a3c] relative overflow-hidden -rotate-3"
      style={{
        boxShadow: '0 50px 100px rgba(0,0,0,0.4), inset 0 0 12px rgba(255,255,255,0.2)',
      }}
    >
      {/* Internal screen container */}
      <div className="w-full h-full rounded-[38px] overflow-hidden bg-black flex flex-col justify-between relative select-none">
        
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-50 flex items-center justify-between px-2.5 shadow-inner" />

        {/* Top iOS Status Bar */}
        <div className="flex items-center justify-between px-6 pt-3.5 pb-2 text-white text-[12px] font-semibold z-40 relative">
          <span>9:41</span>
          <div className="flex gap-1.5 items-center opacity-90">
            <Signal size={13} strokeWidth={2.5} />
            <Wifi size={13} strokeWidth={2.5} />
            <Battery size={18} strokeWidth={2} />
          </div>
        </div>

        {/* App Main Content Area */}
        <div className="flex-1 flex flex-col pt-1">
          {/* YouTube App Bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-black text-white">
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 28 20" className="w-5 h-4" aria-hidden>
                <rect width="28" height="20" rx="5" fill="#FF0000" />
                <path d="M11 6l8 4-8 4V6z" fill="white" />
              </svg>
              <span className="text-[13px] font-bold tracking-tight">INGLU Global</span>
            </div>
            <div className="flex gap-3 text-white/90 items-center">
              <Search size={14} />
              <MoreVertical size={14} />
            </div>
          </div>

          {/* Video Player Section */}
          <div className="relative aspect-video bg-neutral-900 w-full">
            {playing ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
                title="INGLU — Empowering Youth, Building Impact."
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="absolute inset-0 w-full h-full group"
                aria-label="Play video"
              >
                <img
                  src={thumbnailUrl}
                  alt="INGLU video thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-10 rounded-xl bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    <Play size={18} className="text-white fill-white ml-0.5" />
                  </div>
                </div>
                {/* Progress bar line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
                  <div className="h-full w-1/3 bg-red-600" />
                </div>
              </button>
            )}
          </div>

          {/* Video Metadata & Description */}
          <div className="bg-black text-white px-4 py-3 flex-1">
            <h2 className="text-[14px] font-bold leading-snug tracking-tight">
              INGLU — Empowering Youth, Building Impact.
            </h2>
            <p className="text-[11px] text-neutral-400 mt-0.5">11K views • 2 days ago</p>

            {/* Engagement Action Buttons */}
            <div className="flex items-center justify-between mt-3 text-neutral-300 text-[11px] bg-neutral-900/50 p-2 rounded-xl">
              <span className="flex items-center gap-1"><ThumbsUp size={13} /> 221</span>
              <span className="flex items-center gap-1"><MessageCircle size={13} /> 12</span>
              <span className="flex items-center gap-1"><Share2 size={13} /> Share</span>
              <span className="flex items-center gap-1"><Bookmark size={13} /> Save</span>
            </div>

            {/* Channel Info Row */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 ring-1 ring-white/10" />
                <div>
                  <p className="text-[12px] font-semibold leading-tight">INGLU Global</p>
                  <p className="text-[10px] text-neutral-400">150K subscribers</p>
                </div>
              </div>
              <button className="bg-white text-black text-[11px] font-bold px-3 py-1.5 rounded-full hover:bg-neutral-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* iOS Bottom Home Indicator Bar */}
        <div className="w-full pb-2 flex justify-center bg-black z-40 relative">
          <div className="w-32 h-1 bg-white rounded-full opacity-80 subtle-shadow" />
        </div>

      </div>
    </div>
  )
}