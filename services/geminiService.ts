import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are the digital assistant for "Werkstatt 77", a Swiss Design bureau.
Your personality: Objective, precise, minimalist, and polite.
You prioritize clarity, structure, and function over emotion.
You answer questions about design, grid systems, typography (Helvetica/Akzidenz-Grotesk), and the agency's services.
Keep responses concise and structured. Use bullet points if listing items.
Do not use slang. Do not use exclamation marks unnecessarily.
`;

export const sendMessageToRonin = async (history: {role: string, parts: {text: string}[]}[], userMessage: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.3, // Lower temperature for more deterministic/objective answers
      },
      history: history
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text;
  } catch (error) {
    console.error("Connection Error:", error);
    return "Error: Communication with the server has been interrupted. Please try again.";
  }
};