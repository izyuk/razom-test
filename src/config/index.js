export const API_URL = "http://127.0.0.1:8000";
export const V1 = "/api/v1";

export const user = localStorage.getItem("user");

export class RequestCredentials {
  constructor(token) {
    this.tokenString = token;
  }

  token() {
    return this.tokenString;
  }

  headers() {
    return {
      headers: {
        Authorization: `Bearer ${this.token()}`,
      },
    };
  }
}

// export const token = new Token(localStorage.getItem("token")).token();
