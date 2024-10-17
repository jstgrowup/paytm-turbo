import axios, { AxiosInstance } from "axios";

interface ApiResponse {
  data: any;
}

export class ApiClient {
  private client: AxiosInstance;
  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL: baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async get(endpoint: string): Promise<any> {
    try {
      return this.client.get<ApiResponse>(endpoint);
    } catch (error) {
      return error;
    }
  }

  async post(endpoint: string, requestData: any): Promise<any> {
    try {
      return this.client.post<ApiResponse>(endpoint, requestData);
    } catch (error) {
      return error;
    }
  }

  async put(endpoint: string, requestData: any): Promise<any> {
    try {
      return this.client.put<ApiResponse>(endpoint, requestData);
    } catch (error) {
      return error;
    }
  }

  async delete(endpoint: string): Promise<any> {
    try {
      return await this.client.delete<ApiResponse>(endpoint);
    } catch (error) {
      return error;
    }
  }
}
