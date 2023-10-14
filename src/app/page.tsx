"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Me from "/public/assets/me.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image className="rounded-full mb-4 mx-auto w-96" src={Me} alt="Me" />
        <h1 className="text-white font-bold flex flex-col text-5xl justify-center items-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] to-[#8200fc] font-bold">
            Hello, I&apos;m{" "}
          </span>
          <TypeAnimation
            sequence={[
              "Egor",
              1000,
              "Web Developer",
              1000,
              "Front-end Developer",
              1000,
              "JavaScript Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl my-10 flex justify-center items-center">
          Welcome to my page! Here, you can discover more about me,
          <br />
          explore my projects, and find my contact information.
          <br />I m excited to work together!
        </p>
        <div className="flex items-center justify-between max-w-2xl mx-auto mt-20">
          <Link href="https://telegram.me/egorkaplayboy">
            <svg
              fill="#000000"
              width="75px"
              height="75px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z"></path>
            </svg>
          </Link>
          <Link href="https://career.habr.com/egorkaplayboy">
            <svg
              fill="#000000"
              width="75px"
              height="75px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0v32h32v-32zM9.365 5.333h2.177c1.63 0 2.188 0.036 2.224 0.151 0.026 0.089 0.042 1.823 0.042 3.865l-0.010 3.708 0.63-0.563c0.88-0.776 1.62-1.047 3.021-1.099 0.922-0.026 1.297 0.010 1.943 0.24 1.417 0.474 2.417 1.448 2.938 2.885 0.203 0.563 0.229 1.151 0.266 5.714l0.042 5.099h-4.453v-4.161c0-4.099-0.010-4.151-0.286-4.651-0.391-0.661-0.813-0.964-1.479-1.036-1.135-0.125-1.922 0.26-2.37 1.188-0.214 0.427-0.24 0.875-0.25 4.474-0.016 2.198-0.042 4.042-0.042 4.089-0.010 0.063-1 0.099-2.203 0.099h-2.182v-10z" />
            </svg>
          </Link>
          <Link href="https://github.com/egorkaplayboy">
            <svg
              width="75px"
              height="75px"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-140.000000, -7559.000000)"
                  fill="#000000"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                      id="github-[#142]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
