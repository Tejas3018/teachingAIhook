const { generateHook } = require("../services/aiService");

const generateHookController = async (req, res) => {
  try {
    const { topic } = req.body;

    if (!topic) {
      return res.status(400).json({ error: "Topic is required" });
    }

    const hook = await generateHook(topic);

    if (!hook) {
      return res.status(500).json({ error: "AI failed to generate hook." });
    }

    res.status(200).json({ hook });
  } catch (error) {
    console.error("Hook generation error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { generateHookController }; // ✅ Correct export
