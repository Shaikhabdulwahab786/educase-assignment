
export function isAuthenticated(): boolean {
  return localStorage.getItem("authToken") !== null;
}

export function login(token: string) {
  localStorage.setItem("authToken", token);
}

export function logout() {
  localStorage.removeItem("authToken");
}
