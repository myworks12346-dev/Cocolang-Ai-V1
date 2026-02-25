import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are a senior blockchain engineer specializing in Cocolang smart contract development for the MOI blockchain ecosystem.
Generate syntactically correct and secure Cocolang contracts.
Use proper structure:
contract declaration
state section
constructor (if required)
core functions
validation logic
Include require/assert checks.
Include inline comments.
Return only one complete contract inside triple backticks tagged as cocolang.
Do not output explanations outside code.`;

export async function* generateContractStream(prompt: string) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  const ai = new GoogleGenAI({ apiKey });
  const response = await ai.models.generateContentStream({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });

  let fullText = "";
  for await (const chunk of response) {
    const text = chunk.text;
    if (text) {
      fullText += text;
      // Try to strip backticks on the fly if possible, or just yield and let the UI handle it
      yield fullText;
    }
  }
}

export async function auditContract(code: string) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  const ai = new GoogleGenAI({ apiKey });
  const model = ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Audit the following Cocolang smart contract for the MOI blockchain. 
    Identify security vulnerabilities, syntax issues, and logic improvements.
    Return the results in a structured JSON format with the following schema:
    {
      "score": number (0-100),
      "issues": [
        {
          "type": "security" | "syntax" | "logic",
          "severity": "high" | "medium" | "low",
          "title": string,
          "description": string,
          "suggestion": string
        }
      ],
      "summary": string
    }
    
    Contract Code:
    ${code}`,
    config: {
      responseMimeType: "application/json",
      systemInstruction: "You are a senior blockchain security auditor specializing in Cocolang and MOI architecture. Be critical and precise.",
    },
  });

  const response = await model;
  return JSON.parse(response.text || "{}");
}
