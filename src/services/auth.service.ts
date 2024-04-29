import http from "../http";

export const loginUser = (username: string, password: string) => {
  const response = http.post("/auth/login", {
    username: username,
    password: password,
  });

  return response;
};

export const fetchUser = async () => {
  const response = await http.get("/auth/me");
  return response.data;
};
