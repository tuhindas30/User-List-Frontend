export const API_BASE_URL = "https://reqres.in/api/users";

export const logError = (error: any) => {
  if (process.env.NODE_ENV === "development") {
    console.log(error);
  }
};
