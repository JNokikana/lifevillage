export default abstract class Entity{
    private id : string;
    private components : Array<any> = []

    constructor(id: string){
        this.id = id;
    }
    getComponents(){
        return this.components;
    }
    getId(){
        return this.id;
    }
}