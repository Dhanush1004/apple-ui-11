// Product data for the AirPods comparison page
export const products = [
  {
    id: 'airpods-4',
    name: 'AirPods 4',
    tagline: 'with Active Noise Cancellation',
    price: '$129',
    image: '/images/airpods-4.png',
    fallbackEmoji: '🎧',
    newBadge: true,
    colors: [],
    buyLink: '#',
    learnMoreLink: '#',
  },
  {
    id: 'airpods-pro-2',
    name: 'AirPods Pro 2',
    tagline: '',
    price: '$249',
    image: '/images/airpods-pro-2.png',
    fallbackEmoji: '🎧',
    newBadge: false,
    colors: [],
    buyLink: '#',
    learnMoreLink: '#',
  },
  {
    id: 'airpods-max',
    name: 'AirPods Max',
    tagline: '',
    price: '$549',
    image: '/images/airpods-max.png',
    fallbackEmoji: '🎧',
    newBadge: false,
    colors: [
      { name: 'Midnight', hex: '#2e3642', active: true },
      { name: 'Starlight', hex: '#f0e4d3', active: false },
      { name: 'Blue', hex: '#7da8d2', active: false },
      { name: 'Purple', hex: '#c4b3d0', active: false },
      { name: 'Orange', hex: '#e67e3c', active: false },
    ],
    buyLink: '#',
    learnMoreLink: '#',
  },
]

// Highlight features (icon-based grid)
export const comparisonFeatures = [
  {
    category: 'Highlights',
    features: [
      {
        name: 'Personalized Spatial Audio with dynamic head tracking',
        icon: 'spatial',
        values: [
          'Personalized Spatial Audio with dynamic head tracking',
          'Personalized Spatial Audio with dynamic head tracking',
          'Personalized Spatial Audio with dynamic head tracking',
        ],
      },
      {
        name: 'Hearing Health',
        icon: 'hearing',
        values: [
          false,
          'Hearing Aid, Hearing Test, and Hearing Protection features',
          false,
        ],
      },
      {
        name: 'Active Noise Cancellation and Transparency mode',
        icon: 'anc',
        values: [
          'Active Noise Cancellation and Transparency mode',
          'Active Noise Cancellation and Transparency mode',
          'Active Noise Cancellation and Transparency mode',
        ],
      },
      {
        name: 'Conversation Awareness',
        icon: 'conversation',
        values: [
          'Conversation Awareness',
          'Conversation Awareness',
          false,
        ],
      },
      {
        name: 'Chip',
        icon: 'chip',
        values: [
          'H2 headphone chip',
          'H2 headphone chip',
          'H1 headphone chip (in each ear cup)',
        ],
      },
    ],
  },
]

// Battery data
export const batteryData = [
  { hours: '5', unit: 'hrs', label: 'listening time with ANC enabled' },
  { hours: '6', unit: 'hrs', label: 'listening time with ANC enabled' },
  { hours: '20', unit: 'hrs', label: 'listening time with ANC enabled' },
]

