import Entity from './entity';
import Nameable from '../component/nameable';
import Placeable from '../component/placeable';
import Moving from '../component/moving';
import Health from '../component/health';
import Needs from '../component/needs';

interface IConstructor {
    name: string,
    x: number,
    y: number,
    speed: number,
    hitpoints: number,
    horny?: number,
    thirst?: number,
    hunger?: number
}

export default class Villager extends Entity {
    constructor(params: IConstructor) {
        super("villager");
        this.getComponents().push(new Nameable(params.name));
        this.getComponents().push(new Placeable({
            x: params.x,
            y: params.y
        }));
        this.getComponents().push(new Moving(params.speed));
        this.getComponents().push(new Health(params.hitpoints));
        this.getComponents().push(new Needs({
            horny: params.horny || 0,
            thirst: params.thirst || 0,
            hunger: params.hunger || 0
        }));
    }
}