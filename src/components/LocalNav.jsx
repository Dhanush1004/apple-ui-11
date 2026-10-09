export default function LocalNav() {
  const navItems = ['AirPods Pro 2', 'AirPods 4', 'AirPods Max', 'Compare', 'AirPods Accessories']

  return (
    <nav className="bg-[rgba(251,251,253,0.8)] backdrop-blur-[20px] backdrop-saturate-[180%] border-b border-[#d2d2d7] sticky top-[44px] z-[9998]">
      <div className="max-w-[980px] mx-auto px-[22px] h-[52px] flex items-center justify-between">
        <a href="#" className="text-[21px] font-semibold tracking-[.011em] text-apple-gray-1">
          AirPods
        </a>
        <div className="hidden lg:flex items-center gap-[24px]">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`text-[12px] leading-[1.33337] tracking-[-.01em] transition-colors ${
                item === 'Compare'
                  ? 'text-apple-gray-1 font-medium'
                  : 'text-apple-gray-2 hover:text-apple-gray-1'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
