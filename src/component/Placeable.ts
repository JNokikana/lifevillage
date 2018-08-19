interface IConstructor{
    x: number,
    y: number
}

export default class Placeable {
    public x: number = 0;
    public y: number = 0;
    
    constructor(params: IConstructor){
        this.x = params.x;
        this.y = params.y;
    }
}