
export type contactType = {
    name : string,
    f_name : string,
    cnic : number,
    registration:number,
    Identity :string,
    email:string,
    phone:number,
    address : string,
    zipcode : number,
    message:string
}

export type onChangeEventType = {
    target : {value : string, name : string}
}