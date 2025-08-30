export interface User {
  id: number;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserRequest {
  email: string;
  name: string;
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
}
