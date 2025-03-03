import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import data from "@/data"; // Assuming you have a `data` file that includes your info

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Create a context string from your data
const createContextFromData = () => {
  const projects = data.projects.projects.map((p) => `- ${p.title}: ${p.description}`).join("\n");
  const skills = data.technologies.skills.map((s) => s.name).join(", ");

  return `
    About Samir Rain:
    - Full Stack Developer specializing in Next.js, React, Django, and Mobile App Development
    - Over 5 years of experience in web development and mobile app creation
    - Email: ${data.contact.email}
    
    Core Expertise:
    - Next.js & React Development: Building dynamic, scalable web applications
    - Django & Backend Development: RESTful API development and server-side logic
    - Mobile App Development: React Native for cross-platform applications
    - Full Stack Development: ${skills}
    
    AI Integration Capabilities:
    1. Chatbots & Conversational AI:
       - Custom AI assistants and customer service automation
       - Multi-language support and dynamic conversation flow
    
    2. Content & Text Processing:
       - AI-powered content generation and automated text summarization
       - SEO optimization using AI tools
    
    3. Recommendation Systems:
       - Personalized content and product recommendation engines
       - Behavioral analytics and user engagement improvement
    
    4. Process Automation:
       - Automating workflows and smart scheduling systems
       - Data extraction and intelligent form processing
    
    Notable Projects:
    ${projects}
    
    AI Integration Process:
    1. Requirements Analysis: Understanding specific AI needs and goals
    2. Solution Design: Selecting appropriate AI models and integration techniques
    3. Implementation: Seamlessly integrating AI with your existing infrastructure
    4. Testing & Optimization: Improving accuracy and performance
    5. Monitoring & Maintenance: Ongoing improvement and scaling of AI features
    
    Services:
    - Custom AI Feature Development
    - AI Model Integration & Fine-Tuning
    - Full Stack Development: Web & Mobile Apps
    - Performance Optimization & Scalability Planning
    - AI Integration Consultation
    
    Additional Information:
    - Experience with multiple AI platforms: OpenAI, Google AI, Hugging Face
    - Focus on business-driven AI solutions and ethical implementation
    - Regular updates with cutting-edge technologies in AI and software development
  `;
};

const MESSAGE_HISTORY_LIMIT = 5;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: {
        temperature: 0.7,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      },
    });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: `You are an AI assistant for Samir Rain. Use the following information to help answer questions:
            ${createContextFromData()}
            
            Guidelines:
            - Be enthusiastic and professional
            - Provide specific, detailed examples from the context
            - Highlight relevant projects and technical capabilities
            - Emphasize practical, real-world applications
            - Use bullet points or numbered lists for better readability
            - Mention relevant experience and past projects
            - Focus on Samir's expertise in Next.js, React, Django, and Mobile App Development`,
        },
        {
          role: "model",
          parts:
            "I understand. I'll act as Samir's AI assistant, providing detailed, confident responses about his experience in AI integration, full-stack development, and mobile app development. I’ll emphasize real-world applications, successful projects, and practical solutions.",
        },
        ...messages.slice(-MESSAGE_HISTORY_LIMIT).map((msg: any) => ({
          role: msg.role === "assistant" ? "model" : "user",
          parts: msg.content,
        })),
      ],
    });

    const result = await chat.sendMessage(
      messages[messages.length - 1].content
    );
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ content: text });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to get AI response" },
      { status: 500 }
    );
  }
}
