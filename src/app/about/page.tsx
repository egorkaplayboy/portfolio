'use client'
import { motion } from "framer-motion";
import AboutImage from "/public/assets/about.png";
import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto py-10 flex">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex"
      >
        <div className="max-w-md">
          <Image src={AboutImage} alt="" />
        </div>
        <div className="ml-10 flex flex-col">
          <h1 className="text-white font-bold text-5xl">Hi 👋, I m Egor!</h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl my-10">
            I m a self-taught and spirited frontend developer with a passion for
            creating interactive and user-friendly applications. I have
            expirience with tools such as JavaScript, React, Node.js, Express,
            MongoDB, HTML/CSS, Redux Toolkit/RTK Query, TypeScript, REST Api,
            Axios, Ant Design, Material UI, tailwindCSS, Git, React-hook-form.
            I m quick learner and I m always looking to expand my knowledge and
            skill set. I am a positive person and love humor.
            <br />
            <br />
            <br />
            Education:
            <br />
            - MBOU Secondary School 41
            <br />- Ivanovo State University of Chemical Technology
          </p>
        </div>
      </motion.div>
    </div>
  )
}