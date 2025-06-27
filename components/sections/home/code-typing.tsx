"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Highlight, themes } from "prism-react-renderer";

const defaultProps = {
  theme: themes.vsDark,
};

const codeSnippet = `// Welcome to my AI-Powered Portfolio! 🚀
import { FullStackDeveloper } from 'codewithsamir';
import { Skills, Services } from '@/profile';

function buildAwesomeProjects() {
  const mySkills = {
    frontend: ["Next.js", "React.js", "Remix", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "NestJS", "MongoDB"],
    extras: ["REST API", "JWT Auth", "Socket.io", "GraphQL (basic)"],
    aiTools: ["OpenAI API", "ChatGPT Integrations"],
    passion: "Building practical, modern full-stack & AI-powered web apps"
  };

  return {
    message: "Let's build something amazing together! 💻✨",
    services: [
      "Full-Stack Web Apps",
      "Custom REST/GraphQL APIs",
      "Real-Time Features",
      "AI Chatbots & Integrations",
      "Backend Architecture (NestJS)"
    ],
    contact: "Scroll down or email me to get started →"
  };
};
`;


export default function CodeTyping() {
  const [displayedLines, setDisplayedLines] = useState<string[]>(
    Array(codeSnippet.split("\n").length).fill("")
  );
  const [currentLine, setCurrentLine] = useState(0);
  const [cursorPosition, setCursorPosition] = useState(0);
  const lines = codeSnippet.split("\n");

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const currentText = lines[currentLine];
    const timeout = setTimeout(() => {
      if (cursorPosition < currentText.length) {
        setDisplayedLines((prev) =>
          prev.map((line, i) =>
            i === currentLine ? currentText.slice(0, cursorPosition + 1) : line
          )
        );
        setCursorPosition(cursorPosition + 1);
      } else {
        setCurrentLine(currentLine + 1);
        setCursorPosition(0);
      }
    }, Math.random() * 50 + 30);

    return () => clearTimeout(timeout);
  }, [currentLine, cursorPosition]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-lg bg-muted p-4 w-full max-w-[500px] font-mono max-[400px]:text-[0.6rem] text-xs sm:text-sm overflow-hidden shadow-lg justify-self-center"
    >
      {/* Fake MacOS Window Buttons */}
      <div className="flex items-center gap-1.5 mb-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      {/* Code Highlighting Section */}
      <div className="space-y-1 text-gray-300 text-left">
        <AnimatePresence>
          <Highlight
            {...defaultProps}
            code={displayedLines.join("\n")}
            language="tsx"
          >
            {({ tokens, getLineProps, getTokenProps }) => (
              <>
                {tokens.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    {...getLineProps({ line })}
                    className="flex"
                  >
                    <span className="mr-4 select-none opacity-50 w-6 text-right">
                      {i + 1}
                    </span>
                    <span
                      className="relative flex-1"
                      style={{
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        paddingLeft: `${
                          line[0]?.content?.match(/^\s*/)?.[0]?.length ||
                          0 * 0.6
                        }em`,
                        textIndent: `-${
                          line[0]?.content?.match(/^\s*/)?.[0]?.length ||
                          0 * 0.6
                        }em`,
                      }}
                    >
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                      {i === currentLine && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 1, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            times: [0, 0.2, 0.8, 1],
                          }}
                          className="absolute inline-block h-[1.2em] w-[2px] bg-white"
                          style={{
                            left: `${cursorPosition * 0.6}em`,
                            top: 0,
                          }}
                        />
                      )}
                    </span>
                  </motion.div>
                ))}
              </>
            )}
          </Highlight>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
