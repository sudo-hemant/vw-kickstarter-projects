import data from "../frontendAssignment.json";

class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      "Content-Type": "application/json",
    };
  }

  // Helper method to build request options
  #createRequestOptions(method, data, customHeaders = {}) {
    const options = {
      method,
      headers: { ...this.defaultHeaders, ...customHeaders },
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    return options;
  }

  // Helper method to handle API responses
  async #handleResponse(response) {
    const data = await response.json();

    if (!response.ok) {
      throw new Error({
        status: response.status,
        message: data.message || "An error occurred",
        data,
      });
    }

    return data;
  }

  // GET request
  async get(endpoint, customHeaders = {}) {
    try {
      const response = await fetch(
        this.baseURL,
        this.#createRequestOptions("GET", null, customHeaders)
      );
      return await this.#handleResponse(response);
    } catch (error) {
      console.error("GET Request Error:", error);
      throw error;
    }
  }

  // FIXME: remove this
  getTemp() {
    return data;
  }
}

const ApiServiceSingelton = new ApiService(
  "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
);

export default ApiServiceSingelton;
