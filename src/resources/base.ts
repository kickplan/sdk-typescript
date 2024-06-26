import fetch from 'node-fetch';

type Config = {
  apiKey: string;
  baseUrl?: string;
};


export abstract class Base {
  private apiKey: string;
  private baseUrl: string;

  constructor(config: Config) {
    if (!config.apiKey && !process.env.KICKPLAN_API_KEY) {
      throw new Error("Please supply a KICKPLAN_API_KEY to initialize this client.")
    }
    this.apiKey = config.apiKey || process.env.KICKPLAN_API_KEY;
    this.baseUrl = config.baseUrl || process.env.KICKPLAN_BASE_URL || 'https://demo-control.proxy.kickplan.io';
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
      .then((response) => {
        return response.text().then((text) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }

          // Some endpoints return empty body
          if (!text) {
            return {} as T;
          }

          // If we have data, it's JSON
          return JSON.parse(text);

        });
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}
