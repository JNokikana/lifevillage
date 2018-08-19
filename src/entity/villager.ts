import Entity from './entity';
import Nameable from '../component/nameable';
import Placeable from '../component/placeable';

interface IConstructor {
    name: string,
    x?: number,
    y?: number
}

export default class Villager extends Entity {
    constructor(params: IConstructor) {
        super("villager");
        this.getComponents().push(new Nameable(params.name));
        this.getComponents().push(new Placeable({
            x: params.x || 0,
            y: params.y || 0
        }));
    }
}