import { api } from "./session";



export function getUser(name: string){
    return api<User>('users/${name}')
}

export function addUser(user: User) {
    return api<User>('users', user);
}

export function updateUser(name: string, user: User) {
    return api<User>('users/${name}', user, 'PATCH');
}

export function deleteUser(name: string) {
    return api<{deletedCount:boolean}>('users/${name}', {}, 'DELETE');
}

export interface User {
    name: string
    email: string
    password: string
}