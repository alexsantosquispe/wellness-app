import type { SessionType } from "../models/types";
import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://6912ad5c52a60f10c8224b12.mockapi.io/api",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 3000
});

export const getSessions = async (): Promise<SessionType[]> => {
  const response = await apiClient.get("/sessions");
  return response.data;
};

export const getSessionById = async (id: string): Promise<SessionType> => {
  const response = await apiClient.get(`/sessions/${id}`);
  return response.data;
};
