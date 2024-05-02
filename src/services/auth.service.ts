import http from "../http";

export const loginUser = (username: string, password: string) => {
  const response = http.post("/auth/login", {
    username: username,
    password: password,
  });

  return response;
};
