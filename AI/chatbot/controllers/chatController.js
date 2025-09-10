import { getAIResponse } from "../services/aiService.js";

export const handleChat = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const aiReply = await getAIResponse(message);
    res.json({ reply: aiReply });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
};
