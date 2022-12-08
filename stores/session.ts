import { computed, reactive } from "vue";

const session = reactive ({
    user: null as User | null,
    loading: 0,
    error: null as string | null,
    messages: [] as Message[],
});
export default session;

export function setError(error: string | null) {
    session.error = error;
    if(error){
        session.messages.push({ type: 'danger', text: error});
    }
}

export const isLoading = computed(() => !! session.loading);

export async function api<T>(url: string, data: any = null, method?: string ){
    session.loading++;
    setError(null);
    try {
        return await myFetch<T>(url, data, method);
    } catch (error:any) {
        setError(error.message ?? error as string);
        throw error;
    }finally{
        session.loading--;
    }
    return {} as T;
}

export function login(name: string, email: string, password: string) {
    session.user = {
       name,
       email,
       password,
    };
}

export function signup(name: string, handle: string, email: string, password: string) {
    session.user = {
        name,
        handle,
        email,
        password,
    }
}

export function logout(){
    session.user=null;
}

export interface User{
    name: string;
    handle: string;
    email: string;
    password: string;
}

export interface AddUserInfo{
    firstName: string;
    lastName: string;
    handle: string;
    email: string;
}

export function addInfo(firstName: string, lastName: string, handle: string, email: string){
    session.user = {
        firstName,
        lastName,
        handle,
        email,
    }
}

export interface Message {
    text: string;
    type: 'danger' | 'warning' | 'success' | 'info';
}