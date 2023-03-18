// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// const { Configuration, OpenAIApi } = require("openai");
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-x75sN1dDKqOx7yLB1pqgrXQb",
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    const completion = await openai.createCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            //{ role: "system", content: "You are a helpful assistant." },
            { role: "user", content: "Please give me only two words. One word is 'Horse', the other one is chosen by you." },
        ],
        temperature: 0.7,
    });
    const answer = completion.data.choices[0].content;
    console.log(completion);
    // const data = {
    //     model: "gpt-3.5-turbo",
    //     messages: [{ role: "user", content: "Why is the inner core of the earth solid and the outer fluid? Respond in the shortest way possible." }],
    //     temperature: 0.7,
    // };
    // const response = await fetch("https://api.openai.com/v1/chat/completions", {
    //     method: "POST",
    //     headers: {
    //         "content-type": "application/json",
    //         authorization: "Bearer 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",
    //     },
    //     body: JSON.stringify(data),
    // });
    // console.log(response.body.stream);
    res.status(200).json({ answer: "yep" });
}
