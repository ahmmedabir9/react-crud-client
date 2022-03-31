import { postApi } from "./api/index";

export const CreateUser = (data) => postApi(`user/create-user`, data);
export const GetAllUsers = (data) => postApi(`user/get-all-users`, data);
