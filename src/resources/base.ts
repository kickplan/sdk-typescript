import fetch, { Response } from 'node-fetch';
import * as dotenv from 'dotenv';

// Load .env file
dotenv.config();

export type KickplanConfig = {
  apiKey?: string;
  baseUrl?: string;
};

export abstract class Base {
  public readonly apiKey: string;
  public readonly baseUrl: string;

  constructor(config?: KickplanConfig) {
    this.apiKey =
      config?.apiKey ||
      process.env.KICKPLAN_API_KEY;

    this.baseUrl =
      config?.baseUrl ||
      process.env.KICKPLAN_BASE_URL;

    if (!this.apiKey) {
      throw new Error("Please supply a KICKPLAN_API_KEY via config object or environment variable");
    }
    if (!this.baseUrl) {
      throw new Error("Please supply a KICKPLAN_BASE_URL via config object or environment variable");
    }
  }

  protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    };
    const config = {
      ...options,
      headers,
    };

    return fetch(url, config)
      .then((response: Response) => {
        return response.text().then((text: string) => {
          if (!response.ok) {
            // Enhanced error message with request details
            throw new Error(
              JSON.stringify({
                status: response.status,
                statusText: response.statusText,
                url: response.url,
                method: config.method || 'GET',
                responseBody: text,
                requestBody: config.body ? JSON.parse(config.body as string) : undefined
              }, null, 2)
            );
          }

          // Some endpoints return empty body
          if (!text) {
            return {} as T;
          }

          try {
            // If we have data, it's JSON
            return JSON.parse(text);
          } catch (parseError) {
            throw new Error(
              JSON.stringify({
                error: 'JSON Parse Error',
                rawResponse: text,
                parseError: parseError instanceof Error ? parseError.message : String(parseError)
              }, null, 2)
            );
          }
        });
      })
      .catch((error: unknown) => {
        // Enhanced error catching with request context
        const errorContext = {
          message: error instanceof Error ? error.message : 'Unknown error',
          endpoint,
          baseUrl: this.baseUrl,
          requestConfig: {
            method: config.method || 'GET',
            body: config.body ? JSON.parse(config.body as string) : undefined
          },
          stack: error instanceof Error ? error.stack : undefined
        };

        throw new Error(JSON.stringify(errorContext, null, 2));
      });
  }
}
