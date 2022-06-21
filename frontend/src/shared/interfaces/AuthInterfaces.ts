export interface IBodyAuth{
    email: string;
    password: string;
}

export interface Usuario {

        id:        number;
        uuid:      null;
        nome:      string;
        enderecos: any[];
        email:     string;
        senha:     string;
        compras:   any[];
        carrinho:  null;

}