# AI Ropanion

A landing page and API proxy for AI Ropanion, your AI-powered companion for Roblox Studio development.

## Description

AI Ropanion enhances your Roblox Studio experience by providing AI-driven tools and insights to boost productivity in game development. This project includes a landing page and a Vercel API proxy to integrate with OpenRouter for AI requests.

## Features

- Code Generation: Generate Roblox scripts with AI assistance
- Debugging Help: Get AI-powered debugging suggestions
- Project Management: Organize and manage your Roblox projects efficiently
- OpenRouter Integration: Proxy API for secure AI requests with proper attribution

## Getting Started

To view the landing page locally:

1. Clone this repository
2. Open `index.html` in your web browser

## Deployment

This project is designed to be deployed on Vercel. To deploy:

1. Push this code to a GitHub repository
2. Import the repository into Vercel
3. Vercel will automatically deploy the static site and API routes

## API Proxy Setup

The `/api/chat` endpoint proxies requests to OpenRouter with proper headers for attribution:

- **X-Title**: "Ropanion - ROBLOX AI ASSISTANT"
- **HTTP-Referer**: Your Vercel deployment URL

### Usage from Roblox

Send POST requests to `https://your-vercel-app.vercel.app/api/chat` with:

- **Headers**:
  - `Authorization: Bearer YOUR_OPENROUTER_API_KEY`
  - `Content-Type: application/json`

- **Body**: Standard OpenRouter chat completions JSON

The proxy will forward the request to OpenRouter and stream the response back.

### Example Roblox Code

```lua
local HttpService = game:GetService("HttpService")
local response = HttpService:RequestAsync({
    Url = "https://your-vercel-app.vercel.app/api/chat",
    Method = "POST",
    Headers = {
        ["Authorization"] = "Bearer " .. userApiKey,
        ["Content-Type"] = "application/json"
    },
    Body = HttpService:JSONEncode({
        model = "openrouter/sonoma-sky-alpha",
        messages = {{role = "user", content = "Hello"}},
        stream = false
    })
})
```

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js (Vercel API)

## License

This project is licensed under the MIT License.