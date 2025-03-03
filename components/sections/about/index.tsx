"use client";
import useCurSection from "@/hooks/use-cur-section";
import Image from "next/image";
import { Fragment, useRef } from "react";
import { motion } from "framer-motion";


export default function AboutSection() {
  const ref = useRef(null);
  useCurSection(ref,0.4);
  return (
    <div
      ref={ref}
      id="about"
      className="w-full py-12 my-32 bg-muted text-sm md:text-base"
    >
      <h1 className="text-center text-3xl md:text-5xl mb-12">
        <span className="text-gradient-primary">{"{ "}</span>
        About Me
        <span className="text-gradient-primary">{" }"}</span>
      </h1>

      <div className="flex gap-9 items-center flex-col  w-10/12 mx-auto p-5 rounded-lg container">
        <div className="relative flex-shrink-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeIn" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-primary opacity-50 size-[120px] rounded-full blur-3xl"
          />
          <motion.div
            initial={{ x: "-200%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="rounded-full size-[200px] bg-gradient-primary p-0.5"
          >
            <Image
              className="size-full rounded-full grayscale hover:grayscale-0 transition-all object-cover"
              width={600}
              height={600}
              alt="about profile image"
              src={"https://avatars.githubusercontent.com/u/124909580?v=4"}
            />
          </motion.div>
        </div>

        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-xl md:text-3xl font-bold">
            <span className="text-secondary">{"< "}</span>
            <span className="text-gradient-secondary">Who am I</span>
            <span className="text-secondary">{" />"}</span>
          </h2>
          <motion.p
            initial={{ y: "-20%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, ease: "easeIn", duration: 0.5 }}
            className="text-muted-foreground text-justify"
          >
            Hey, I&apos;m Samir, a web and mobile app developer with expertise in
            React, Next.js, React Native, Django, and various other technologies.
            I specialize in building and optimizing high-performance web and mobile
            applications. If you need a fast, scalable, and maintainable app, I'm
            the person to help you make it happen.
            <br />
            <br />
            <span className="font-semibold">📌 What I Do Best:</span>
            <br />
            ✅ Full-Stack Web Development &ndash; From front-end to back-end with
            React, Next.js, Django, and Node.js.
            <br />
            ✅ Mobile App Development &ndash; Crafting beautiful, native-like experiences
            with React Native.
            <br />
            ✅ Performance Optimization &ndash; Speeding up apps and improving SEO to
            provide a seamless user experience.
            <br />
            ✅ Building Scalable Web Applications &ndash; Ensuring your app grows without
            facing performance issues.
            <br />
            ✅ AI Features & Automation &ndash; Leveraging AI technologies to enhance
            your app&apos;s features and automate processes.
            <br />
            <br />
            <span className="font-semibold">📌 Why Work With Me?</span>
            <br />
            🔹 I focus on delivering high-quality, results-oriented solutions that
            meet the specific needs of your project.
            <br />
            🔹 I prioritize clean, maintainable code that can be scaled as your
            business grows.
            <br />
            🔹 I work closely with you to ensure that your goals are met while
            providing timely feedback and updates.
            <br />
            <br />
            <span className="font-semibold">📌 Let&apos;s Talk</span>
            <br />
            Whether you&apos;re looking for help building a new app, optimizing an
            existing one, or adding new features, I&apos;m here to assist.
            <br />
            <a href="#contact" className="text-primary hover:underline">
              ✅ Get in Touch
            </a>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
