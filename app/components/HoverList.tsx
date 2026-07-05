'use client'

import { useState } from 'react'
import Image from 'next/image'

type Item = {
  id: number
  label: string
  images: string[] // array of 3 image URLs
}

const items: Item[] = [
  {
    id: 1,
    label: 'GLOSSIER',
    images: ['/project/Avex.png', '/project/Avex.png', '/project/Avex.png'],
  },
  {
    id: 2,
    label: 'GUCCI',
    images: ['/images/gucci1.jpg', '/images/gucci2.jpg', '/images/gucci3.jpg'],
  },
  {
    id: 3,
    label: 'HERMÈS',
    images: ['/images/hermes1.jpg', '/images/hermes2.jpg', '/images/hermes3.jpg'],
  },
  {
    id: 4,
    label: 'AESOP',
    images: ['/images/aesop1.jpg', '/images/aesop2.jpg', '/images/aesop3.jpg'],
  },
]

export default function HoverList() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="w-full  mx-auto font-sans">
      {items.map((item, index) => {
        const isActive = activeIndex === index

        return (
          <div
            key={item.id}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className="group flex items-center justify-between border-b border-gray-200 py-5 px-4 cursor-pointer transition-all duration-300"
          >
            {/* Left: number */}
            <span className="text-xs text-gray-400 w-6 select-none">
              ({item.id})
            </span>

            {/* Center: label */}
            <span
              className={`flex-1 text-center tracking-widest text-2xl md:text-4xl font-bold transition-all duration-300 ${
                isActive
                  ? 'text-black scale-105'
                  : 'text-gray-300 scale-100'
              }`}
              style={{ transition: 'color 0.3s ease, transform 0.3s ease' }}
            >
              {item.label}
            </span>

            {/* Right: image previews — only visible on hover */}
            <div
              className={`flex gap-1 transition-all duration-300 overflow-hidden ${
                isActive ? 'opacity-100 w-48 md:w-56' : 'opacity-0 w-0'
              }`}
            >
              {item.images.map((src, i) => (
                <div
                  key={i}
                  className="relative flex-shrink-0 w-14 h-10 md:w-16 md:h-11 rounded overflow-hidden"
                  style={{
                    transitionDelay: `${i * 50}ms`,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Image
                    src={src}
                    alt={`${item.label} preview ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}


