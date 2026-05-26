const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2Zml6dXd6cXlxaHl3cnNwdXZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzNTc2MzEsImV4cCI6MjA5NDkzMzYzMX0.HwSOBI-ko5nkkPruX6Q9Vu7TFiy536EqF0QmchY_Q-c";

const URL = "https://qvfizuwzqyqhywrspuvh.supabase.co/rest/v1";

export async function getGallery() {
  const response = await fetch(`${URL}/gallery`, {
    headers: {
      apikey: API_KEY,
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  return await response.json();
}

export async function getEvents() {
  const response = await fetch(`${URL}/events`, {
    headers: {
      apikey: API_KEY,
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  return await response.json();
}
