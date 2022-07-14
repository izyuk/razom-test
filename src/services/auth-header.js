export const authHeader = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
      mode: "cors",
    };
  }
};
