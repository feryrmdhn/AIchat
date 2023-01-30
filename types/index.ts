export interface OpenAIResponse {
    id?: number;
    data: ApiResponse;
}

export interface ApiResponse {
    choices: Array<string | any>;
    created: number;
    model: string;
    object: string;
    usage?: number | string | any;
}