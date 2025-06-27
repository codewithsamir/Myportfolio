"use client";

import React, { useRef } from "react";
import useCurSection from "@/hooks/use-cur-section";

const syllabus = [
  {
    module: "Module 1: Introduction (Theory + Motivation)",
    topics: [
      "What is Backend? Real-world examples",
      "What is Node.js? Why use it?",
      "How Node.js works (V8, non-blocking I/O)",
      "Series overview: What you will build",
      "Mini Task: Install Node.js & run a Hello Backend script",
    ],
  },
  {
    module: "Module 2: File System & Core Modules",
    topics: [
      "Create files & folders using fs and fs/promises",
      "Difference between writeFile vs writeFileSync",
      "Read files (JSON, text)",
      "Mini Task: CLI tool to create folder & write file",
    ],
  },
  {
    module: "Module 3: HTTP & Simple Server",
    topics: [
      "Create raw HTTP server with http module",
      "Serve basic text/JSON response",
      "Understand request & response objects",
      "Mini Task: Server that responds with name & age in JSON",
    ],
  },
  {
    module: "Module 4: path, os & events Modules",
    topics: [
      "Use path module for safe file paths",
      "Use os module to get system info",
      "Simple logger with events module",
      "Mini Task: Build a logger module using events",
    ],
  },
  {
    module: "Module 5: Intro to Express.js",
    topics: [
      "Why use Express.js over HTTP module",
      "Setup Express server",
      "Make basic GET & POST routes",
      "Mini Task: Express app that returns a welcome message",
    ],
  },
  {
    module: "Module 6: CRUD with Express & Dummy Data",
    topics: [
      "Create, Read, Update, Delete endpoints",
      "Test routes using Postman/Thunder Client",
      "Mini Task: In-memory notes API",
    ],
  },
  {
    module: "Module 7: Folder Structure & Middleware",
    topics: [
      "Best folder structure for Express projects",
      "What are middlewares? How they work",
      "Add logging middleware",
      "Mini Task: Custom middleware to show request time",
    ],
  },
  {
    module: "Module 8: MongoDB & Mongoose",
    topics: [
      "Setup MongoDB Atlas & connect",
      "Create Mongoose schema & model",
      "CRUD operations with MongoDB",
      "Mini Task: Save notes to MongoDB",
    ],
  },
  {
    module: "Module 9: Input Validation & Security",
    topics: [
      "Add input validation with Zod/Joi",
      "Protect APIs with Helmet & CORS",
      "Mini Task: Add validation to notes API",
    ],
  },
  {
    module: "Module 10: Authentication (JWT + bcrypt)",
    topics: [
      "Register user & hash password with bcrypt",
      "Login user & generate JWT",
      "Protect routes with JWT auth",
      "Mini Task: Secure notes API with JWT",
    ],
  },
  {
    module: "Module 11: Real-time (Optional)",
    topics: [
      "Setup socket.io with Express",
      "Broadcast messages in real-time",
      "Mini Task: Add live updates for notes",
    ],
  },
  {
    module: "Module 12: Deployment & Final Project",
    topics: [
      "Use dotenv for env variables",
      "Deploy backend on Render/Railway/Vercel",
      "Tips for production & GitHub best practices",
      "Mini Task: Deploy your final Task Manager API live",
    ],
  },
];


export default function BackendCourseSection() {
  const ref = useRef(null);
  useCurSection(ref, 0.1);
  return (
    <section
      ref={ref}
      id="backend-course"
      className="w-full p-12 flex flex-col items-center gap-8 container  text-sm md:text-base"
    >
      <h1 className="text-3xl md:text-4xl text-gradient-primary text-center mb-6">
        <span>{"//"}</span> Modern Backend Developer Course Syllabus – 2025
      </h1>
      <div className="w-full max-w-3xl space-y-8">
        {syllabus.map((mod, idx) => (
          <div key={mod.module} className="bg-muted border rounded-xl p-6 shadow-md">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-primary">
              {`✅ ${mod.module}`}
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              {mod.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 