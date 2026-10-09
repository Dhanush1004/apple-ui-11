import { useState } from 'react'
import { products } from '../data/comparisonData'

export default function ProductCards() {
  const [selectedColors, setSelectedColors] = useState({
    'airpods-max': 'Midnight',
  })

  const handleColorChange = (productId, colorName) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: colorName,
    }))
  }

  return (
    <section className="bg-white pb-[30px] pt-[10px]">
      <div className="max-w-[980px] mx-auto px-[22px]">
        {/* Product Name Top Bar */}
        <div className="grid grid-cols-3 gap-[24px] border-b border-[#d2d2d7] pb-[16px] mb-[32px]">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <h2 className="text-[17px] leading-[1.2] font-semibold text-[#1d1d1f]">
                {product.name}
              </h2>
              {product.tagline && (
                <p className="text-[12px] font-normal text-[#6e6e73] mt-[2px]">
                  {product.tagline}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-3 gap-[24px] mb-[20px]">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center text-center">
              {/* Product Image Container */}
              <div className="w-full h-[220px] flex items-center justify-center mb-[16px] px-[10px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-[190px] max-h-[190px] w-auto h-auto object-contain transition-transform duration-300 hover:scale-105"
                  loading="eager"
                />
              </div>

              {/* Color Swatches */}
              <div className="h-[24px] flex items-center justify-center mb-[8px]">
                {product.colors && product.colors.length > 0 ? (
                  <div className="flex items-center gap-[8px]">
                    {product.colors.map((color) => {
                      const isSelected = (selectedColors[product.id] || product.colors[0].name) === color.name
                      return (
                        <button
                          key={color.name}
                          type="button"
                          onClick={() => handleColorChange(product.id, color.name)}
                          title={color.name}
                          className={`w-[14px] h-[14px] rounded-full transition-all ${
                            isSelected
                              ? 'ring-2 ring-[#0071e3] ring-offset-2 scale-110'
                              : 'hover:scale-110 border border-[#d2d2d7]'
                          }`}
                          style={{ backgroundColor: color.hex }}
                          aria-label={color.name}
                        />
                      )
                    })}
                  </div>
                ) : (
                  <div className="w-[1px] h-[14px]" />
                )}
              </div>

              {/* New Badge */}
              <div className="h-[18px] mb-[2px]">
                {product.newBadge && (
                  <span className="text-[12px] leading-[1.33337] text-[#bf4800] font-medium">
                    New
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-[21px] leading-[1.19048] font-semibold text-[#1d1d1f]">
                {product.name}
              </h3>

              {/* Price */}
              <p className="text-[14px] leading-[1.42859] text-[#1d1d1f] mt-[8px]">
                {product.price}
              </p>

              {/* Buy Button */}
              <div className="mt-[16px]">
                <a
                  href={product.buyLink}
                  className="inline-flex items-center justify-center px-[18px] py-[6px] bg-[#0071e3] hover:bg-[#0077ed] text-white text-[14px] font-normal rounded-full transition-colors leading-[1.2]"
                >
                  Buy
                </a>
              </div>

              {/* Learn More Link */}
              <div className="mt-[10px]">
                <a
                  href={product.learnMoreLink}
                  className="text-[#0071e3] text-[14px] hover:underline inline-flex items-center gap-[3px]"
                >
                  Learn more <span className="text-[12px]">›</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
