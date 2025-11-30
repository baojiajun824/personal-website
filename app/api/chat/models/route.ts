import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

/**
 * List all available Gemini models for your API key
 * Visit: /api/chat/models
 */
export async function GET() {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          status: "error",
          message: "GEMINI_API_KEY is not set in environment variables",
        },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // Try to list models using the REST API directly
    // Since the SDK might not have a listModels method, we'll try fetching directly
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
      );

      if (!response.ok) {
        const errorText = await response.text();
        return NextResponse.json(
          {
            status: "error",
            message: "Failed to fetch models",
            error: errorText,
            statusCode: response.status,
            suggestion: "Check if your API key has access to list models, or try using a specific model directly",
          },
          { status: response.status }
        );
      }

      const data = await response.json();
      const models = data.models || [];

      // Filter and format model information
      const formattedModels = models
        .filter((model: any) => {
          // Filter for models that support generateContent
          return (
            model.supportedGenerationMethods?.includes("generateContent") ||
            model.supportedGenerationMethods?.includes("GENERATE_CONTENT")
          );
        })
        .map((model: any) => ({
          name: model.name,
          displayName: model.displayName,
          description: model.description,
          supportedMethods: model.supportedGenerationMethods || [],
          inputTokenLimit: model.inputTokenLimit,
          outputTokenLimit: model.outputTokenLimit,
          // Extract just the model name (without "models/" prefix)
          shortName: model.name?.replace("models/", "") || model.name,
        }))
        .sort((a: any, b: any) => {
          // Sort by name for easier reading
          return a.name?.localeCompare(b.name) || 0;
        });

      // Try to identify free tier models
      const recommendedModels = formattedModels.filter((model: any) => {
        const name = model.shortName?.toLowerCase() || "";
        return (
          name.includes("gemini-pro") ||
          name.includes("gemini-1.5-flash") ||
          name.includes("gemini-1.5-pro")
        );
      });

      return NextResponse.json(
        {
          status: "success",
          totalModels: formattedModels.length,
          recommendedModels: recommendedModels.map((m: any) => m.shortName),
          allModels: formattedModels,
          message:
            recommendedModels.length > 0
              ? `Recommended free tier models: ${recommendedModels.map((m: any) => m.shortName).join(", ")}`
              : "No obvious free tier models found. Check the allModels list.",
        },
        { status: 200 }
      );
    } catch (fetchError: any) {
      return NextResponse.json(
        {
          status: "error",
          message: "Failed to fetch models from API",
          error: fetchError.message,
          suggestion:
            "Try testing with a known model like 'gemini-pro' directly in your chat route",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Unexpected error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

