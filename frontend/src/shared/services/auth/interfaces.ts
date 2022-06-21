import { IBodyAuth, Usuario } from "../../interfaces";

export interface IAuth{
    login: ({email,password}:IBodyAuth) => Promise<Usuario>;
};