import { comparisonFeatures, detailedSpecs, batteryData } from '../data/comparisonData'
import {
  ChipIcon,
  ANCIcon,
  TransparencyIcon,
  SpatialAudioIcon,
  HearingHealthIcon,
  ConversationIcon,
  CheckIcon,
  BatteryIcon,
  WaterResistIcon,
  ChargingCaseIcon,
} from './Icons'

const iconMap = {
  chip: ChipIcon,
  anc: ANCIcon,
  transparency: TransparencyIcon,
  spatial: SpatialAudioIcon,
  hearing: HearingHealthIcon,
  conversation: ConversationIcon,
}

function FeatureValue({ value }) {
  if (value === true) {
    return (
      <div className="flex items-center justify-center">
        <CheckIcon />
      </div>
    )
  }
  if (value === false) {
    return <span className="text-[#d2d2d7] text-[17px] font-light">—</span>
  }
  return (
    <span className="text-[13px] leading-[1.38462] text-[#6e6e73] font-normal whitespace-pre-line">
      {value}
    </span>
  )
}

function HighlightRow({ feature }) {
  const IconComponent = iconMap[feature.icon]

  return (
    <div className="py-[28px] border-t border-[#d2d2d7]">
      <div className="grid grid-cols-3 gap-[24px]">
        {feature.values.map((val, idx) => (
          <div key={idx} className="flex flex-col items-center text-center px-[8px]">
            {IconComponent && (
              <div className="mb-[12px] text-[#1d1d1f] flex items-center justify-center">
                <IconComponent className="w-[36px] h-[36px]" />
              </div>
            )}
            <div className="min-h-[44px] flex items-center justify-center">
              {val === false ? (
                <span className="text-[#d2d2d7] text-[17px] font-light">—</span>
              ) : val === true ? (
                <CheckIcon />
              ) : (
                <p className="text-[13px] leading-[1.38462] text-[#1d1d1f] font-normal max-w-[200px]">
                  {val}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ComparisonGrid() {
  return (
    <section className="bg-white pb-[60px]">
      <div className="max-w-[980px] mx-auto px-[22px]">
        {/* Highlight Features Section */}
        <div className="mb-[50px]">
          <h2 className="text-[14px] leading-[1.28571] font-semibold text-[#1d1d1f] uppercase tracking-[.04em] mb-[12px]">
            Highlights
          </h2>
          {comparisonFeatures[0].features.map((feature, idx) => (
            <HighlightRow key={idx} feature={feature} />
          ))}
        </div>

        {/* Battery Life Section */}
        <div className="mb-[50px] border-t border-[#d2d2d7] pt-[32px]">
          <h2 className="text-[14px] leading-[1.28571] font-semibold text-[#1d1d1f] uppercase tracking-[.04em] mb-[20px] text-left">
            Battery Life
          </h2>
          <div className="grid grid-cols-3 gap-[24px]">
            {batteryData.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-[8px]">
                <div className="mb-[10px] text-[#1d1d1f]">
                  <BatteryIcon className="w-[48px] h-[24px]" />
                </div>
                <p className="text-[28px] leading-[1.1] font-semibold text-[#1d1d1f]">
                  Up to {item.hours} {item.unit}
                </p>
                <p className="text-[12px] leading-[1.33337] text-[#6e6e73] mt-[6px] max-w-[190px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Resistance & Charging Case Highlight Section */}
        <div className="mb-[50px] border-t border-[#d2d2d7] pt-[32px]">
          <div className="grid grid-cols-3 gap-[24px]">
            {/* AirPods 4 */}
            <div className="flex flex-col items-center text-center px-[8px]">
              <div className="mb-[10px] text-[#1d1d1f]">
                <WaterResistIcon className="w-[32px] h-[36px]" />
              </div>
              <p className="text-[13px] leading-[1.38462] font-semibold text-[#1d1d1f]">IP54</p>
              <p className="text-[12px] leading-[1.33337] text-[#6e6e73] mt-[2px] max-w-[180px]">
                Dust, sweat, and water resistant
              </p>
              <div className="mt-[24px] mb-[10px] text-[#1d1d1f]">
                <ChargingCaseIcon className="w-[36px] h-[36px]" />
              </div>
              <p className="text-[12px] leading-[1.33337] text-[#6e6e73] max-w-[180px]">
                USB-C Charging Case with built-in speaker
              </p>
            </div>

            {/* AirPods Pro 2 */}
            <div className="flex flex-col items-center text-center px-[8px]">
              <div className="mb-[10px] text-[#1d1d1f]">
                <WaterResistIcon className="w-[32px] h-[36px]" />
              </div>
              <p className="text-[13px] leading-[1.38462] font-semibold text-[#1d1d1f]">IP54</p>
              <p className="text-[12px] leading-[1.33337] text-[#6e6e73] mt-[2px] max-w-[180px]">
                Dust, sweat, and water resistant
              </p>
              <div className="mt-[24px] mb-[10px] text-[#1d1d1f]">
                <ChargingCaseIcon className="w-[36px] h-[36px]" />
              </div>
              <p className="text-[12px] leading-[1.33337] text-[#6e6e73] max-w-[180px]">
                MagSafe Charging Case (USB-C) with speaker and lanyard loop
              </p>
            </div>

            {/* AirPods Max */}
            <div className="flex flex-col items-center text-center px-[8px]">
              <div className="h-[36px] flex items-center justify-center mb-[10px]">
                <span className="text-[#d2d2d7] text-[17px] font-light">—</span>
              </div>
              <p className="text-[12px] leading-[1.33337] text-[#6e6e73] mt-[2px] max-w-[180px]">
                Not water or sweat resistant
              </p>
              <div className="mt-[24px] mb-[10px] text-[#1d1d1f]">
                <ChargingCaseIcon className="w-[36px] h-[36px]" />
              </div>
              <p className="text-[12px] leading-[1.33337] text-[#6e6e73] max-w-[180px]">
                Smart Case
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Specs Categories */}
        {detailedSpecs.map((category, catIdx) => (
          <div key={catIdx} className="mb-[40px] border-t border-[#d2d2d7] pt-[24px]">
            <h3 className="text-[17px] leading-[1.2] font-semibold text-[#1d1d1f] mb-[18px]">
              {category.category}
            </h3>
            {category.specs.map((spec, specIdx) => (
              <div key={specIdx} className="py-[14px] border-t border-[#f5f5f7]">
                {spec.name && (
                  <p className="text-[12px] font-medium text-[#86868b] mb-[8px] text-center">
                    {spec.name}
                  </p>
                )}
                <div className="grid grid-cols-3 gap-[24px]">
                  {spec.values.map((val, valIdx) => (
                    <div key={valIdx} className="text-center px-[8px]">
                      <FeatureValue value={val} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
