interface IConstructor{
    horny: number,
    hunger: number,
    thirst: number
}

export default class Needs {
    public horny: number;
    public hunger: number;
    public thirst: number;
    
    constructor(params: IConstructor){
        this.horny = params.horny;
        this.hunger = params.hunger;
        this.thirst = params.thirst;
    }
}