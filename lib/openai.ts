import OpenAI from "openai";



const openai = new OpenAI({
  baseURL:'https://openrouter.ai/api/v1/chat/completions',
  apiKey: process.env.OPENAI_API_KEY,
  
});

export default openai;