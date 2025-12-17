// Vercel serverless function to proxy API requests through Requesty
// This avoids CORS issues by handling API calls server-side
// Requesty tracks costs and usage across different models

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Hardcoded Requesty API key for cost tracking
  const REQUESTY_API_KEY = 'rqsty-sk-6f6+TEqGQ8e/RudkMLY8lxFEvUhN4sRybl2xHuo5ZEXUp6omL1iu4txARcjJVict73oDw8nyTd8FGJBJBm/Fiq1OpPfCbPYi+6+kg+DhzwU=';

  try {
    // Forward the request to Requesty router (which proxies to Anthropic)
    const response = await fetch('https://router.requesty.ai/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': REQUESTY_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();

    // If request returned an error, pass it through
    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    // Return successful response
    return res.status(200).json(data);

  } catch (error) {
    console.error('Error calling Requesty API:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
