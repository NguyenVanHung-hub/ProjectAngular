export interface User{
    id?: number,
    title: string,
    image: string,
    catelogy: string,
    price: number,
    conten:string
}


export interface logInForm{
    gmail: string,
    password: string
}


export interface resgiterInForm{
    name: string,
    tel: number,
    gmail: string,
    password: string,
    confirmPassword:string
}

export interface Product{
    id?: number,
    title: string,
    image: string,
    catelogy: string,
    price: number,
    conten:string
}