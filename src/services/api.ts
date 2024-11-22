import axios from "axios";
import { User, Role } from "../types";

const API_URL = "http://localhost:3001";

export const api = {
  // User endpoints
  async getUsers() {
    const response = await axios.get<User[]>(`${API_URL}/users`);
    return response.data;
  },

  async createUser(user: Omit<User, "id">) {
    const response = await axios.post<User>(`${API_URL}/users`, user);
    return response.data;
  },

  async deleteUser(id: string) {
    await axios.delete(`${API_URL}/users/${id}`);
  },

  // Role endpoints
  async getRoles() {
    const response = await axios.get<Role[]>(`${API_URL}/roles`);
    return response.data;
  },

  async createRole(role: Omit<Role, "id">) {
    const response = await axios.post<Role>(`${API_URL}/roles`, role);
    return response.data;
  },

  async deleteRole(id: string) {
    await axios.delete(`${API_URL}/roles/${id}`);
  },
};