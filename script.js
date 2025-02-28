import OpenAI from "openai";

// Fetch GitHub PAT from environment variables or replace it with a valid token
const token = process.env["GITHUB_TOKEN"]; // Ensure this is set in your environment

async function runModel() {
    try {
        const client = new OpenAI({
            baseURL: "https://models.inference.ai.azure.com",
            apiKey: token
        });

        const response = await client.chat.completions.create({
            messages: [
                { role: "system", content: "You are an AI assistant." },
                { role: "user", content: "What is the capital of Sri Lanka?" }
            ],
            model: "gpt-4o",
            temperature: 1,
            max_tokens: 4096,
            top_p: 1
        });

        document.getElementById("response").innerText = response.choices[0].message.content;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("response").innerText = "An error occurred. Check the console.";
    }
          }
