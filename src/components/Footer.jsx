export default function Footer() {
  const footerSections = [
    {
      title: 'Shop and Learn',
      links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'],
    },
    {
      title: 'Apple Wallet',
      links: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash'],
    },
    {
      title: 'Account',
      links: ['Manage Your Apple Account', 'Apple Store Account', 'iCloud.com'],
    },
    {
      title: 'Entertainment',
      links: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'App Store'],
    },
    {
      title: 'Apple Store',
      links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Group Reservations', 'Apple Camp', 'Apple Store App', 'Certified Refurbished', 'Apple Trade In', 'Financing', 'Carrier Deals at Apple', 'Order Status', 'Shopping Help'],
    },
    {
      title: 'For Business',
      links: ['Apple and Business', 'Shop for Business'],
    },
    {
      title: 'For Education',
      links: ['Apple and Education', 'Shop for K-12', 'Shop for College'],
    },
    {
      title: 'For Healthcare',
      links: ['Apple in Healthcare', 'Health on Apple Watch', 'Health Records on iPhone'],
    },
    {
      title: 'For Government',
      links: ['Shop for Government', 'Shop for Veterans and Military'],
    },
    {
      title: 'Apple Values',
      links: ['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Racial Equity and Justice', 'Supply Chain'],
    },
    {
      title: 'About Apple',
      links: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple'],
    },
  ]

  return (
    <footer className="bg-[#f5f5f7] pt-[12px]">
      {/* Footnotes */}
      <div className="max-w-[980px] mx-auto px-[22px] pb-[12px] border-b border-[#d2d2d7]">
        <div className="text-[12px] leading-[1.33337] text-apple-gray-3 space-y-[8px]">
          <p>
            1. AirPods Pro 2 require iPhone or iPad with the latest version of iOS or iPadOS.
          </p>
          <p>
            2. Battery life varies by use and configuration.
          </p>
          <p>
            3. AirPods 4 (with Active Noise Cancellation) are sweat and water resistant for non-water sports and exercise. AirPods Pro 2 are sweat and water resistant for non-water sports and exercise. Sweat and water resistance are not permanent conditions.
          </p>
          <p>
            4. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made.
          </p>
        </div>
      </div>

      {/* Footer Links Grid */}
      <div className="max-w-[980px] mx-auto px-[22px] py-[20px]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-[20px] gap-y-[18px]">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-[12px] leading-[1.33337] font-semibold text-apple-gray-1 mb-[8px]">
                {section.title}
              </h4>
              <ul className="space-y-[6px]">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[12px] leading-[1.33337] text-apple-gray-3 hover:text-apple-gray-1 hover:underline transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[980px] mx-auto px-[22px] py-[14px] border-t border-[#d2d2d7]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[8px]">
          <div className="flex flex-wrap items-center gap-[6px] text-[12px] leading-[1.33337] text-apple-gray-3">
            <span>Copyright © 2024 Apple Inc. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-apple-gray-1 hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-apple-gray-1 hover:underline">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-apple-gray-1 hover:underline">Sales and Refunds</a>
            <span>|</span>
            <a href="#" className="hover:text-apple-gray-1 hover:underline">Legal</a>
            <span>|</span>
            <a href="#" className="hover:text-apple-gray-1 hover:underline">Site Map</a>
          </div>
          <span className="text-[12px] leading-[1.33337] text-apple-gray-3">
            United States
          </span>
        </div>
      </div>
    </footer>
  )
}
