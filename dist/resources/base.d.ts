export type KickplanConfig = {
    apiKey?: string;
    baseUrl?: string;
};
export declare abstract class Base {
    readonly apiKey: string;
    readonly baseUrl: string;
    constructor(config?: KickplanConfig);
    protected request<T>(endpoint: string, options?: RequestInit): Promise<T>;
}
