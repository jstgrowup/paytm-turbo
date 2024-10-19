import axios, { AxiosInstance } from "axios";

export class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async get(endpoint: string) {
    try {
      const response = await this.client.get(endpoint);
      return response.data;
    } catch (error) {
      console.error("Error in GET request:", error);
      return null;
    }
  }

  async post(endpoint: string, data: any) {
    try {
      const response = await this.client.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error("Error in POST request:", error);
      return null;
    }
  }

  async put(endpoint: string, data: any) {
    try {
      const response = await this.client.put(endpoint, data);
      return response.data;
    } catch (error) {
      console.error("Error in PUT request:", error);
      return null;
    }
  }

  async delete(endpoint: string) {
    try {
      const response = await this.client.delete(endpoint);
      return response.data;
    } catch (error) {
      console.error("Error in DELETE request:", error);
      return null;
    }
  }
}