// Detailed Spec sections
export const detailedSpecs = [
  {
    category: 'Audio Technology',
    specs: [
      {
        name: 'Acoustic Architecture',
        values: [
          'Custom high-excursion Apple driver\nCustom high dynamic range amplifier',
          'Custom high-excursion Apple driver\nCustom high dynamic range amplifier',
          'Apple-designed 40mm dynamic driver\nDual neodymium ring magnet motor',
        ],
      },
      {
        name: 'Noise Control',
        values: [
          'Active Noise Cancellation\nAdaptive Audio\nTransparency mode',
          'Up to 2x more Active Noise Cancellation\nAdaptive Audio\nTransparency mode',
          'Pro-level Active Noise Cancellation\nTransparency mode',
        ],
      },
      {
        name: 'Spatial Audio',
        values: [
          'Personalized Spatial Audio with dynamic head tracking',
          'Personalized Spatial Audio with dynamic head tracking',
          'Personalized Spatial Audio with dynamic head tracking',
        ],
      },
      {
        name: 'Adaptive EQ',
        values: [true, true, true],
      },
      {
        name: 'Voice Isolation',
        values: [true, true, false],
      },
    ],
  },
  {
    category: 'Hearing Health',
    specs: [
      {
        name: 'Clinical-grade Hearing Aid capability',
        values: [false, true, false],
      },
      {
        name: 'Scientifically validated Hearing Test',
        values: [false, true, false],
      },
      {
        name: 'Loud Sound Reduction',
        values: [false, true, false],
      },
    ],
  },
  {
    category: 'Sensors',
    specs: [
      {
        name: 'Microphones',
        values: [
          'Dual beamforming microphones\nInward-facing microphone',
          'Dual beamforming microphones\nInward-facing microphone',
          'Eight microphones for Active Noise Cancellation\nThree microphones for voice pickup',
        ],
      },
      {
        name: 'Motion & Optical Sensors',
        values: [
          'Optical in-ear sensor\nMotion-detecting accelerometer\nSpeech-detecting accelerometer',
          'Skin-detect sensor\nMotion-detecting accelerometer\nSpeech-detecting accelerometer',
          'Optical sensor (each ear cup)\nPosition sensor (each ear cup)\nCase-detect sensor (each ear cup)\nAccelerometer (each ear cup)\nGyroscope (left ear cup)',
        ],
      },
      {
        name: 'Touch / Force Controls',
        values: ['Force sensor', 'Touch control', 'Digital Crown and Noise Control button'],
      },
    ],
  },
  {
    category: 'Dust, Sweat, and Water Resistance',
    specs: [
      {
        name: 'Rating',
        values: [
          'Dust, sweat, and water resistant (IP54)',
          'Dust, sweat, and water resistant (IP54)',
          'Not water or sweat resistant',
        ],
      },
    ],
  },
  {
    category: 'Charging Case',
    specs: [
      {
        name: 'Case Specs',
        values: [
          'USB-C Charging Case with built-in speaker for Find My',
          'MagSafe Charging Case (USB-C) with speaker and lanyard loop',
          'Smart Case',
        ],
      },
      {
        name: 'Wireless Charging Compatibility',
        values: [
          'Works with Apple Watch charger and Qi-certified chargers',
          'Works with MagSafe charger, Apple Watch charger, and Qi-certified chargers',
          false,
        ],
      },
    ],
  },
  {
    category: 'Size and Weight',
    specs: [
      {
        name: 'AirPods (each)',
        values: [
          'Height: 30.2 mm\nWidth: 18.3 mm\nDepth: 18.1 mm\nWeight: 4.3 grams',
          'Height: 30.9 mm\nWidth: 21.8 mm\nDepth: 24.0 mm\nWeight: 5.3 grams',
          'Height: 187.3 mm\nWidth: 168.6 mm\nDepth: 83.4 mm\nWeight: 386.2 grams',
        ],
      },
      {
        name: 'Case',
        values: [
          'Height: 46.2 mm\nWidth: 50.1 mm\nDepth: 21.2 mm\nWeight: 34.7 grams',
          'Height: 45.2 mm\nWidth: 60.6 mm\nDepth: 21.7 mm\nWeight: 50.8 grams',
          'Smart Case Weight: 134.5 grams',
        ],
      },
    ],
  },
  {
    category: 'Connectivity',
    specs: [
      {
        name: 'Bluetooth',
        values: ['Bluetooth 5.3', 'Bluetooth 5.3', 'Bluetooth 5.3'],
      },
    ],
  },
  {
    category: 'Controls',
    specs: [
      {
        name: 'Interactions',
        values: [
          'Press once to play/pause or answer calls\nPress twice to skip forward\nPress three times to skip back\nPress and hold for Siri',
          'Swipe up/down to adjust volume\nPress once to play/pause or answer calls\nPress twice to skip forward\nPress three times to skip back\nPress and hold to switch listening modes',
          'Digital Crown: Turn for volume, press to play/pause/answer\nNoise Control button: Press to switch between ANC and Transparency',
        ],
      },
    ],
  },
  {
    category: "What's in the Box",
    specs: [
      {
        name: 'Included items',
        values: [
          'AirPods 4 with Active Noise Cancellation\nUSB-C Charging Case with speaker\nDocumentation\n(USB-C Charge Cable sold separately)',
          'AirPods Pro 2\nMagSafe Charging Case (USB-C) with speaker and lanyard loop\nSilicone ear tips (four sizes: XS, S, M, L)\nUSB-C Charge Cable\nDocumentation',
          'AirPods Max\nSmart Case\nUSB-C to USB-C Cable\nDocumentation',
        ],
      },
    ],
  },
]
