import { Configuration } from "openai";

export const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY ?? '',
})