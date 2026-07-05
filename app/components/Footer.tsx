"use client";

import Link from "next/link";

type LinkItem = { label: string; href: string };

const CONTACT = {
  email: "josephadeolapo@gmail.com",
  location: "Lagos, Nigeria",
  availability: "freelance projects & full-time",
};

const PAGES: LinkItem[] = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "work", href: "/work" },
];

const SOCIALS: LinkItem[] = [
  { label: "Whatsapp", href: "https://wa.me/8051729362?text=hi%20i%20would%20like%20to%20make%20some%20enquiries" },
  { label: "x(twitter)", href: "https://x.com/v_veratti" },
  { label: "linkedin", href: "https://www.linkedin.com/in/adeolapo-joseph-5b0424273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
];

const WORDMARK = "Adeolapo Joseph";
const YEAR = new Date().getFullYear();

function LinkColumn({ title, links }: { title: string; links: LinkItem[] }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-sm text-neutral-500">{title}</span>
      <ul className="flex flex-col gap-3">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-lg text-neutral-200 transition-colors duration-200 hover:text-white md:text-xl"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f0f0f] mt-[200px] px-6 pt-16 pb-8 text-white md:px-10 md:pt-20">
      {/* Top row: contact block (left) + link columns (right) */}
      <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-8">
        {/* Contact info */}
        <div className="flex flex-col gap-4 text-base md:text-lg">
          <p className="text-neutral-300">
            email:{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-white underline-offset-4 transition hover:underline"
            >
              {CONTACT.email}
            </a>
          </p>
          <p className="text-neutral-300">
            based in: <span className="text-white">{CONTACT.location}</span>
          </p>
          <p className="text-neutral-300">
            available for:{" "}
            <span className="text-white">{CONTACT.availability}</span>
          </p>
        </div>

        {/* Link columns */}
        <div className="flex gap-16 md:gap-24">
          <LinkColumn title="pages" links={PAGES} />
          <LinkColumn title="socials" links={SOCIALS} />
        </div>
      </div>

      {/* Oversized wordmark — scales fluidly, fills the width */}
      <div className="mt-16 @container  w-full  md:mt-24">
        <h2
          className="select-none font-bold leading-[0.85] tracking-tight text-[#e8e6df]"
          style={{ fontSize: "clamp(2rem, 13cqi, 13rem)", margin: 0 }}
        >
          {WORDMARK}
        </h2>
      </div>
      

      {/* Bottom bar */}
      <div className="mt-12 border-t border-neutral-800 pt-6">
        <p className="text-sm text-neutral-500">
          © {YEAR} {WORDMARK}. all rights reserved
        </p>
      </div>
    </footer>
  );
}
