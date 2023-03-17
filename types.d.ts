export interface Nigga{
    name: string;
    age: number;
}

// typescript interface Speaker that has name and company as a characterstic
export interface Speaker{   
    name: string
    company: string
}
 
export interface presentation{
    name: string,
    time: string,
    tag: string,
    loc: string,
    desc: string,
    lmtSeat?: boolean,
    src:string
    comp?:string
}