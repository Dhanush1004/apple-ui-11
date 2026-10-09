// SVG icon components designed to match Apple's AirPods feature icons

export function ChipIcon({ className = 'w-[36px] h-[36px]' }) {
  return (
    <svg className={className} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="20" height="20" rx="3.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <rect x="12" y="12" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1" fill="none"/>
      <text x="18" y="20" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="600" fontFamily="sans-serif">H</text>
      {/* Pins */}
      <line x1="13" y1="8" x2="13" y2="4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="18" y1="8" x2="18" y2="4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="23" y1="8" x2="23" y2="4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="13" y1="28" x2="13" y2="31.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="18" y1="28" x2="18" y2="31.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="23" y1="28" x2="23" y2="31.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="8" y1="13" x2="4.5" y2="13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="8" y1="18" x2="4.5" y2="18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="8" y1="23" x2="4.5" y2="23" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="28" y1="13" x2="31.5" y2="13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="28" y1="18" x2="31.5" y2="18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="28" y1="23" x2="31.5" y2="23" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  )
}

export function ANCIcon({ className = 'w-[36px] h-[36px]' }) {
  return (
    <svg className={className} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="8.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" fill="none"/>
      <circle cx="18" cy="18" r="4" fill="currentColor"/>
      <path d="M5 18C5 10.82 10.82 5 18 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M31 18C31 25.18 25.18 31 18 31" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}

export function TransparencyIcon({ className = 'w-[36px] h-[36px]' }) {
  return (
    <svg className={className} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M10 28C10 23 13.5 20.5 18 20.5C22.5 20.5 26 23 26 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M6 12C4 14.5 4 17 5 19.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M30 12C32 14.5 32 17 31 19.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  )
}

export function SpatialAudioIcon({ className = 'w-[36px] h-[36px]' }) {
  return (
    <svg className={className} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="13" r="4.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M10.5 30C10.5 24 13.8 21 18 21C22.2 21 25.5 24 25.5 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      {/* Sound waves around head */}
      <path d="M8 8C5.5 11 4.5 14.5 5 18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M28 8C30.5 11 31.5 14.5 31 18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M11 5.5C13 4.5 15.5 4 18 4C20.5 4 23 4.5 25 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  )
}

export function HearingHealthIcon({ className = 'w-[36px] h-[36px]' }) {
  return (
    <svg className={className} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 7C12.5 7 8 11.5 8 17C8 21.5 11 25.5 15 28C16.5 29 17.5 30 18 31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M18 12C15.2 12 13 14.2 13 17C13 19.5 14.5 21.5 16.5 22.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
      <circle cx="18" cy="17" r="1.5" fill="currentColor"/>
    </svg>
  )
}

export function ConversationIcon({ className = 'w-[36px] h-[36px]' }) {
  return (
    <svg className={className} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 13C6 8.58 9.58 5 14 5H22C26.42 5 30 8.58 30 13V19C30 23.42 26.42 27 22 27H13L7 31V26.5C6.38 25.5 6 24.3 6 23V13Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
      <circle cx="13" cy="16" r="1.5" fill="currentColor"/>
      <circle cx="18" cy="16" r="1.5" fill="currentColor"/>
      <circle cx="23" cy="16" r="1.5" fill="currentColor"/>
    </svg>
  )
}

export function CheckIcon({ className = 'w-[16px] h-[16px]' }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="#1d1d1f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function BatteryIcon({ className = 'w-[48px] h-[24px]' }) {
  return (
    <svg className={className} width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="40" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <rect x="5" y="6" width="34" height="12" rx="2" fill="currentColor" opacity="0.12"/>
      <path d="M44 8.5V15.5C45.5 14.5 45.5 9.5 44 8.5Z" fill="currentColor"/>
    </svg>
  )
}

export function WaterResistIcon({ className = 'w-[32px] h-[36px]' }) {
  return (
    <svg className={className} width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4L9 16C7 19.5 8.5 25 12 27C14.5 28.5 17.5 28.5 20 27C23.5 25 25 19.5 23 16L16 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
      <path d="M13 21C13 18.5 15 16 16.5 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
    </svg>
  )
}

export function ChargingCaseIcon({ className = 'w-[36px] h-[36px]' }) {
  return (
    <svg className={className} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="10" width="22" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M7 17.5H29" stroke="currentColor" strokeWidth="1"/>
      <circle cx="18" cy="22" r="1.5" fill="currentColor"/>
    </svg>
  )
}
