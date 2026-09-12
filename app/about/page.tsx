import Image from "next/image";
import Link from "next/link";

type ExperienceItem = {
  company: string;
  role: string;
  description: string;
  period: string;
};

// TODO: replace with your real work history
const EXPERIENCE: ExperienceItem[] = [
  {
    company: "HomeEdu",
    role: "Frontend Developer,UI/UX Designer ",
    description: "Built an accessible React Native design system with reusable components, reducing accessibility complaints by 35%",
    period: "2025 - 2026",
  },
  {
    company: "Money Smith",
    role: "UI/UX Designer",
    description: "Designed and implemented user interfaces for financial applications, improving user satisfaction and engagement.",
    period: "2025 - 2026",
  },
  {
    company: "Freelance",
    role: "UI/UX Designer, Frontend Developer",
    description: "Provided design services for various clients, creating user-centered solutions that improved usability and engagement.",
    period: "2025 - now",
  },
];

export default function About() {
  return (
    <div className="flex w-full flex-col bg-black font-satoshi">
      {/* Hero */}
      <section className="mx-auto w-full max-w-[1600px] px-4 pt-8 md:px-8 md:pt-12 lg:px-16 lg:pt-16">
        <h1
          className="font-bold leading-[0.85] tracking-tight text-white"
          style={{ fontSize: "clamp(3rem, 12vw, 8.5rem)" }}
        >
          about me
        </h1>

        <div className="mt-10 flex flex-col gap-10 md:mt-14 lg:flex-row lg:gap-16">
          <div className="flex flex-col gap-6 lg:max-w-xl lg:flex-1">
          <p className="text-base leading-[1.6] text-grayy md:text-lg">
            I&apos;m Oluwasemilore Toluwanimi Adeolapo, a Frontend Developer and UI/UX Designer who bridges the gap between premium visual aesthetics and rigorous system architecture. With an academic foundation in Computer Science, I specialize in building state-aware, high-performance web applications using Next.js, React, and TypeScript.
          </p>
          <p className="text-base leading-[1.6] text-grayy md:text-lg">
            My workflow spans the entire product lifecycle from engineering strict grid layouts and interactive prototypes in Figma and Framer, to executing complex frontend logic with Redux Toolkit and Tailwind CSS. I design and develop everything from scalable e-commerce platforms handling dynamic payment states to high-end digital portfolios for the commercial real estate sector.
          </p>
          <p className="text-base leading-[1.6] text-grayy md:text-lg">
            I combine creative intuition with computational logic. Because I understand data flow all the way down to server-side routing with Node.js and Express, I don&apos;t just design interfaces that look flawless I architect resilient digital products engineered to perform.
          </p>

           <a
            href="/Resume.pdf"
            download="001_Josephadeolapo_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-fit items-center rounded-md bg-white px-6 py-3 text-sm font-medium text-black transition-colors duration-200 hover:bg-custom-gray"
          >
            download resume
          </a>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:aspect-[3/4] lg:flex-1">
            <Image
              src="/me.jpeg"
              alt="Adeolapo Joseph"
              fill
              quality={100}
              priority
              className="object-cover grayscale"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto mt-[120px] w-full max-w-[1600px] px-4 md:mt-[160px] md:px-8 lg:px-16">
        <h2
          className="mb-10 font-bold leading-[0.85] tracking-tight text-white md:mb-14"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)" }}
        >
          my experience
        </h2>

        <div className="border-t border-neutral-800">
          {EXPERIENCE.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-10 border-b border-neutral-800 py-6 md:flex-row md:items-center"
            >
              <div className="flex items-center justify-between md:block md:w-56 md:shrink-0">
                <div>
                  <p className="font-medium text-white">{item.company}</p>
                  <p className="text-sm text-grayy">{item.role}</p>
                </div>
                <p className="font-medium text-white md:hidden">
                  {item.period}
                </p>
              </div>

              <p className="hidden text-sm leading-[1.6] text-grayy md:block md:flex-1 md:px-8">
                {item.description}
              </p>

              <p className="hidden font-medium text-white md:block md:w-28 md:shrink-0 md:text-right">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Get in touch teaser */}
      <section className="mt-[120px] w-full overflow-hidden px-4 md:mt-[160px] md:px-6 lg:px-8">
  <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-6 lg:gap-8">
    
    <h2 className="w-full text-center whitespace-nowrap font-bold leading-[0.85] tracking-tight text-white md:w-auto md:text-left text-[22vw] md:text-[13vw] lg:text-[13vw]">
      get in
    </h2>

    <div className="relative aspect-[21/9] w-full shrink-0 overflow-hidden rounded-xl md:aspect-[3/2] md:w-[22vw] lg:w-[20vw]">
      <Image
        src="/edited_me.png"
        alt=""
        fill
        quality={100}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 25vw"
      />
    </div>

    <h2 className="w-full text-center whitespace-nowrap font-bold leading-[0.85] tracking-tight text-white md:w-auto md:text-right text-[22vw] md:text-[13vw] lg:text-[13vw]">
      touch
    </h2>
    
  </div>
</section>
    </div>
  );
}
