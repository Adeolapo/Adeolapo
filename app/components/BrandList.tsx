"use client";

import Link from "next/link";
import { useState } from "react";
import { BRANDS } from "@/lib/data";



export default function BrandList() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="brand-list">
      <h1 className="text-3xl md:text-5xl text-white font-bold mb-[64px]">My Portfolio</h1>
      {BRANDS.map((brand, i) => {
        const isActive = active === i;
        return (
          <Link href={`/portfolio/${brand.name}`} key={brand.name}>
          <div
            key={brand.name}
            className={`brand-row hover:cursor-[url('/Button.png'),_pointer] ${isActive ? "is-active" : ""}`}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            <span className="brand-index">({i + 1})</span>

            <span className="brand-name">{brand.name}</span>

            <div className="brand-images" aria-hidden={!isActive}>
              {brand.images.map((src, j) => (
                <div
                  key={j}
                  className="brand-image"
                  style={{ transitionDelay: `${j * 60}ms` }}
                >
                  {/* swap for next/image in a real Next.js app */}
                  <img src={src} alt="" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          </Link>
        );
      })}

      <style jsx>{`
        .brand-list {
          width: 100%;
          font-family: "Helvetica Neue", Arial, sans-serif;
        }

        .brand-row {
          position: relative;
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 1.6rem 2.5rem;
          border-bottom: 1px solid #e5e5e5;
          cursor: default;
        }
        .brand-row:first-child {
          border-top: 1px solid #e5e5e5;
        }

        .brand-index {
          width: 3rem;
          flex-shrink: 0;
          font-size: 0.85rem;
          color: #9a9a9a;
          transition: color 0.35s ease;
        }
        .brand-row.is-active .brand-index {
          color: #fff;
        }

        .brand-name {
          flex: 1;
          text-align: center;
          font-size: clamp(2rem, 6vw, 4.5rem);
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #c4c4c4;
          transition: color 0.4s ease;
          user-select: none;
        }
        .brand-row.is-active .brand-name {
          color: #fff;
        }

        .brand-images {
          position: absolute;
          right: 2.5rem;
          display: flex;
          gap: 0.6rem;
          pointer-events: none;
        }

        .brand-image {
          width: 88px;
          height: 64px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .brand-row.is-active .brand-image {
          opacity: 1;
          transform: translateY(0);
        }

        .brand-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 720px) {
          .brand-images {
            display: none;
          }
          .brand-row {
            padding: 1.2rem 1.2rem;
            gap: 1rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-image,
          .brand-name,
          .brand-index {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
