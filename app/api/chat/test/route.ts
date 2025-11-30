import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

/**
 * Test endpoint to verify Gemini API key and model access
 * Visit: /api/chat/test
 */
export async function GET() {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          status: "error",
          message: "GEMINI_API_KEY is not set in environment variables",
          suggestions: [
            "Create a .env.local file in the project root",
            "Add: GEMINI_API_KEY=your_key_here",
            "Restart your dev server",
            "Get your API key from: https://aistudio.google.com/app/apikey",
          ],
        },
        { status: 500 }
      );
    }

    // Check API key format (Gemini keys are typically long strings)
    if (apiKey.length < 20) {
      return NextResponse.json(
        {
          status: "warning",
          message: "API key seems too short. Please verify it's correct.",
          apiKeyPrefix: apiKey.substring(0, 10) + "...",
        },
        { status: 200 }
      );
    }

    // Try to initialize and test the API
    const genAI = new GoogleGenerativeAI(apiKey);

    // Try to list models (this will tell us if the API key works)
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const result = await model.generateContent("Say 'Hello' if you can read this.");
      const response = await result.response;
      const text = response.text();

      return NextResponse.json(
        {
          status: "success",
          message: "API key is working!",
          testResponse: text,
          model: "gemini-2.5-flash",
          nextSteps: [
            "Your API key is configured correctly",
            "You can now use the chat feature",
          ],
        },
        { status: 200 }
      );
    } catch (modelError: any) {
      const errorMsg = modelError?.message || "Unknown error";
      
      return NextResponse.json(
        {
          status: "error",
          message: "API key test failed",
          error: errorMsg,
          suggestions: [
            "Verify your API key at: https://aistudio.google.com/app/apikey",
            "Make sure the Gemini API is enabled in your Google Cloud project",
            "Check that your API key has the correct permissions",
            "Try generating a new API key",
          ],
          troubleshooting: {
            "404 Not Found": "The model might not be available. Try checking your API access in Google Cloud Console.",
            "403 Forbidden": "API key might not have permission. Check API key settings.",
            "401 Unauthorized": "API key is invalid. Generate a new one.",
          },
        },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Unexpected error during API test",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

