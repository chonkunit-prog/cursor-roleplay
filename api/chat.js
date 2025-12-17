// Vercel serverless function to proxy Anthropic API requests
// This avoids CORS issues by handling API calls server-side

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get API key from request headers
  const apiKey = req.headers['x-api-key'];
  
  if (!apiKey) {
    return res.status(401).json({ error: 'API key required' });
  }

  try {
    // Forward the request to Requesty router (Anthropic-compatible)
    const response = await fetch('https://router.requesty.ai/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();

    // If Anthropic returned an error, pass it through
    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    // Return successful response
    return res.status(200).json(data);
    
  } catch (error) {
    console.error('Error calling Anthropic API:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
}
