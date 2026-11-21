
import Image from "next/image";

export default function ProjectPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[730px] pb-28 sm:pb-0">

      {/* Green glow behind laptop */}
      <div
        className="
          absolute left-[8%] top-[5%]
          h-[75%] w-[80%]
          rounded-full bg-lime/15
          blur-[45px]
        "
      />

      {/* Green reflection below laptop */}
      <div
        className="
          absolute bottom-16 left-[5%]
          h-7 w-[90%]
          rounded-full bg-lime/35
          blur-2xl
          sm:bottom-0
        "
      />

      {/* Clickable Project Area */}
      <a
        href="https://career-flow-bay.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit the CareerFlow application"
        className="
          relative z-10 block cursor-pointer
          transition-transform duration-300
          hover:scale-[1.02]
          focus-visible:outline
          focus-visible:outline-2
          focus-visible:outline-lime
        "
      >

        {/* Laptop container */}
        <div
          className="relative mx-auto w-[88%] sm:w-[74%]"
          style={{ perspective: "1200px" }}
        >

          {/* Laptop 3D */}
          <div
            style={{
              transform: "rotateY(-7deg) rotateZ(2deg)",
              transformStyle: "preserve-3d",
            }}
          >

            {/* Screen frame */}
            <div
              className="
                relative
                rounded-t-[22px]
                border-[5px] border-[#303541]
                bg-[#08090D]
                p-[7px]
                shadow-[0_0_18px_rgba(198,255,61,0.12)]
              "
            >

              {/* Screen */}
              <div
                className="
                  relative aspect-[2.05/1]
                  overflow-hidden
                  rounded-t-[13px]
                  bg-black
                "
              >
                <Image
                  src="/images/projects/careerflow/screenshot.png"
                  alt="CareerFlow application preview"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 600px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Hinge */}
            <div
              className="
                relative z-10 mx-auto
                h-[4px] w-[28%]
                rounded-b-md
                bg-[#343A46]
              "
            />

            {/* Laptop base */}
            <div
              className="
                relative mx-[-5%]
                h-[15px]
                rounded-t-[3px]
                rounded-b-[45%]
                border-t border-[#A5AAB3]
                bg-gradient-to-b
                from-[#C0C4CA]
                via-[#747C89]
                to-[#303541]
                shadow-[0_8px_15px_rgba(0,0,0,0.45)]
              "
            >

              {/* Trackpad */}
              <div
                className="
                  absolute left-1/2 top-0
                  h-[4px] w-[13%]
                  -translate-x-1/2
                  rounded-b-full
                  bg-[#414653]
                "
              />
            </div>
          </div>

        </div>

        {/* Click Here Annotation */}
        <div
          className="
            absolute
            -bottom-[72px] right-0
            z-30 w-[110px]
            sm:bottom-auto
            sm:-right-[95px]
            sm:top-[38%]
            sm:w-[120px]
          "
        >

          {/* Hand-drawn arrow */}
          <svg
            viewBox="0 0 90 55"
            className="
              absolute
              -left-2 -top-12
              w-[60px]
              text-lavender
              sm:-left-6
              sm:-top-10
              sm:w-[85px]
            "
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M85 48 C70 12 35 5 9 15"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />

            <path
              d="M17 8 L8 15 L19 19"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Handwritten text */}
          <div
            className="
              rotate-[-12deg]
              text-center
              text-lavender
            "
            style={{ fontFamily: "var(--font-hand)" }}
          >
            <p className="whitespace-nowrap py-1.5 text-[17px]">
              Click Here
            </p>
          </div>

          {/* Custom Mouse Icon */}
          <svg
            viewBox="0 0 24 32"
            className="
              absolute -right-3 top-1
              h-6 w-[17px]
              sm:right-2
            "
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="careerflow-mouse-gradient"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#78B7FF" />
                <stop offset="100%" stopColor="#2865E8" />
              </linearGradient>
            </defs>

            <path
              d="M12 1.5C6.5 1.5 3 5.5 3 11v10c0 5.5 3.5 9.5 9 9.5s9-4 9-9.5V11c0-5.5-3.5-9.5-9-9.5Z"
              fill="url(#careerflow-mouse-gradient)"
              stroke="#A8C9FF"
              strokeWidth="0.8"
            />

            <path
              d="M12 2v9"
              stroke="white"
              strokeWidth="1"
            />

            <path
              d="M12 5v3"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

        </div>

      </a>

    </div>
  );
}
