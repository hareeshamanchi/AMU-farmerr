import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const getAIResponse = async (userMessage) => {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-3.5-turbo",  // You can upgrade to gpt-4
      messages: [
        { role: "system", content: "You are a helpful AI assistant for AMU Farmer." },
        { role: "user", content: userMessage }
      ],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("AI Service Error:", error);
    return "⚠️ Sorry, I couldn’t process your request.";
  }
};
