export default function GlobalNav() {
  const navItems = [
    { name: 'Store', href: '#' },
    { name: 'Mac', href: '#' },
    { name: 'iPad', href: '#' },
    { name: 'iPhone', href: '#' },
    { name: 'Watch', href: '#' },
    { name: 'Vision', href: '#' },
    { name: 'AirPods', href: '#' },
    { name: 'TV & Home', href: '#' },
    { name: 'Entertainment', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Support', href: '#' },
  ]

  return (
    <nav className="bg-[rgba(29,29,31,0.72)] backdrop-blur-[20px] backdrop-saturate-[180%] sticky top-0 z-[9999]">
      <div className="max-w-[980px] mx-auto px-[22px] h-[44px] flex items-center justify-between">
        {/* Apple Logo */}
        <a href="#" className="text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity">
          <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"/>
          </svg>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-[18px]">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-[11px] leading-[1.09091] tracking-[.01em] text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap ${
                item.name === 'AirPods' ? 'font-medium opacity-100' : ''
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Search & Bag */}
        <div className="flex items-center gap-[16px]">
          <a href="#" className="text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="44" viewBox="0 0 15 44">
              <path fill="currentColor" d="m14.298 27.202l-3.87-3.87c.837-1.128 1.34-2.529 1.34-4.049 0-3.762-3.062-6.824-6.824-6.824-3.762 0-6.824 3.062-6.824 6.824s3.062 6.824 6.824 6.824c1.52 0 2.921-.503 4.049-1.34l3.87 3.87c.152.152.352.228.553.228.201 0 .401-.076.553-.228.305-.305.305-.8 0-1.105zm-9.354-2.966c-3.173 0-5.753-2.58-5.753-5.753 0-3.173 2.58-5.753 5.753-5.753 3.173 0 5.753 2.58 5.753 5.753 0 3.173-2.58 5.753-5.753 5.753z"/>
            </svg>
          </a>
          <a href="#" className="text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity">
            <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}
