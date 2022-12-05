import { api } from "./session";

export function getUsers(name: string){
    return api<User>
}

export interface User {
    name: string
    email: string
    password: string
}