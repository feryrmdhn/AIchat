import { Configuration } from "openai";

export const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY ?? '',
})

/*note: REACT_APP_OPENAI_API_KEY must add in setting of hosting e.g Vercel, Heroku, Netlify, other*/