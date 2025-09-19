export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Extract user's API key from Authorization header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(400).json({ error: 'Missing or invalid Authorization header' });
  }
  const userApiKey = authHeader.replace('Bearer ', '');

  // Basic validation
  if (!/^sk-[A-Za-z0-9._-]+$/.test(userApiKey)) {
    return res.status(400).json({ error: 'Invalid API key format' });
  }

  try {
    // Forward the request to OpenRouter
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${userApiKey}`,
        'Content-Type': 'application/json',
        'X-Title': 'Ropanion - ROBLOX AI ASSISTANT',
        'HTTP-Referer': process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://ropanion.vercel.app',
      },
      body: JSON.stringify(req.body),
    });

    // Stream the response back
    res.status(response.status);
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (response.body) {
      response.body.pipe(res);
    } else {
      res.end();
    }
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}