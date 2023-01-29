import { OpenAIApi } from "openai";

export interface GlobalTypes {
    id?: number;
    name?: string;
    status?: boolean;
    openai: OpenAIApi;
}