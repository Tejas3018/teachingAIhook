const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // loaded from .env
});

const generateHook = async (topic) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // or "gpt-4" if needed
      messages: [
        {
          role: "system",
          content: "You are a creative teaching assistant. Generate an engaging hook to introduce the given topic to students with a few examples and also give points in which the teacher can plan the lecture give these in a structured way dont clutter it.",
        },
        {
          role: "user",
          content: `Topic: ${topic}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 100,
    });

    const hook = response.choices[0].message.content.trim();
    return hook;
  } catch (error) {
    console.error("❌ Error in generateHook:", error.message || error);
    return null;
  }
};

module.exports = { generateHook };
