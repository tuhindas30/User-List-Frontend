import { API_BASE_URL, logError } from "./helper";
import { Visitor, VisitorResponse } from "../types/visitor.types";

export const getUsers = async (
  page: number
): Promise<VisitorResponse<Visitor>> => {
  try {
    const response = await fetch(`${API_BASE_URL}?page=${page}`);
    const jsonData: VisitorResponse<Visitor> = await response.json();
    return jsonData;
  } catch (error: any) {
    logError(error);
    throw new Error(error.message);
  }
};
