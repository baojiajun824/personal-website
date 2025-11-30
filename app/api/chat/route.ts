import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { getComprehensiveResumeContext } from "@/content/ai-resume-data";
import { personalInfo } from "@/content";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY || ""
);

const SYSTEM_PROMPT = `You are a helpful AI assistant representing ${personalInfo.name}, a ${personalInfo.title}. Your role is to answer questions from recruiters and hiring managers about the candidate's professional background, technical skills, work experience, projects, and qualifications.

IMPORTANT GUIDELINES:
- Only provide information based on the resume data provided below
- Be professional, concise, and accurate
- Focus on relevant details that help recruiters understand the candidate's qualifications
- If asked about something not in the resume, politely say you don't have that information
- Use a friendly but professional tone
- Highlight key achievements and technical expertise when relevant

RESUME DATA:
${getComprehensiveResumeContext()}

Remember: You are helping recruiters and hiring managers evaluate the candidate. Be helpful, accurate, and professional.`;

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Check for API key
    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not set");
      return NextResponse.json(
        {
          error: "AI service is not configured. Please set GEMINI_API_KEY environment variable.",
        },
        { status: 500 }
      );
    }

    // Use gemini-2.5-flash model
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Build the full prompt with conversation history
    const conversationContext = conversationHistory
      .map((msg: { role: string; content: string }) => {
        if (msg.role === "user") {
          return `User: ${msg.content}`;
        } else {
          return `Assistant: ${msg.content}`;
        }
      })
      .join("\n\n");

    const fullPrompt = conversationContext
      ? `${SYSTEM_PROMPT}\n\nPrevious conversation:\n${conversationContext}\n\nUser: ${message}\nAssistant:`
      : `${SYSTEM_PROMPT}\n\nUser: ${message}\nAssistant:`;

    // Generate content
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ message: text });
  } catch (error) {
    console.error("Chat API error:", error);

    // Handle specific Gemini errors with detailed logging
    if (error instanceof Error) {
      const errorMessage = error.message;

      // Log the full error for debugging
      console.error("Full error details:", {
        message: errorMessage,
        stack: error.stack,
      });

      // Check for model not found errors
      if (
        errorMessage.includes("404") ||
        errorMessage.includes("not found") ||
        errorMessage.includes("404 Not Found")
      ) {
        return NextResponse.json(
          {
            error: `Model 'gemini-2.5-flash' is not available. This might mean:
1. Your API key doesn't have access to this model
2. The model name is incorrect or not available in your region
3. The Gemini API needs to be enabled in your Google Cloud project

To check which models are available, visit: /api/chat/models
Verify your API key at: https://aistudio.google.com/app/apikey`,
          },
          { status: 404 }
        );
      }

      // Check for quota/rate limit errors
      if (errorMessage.includes("quota") || errorMessage.includes("429")) {
        return NextResponse.json(
          {
            error: "API quota exceeded. Please check your API usage or try again later.",
          },
          { status: 429 }
        );
      }

      // Check for authentication errors
      if (
        errorMessage.includes("API_KEY") ||
        errorMessage.includes("403") ||
        errorMessage.includes("401") ||
        errorMessage.includes("invalid")
      ) {
        return NextResponse.json(
          {
            error: `API key authentication failed. Please verify:
1. Your GEMINI_API_KEY is correctly set in environment variables
2. The API key is valid and not expired
3. Check your API key at: https://aistudio.google.com/app/apikey`,
          },
          { status: 403 }
        );
      }
    }

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? `An error occurred: ${error.message}. Check the server logs for more details.`
            : "An error occurred while processing your request. Check the server logs for more details.",
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    {
      error: "Method not allowed. Use POST to send messages.",
      info: "Visit /api/chat/models to see available models",
    },
    { status: 405 }
  );
}
