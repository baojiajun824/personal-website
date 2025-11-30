# AI Chat Agent Setup Guide

This guide explains how to set up the AI chat agent feature that allows visitors (recruiters and hiring managers) to ask questions about your professional background.

## Overview

The AI chat agent uses Google's Gemini AI (with a generous free tier) to answer questions about your:
- Professional background and experience
- Technical skills and expertise
- Work history and achievements
- Education and certifications
- Projects and portfolio

## Why Gemini?

**Google Gemini offers a truly free tier** with generous rate limits, making it perfect for portfolio websites. Unlike OpenAI (which requires payment after free credits), Gemini's free tier allows you to use the API without credit card requirements.

## Prerequisites

- A Google account
- Access to Google AI Studio

## Setup Instructions

### 1. Get Your Google Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Get API Key"** or **"Create API Key"**
4. Select or create a Google Cloud project (you can use the default project)
5. Copy your API key

**Important:** 
- Google provides a **truly free tier** for Gemini API with generous limits
- No credit card required
- Perfect for portfolio websites and personal projects
- Check [Gemini API pricing](https://ai.google.dev/pricing) for current free tier limits

### 2. Configure Environment Variables

#### For Local Development

1. Create a `.env.local` file in the root of your project:
   ```bash
   touch .env.local
   ```

2. Add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_actual_api_key_here
   ```

3. Restart your development server:
   ```bash
   npm run dev
   ```

#### For Vercel Deployment

1. Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to **Settings** → **Environment Variables**
3. Add a new environment variable:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** Your Gemini API key
   - **Environment:** Production, Preview, and Development (select all)
4. Click **Save**
5. Redeploy your application for changes to take effect

### 3. Test the Chat Feature

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open your website in a browser
3. Click the chat button in the bottom-right corner
4. Try asking questions like:
   - "Tell me about your work experience"
   - "What technologies are you proficient in?"
   - "What projects have you worked on?"
   - "What is your educational background?"

## How It Works

### Architecture

```
┌─────────────────┐
│  Chat UI        │  (components/chat/AIChatBot.tsx)
│  (Client-side)  │
└────────┬────────┘
         │
         │ HTTP POST /api/chat
         │
┌────────▼────────┐
│  API Route      │  (app/api/chat/route.ts)
│  (Server-side)  │
└────────┬────────┘
         │
         │ Uses Gemini AI (Free Tier)
         │
┌────────▼────────┐
│  Resume Data    │  (content/resume.ts)
│  (Hardcoded)    │
└─────────────────┘
```

### Data Flow

1. **User asks a question** → Chat UI sends message to API
2. **API receives question** → Retrieves hardcoded resume data from `content/resume.ts`
3. **AI processes request** → Gemini AI uses resume context to generate answer
4. **Response sent back** → Answer displayed in chat UI

### Resume Data Structure

The AI agent uses data from the following content files:
- `content/personal-info.ts` - Personal information and bio
- `content/experience.ts` - Work experience
- `content/education.ts` - Education history
- `content/skills.ts` - Technical skills
- `content/projects.ts` - Projects and portfolio

All data is consolidated in `content/resume.ts` using the `getResumeContext()` function.

## Customization

### Updating Resume Information

Simply edit the content files in the `content/` directory. The AI will automatically use the updated information:

- Update work experience → Edit `content/experience.ts`
- Update skills → Edit `content/skills.ts`
- Update projects → Edit `content/projects.ts`
- Update personal info → Edit `content/personal-info.ts`

### Customizing the AI Behavior

Edit the system prompt in `app/api/chat/route.ts`:

```typescript
const SYSTEM_PROMPT = `You are a helpful AI assistant...`;
```

You can modify:
- The tone of responses
- What information to emphasize
- How to handle specific types of questions

### Customizing the Chat UI

Edit `components/chat/AIChatBot.tsx` to:
- Change colors and styling
- Adjust chat window size
- Modify the welcome message
- Add new features

### Using a Different Gemini Model

The default model is `gemini-1.5-flash` which is faster and more cost-effective, and works with the free tier. You can switch to other Gemini models by editing `app/api/chat/route.ts`:

```typescript
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Fast and efficient
// Other options: "gemini-pro" (standard), "gemini-1.5-pro" (more capable)
```

**Note:** `gemini-1.5-flash` is optimized for speed and cost-effectiveness. If you encounter access issues, you can switch to `gemini-pro` which is the most compatible model for the free tier.

## Troubleshooting

### Chat Not Working

1. **Check API Key:**
   - Ensure `GEMINI_API_KEY` is set in your environment variables
   - Verify the API key is correct (no extra spaces or quotes)

2. **Check API Route:**
   - Visit `/api/chat` directly (should return 405 Method Not Allowed, not 500)
   - Check browser console for errors

3. **Check Server Logs:**
   - Look for error messages in your terminal/Vercel logs
   - Common issues: Invalid API key, rate limiting, network errors

### API Key Errors

- **"API key not valid"** → Regenerate your API key in Google AI Studio
- **"Quota exceeded"** → Check your API usage in Google Cloud Console (free tier has generous limits)
- **"Permission denied"** → Ensure the API key has access to Gemini API

### Rate Limiting

If you hit rate limits:
- Check [Gemini API quotas](https://ai.google.dev/pricing) for free tier limits
- Free tier typically allows 15 requests per minute
- For higher usage, consider upgrading to a paid plan
- Implement rate limiting on your API route for production use

## Cost & Free Tier

### Gemini Free Tier Benefits

- ✅ **Truly free** - No credit card required
- ✅ **Generous limits** - Typically 60 requests per minute
- ✅ **No expiration** - Free tier doesn't expire
- ✅ **Perfect for portfolios** - More than enough for personal websites

### Monitoring Usage

- Check usage in [Google Cloud Console](https://console.cloud.google.com/)
- Set up alerts if you approach limits
- Free tier is usually sufficient for portfolio websites

## Security Best Practices

1. **Never commit API keys** - They're in `.gitignore` for a reason
2. **Use environment variables** - Never hardcode API keys in source code
3. **Restrict API key permissions** - In Google Cloud Console, restrict which APIs the key can access
4. **Monitor usage** - Regularly check API usage to detect unexpected activity
5. **Rotate keys** - Periodically regenerate API keys for security

## Alternative LLM Options

If you want to use a different LLM provider:

### OpenAI (Requires Payment After Free Credits)

1. Install: `npm install openai`
2. Replace Gemini code in `app/api/chat/route.ts` with OpenAI SDK
3. Update environment variable to `OPENAI_API_KEY`
4. **Note:** OpenAI gives free credits initially, but requires payment after they're used up

### Anthropic Claude

1. Install: `npm install @anthropic-ai/sdk`
2. Replace Gemini code with Claude SDK
3. Update environment variable to `ANTHROPIC_API_KEY`
4. Check [Anthropic Pricing](https://www.anthropic.com/pricing) for rates

### Hugging Face Inference API (Free Tier Available)

1. Install: `npm install @huggingface/inference`
2. Replace Gemini code with Hugging Face SDK
3. Check [Hugging Face Pricing](https://huggingface.co/pricing) for free tier limits

## Support

For issues or questions:
- Check the [Gemini API documentation](https://ai.google.dev/docs)
- Review [Google AI Studio](https://aistudio.google.com/) for API key management
- Check Vercel logs for deployment issues
- Ensure all dependencies are installed: `npm install`

## License

This feature uses Google's Gemini API. Make sure to review and comply with their [terms of service](https://ai.google.dev/terms).
