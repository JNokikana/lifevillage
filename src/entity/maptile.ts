import Entity from './entity';
import Nameable from '../component/nameable';
import Placeable from '../component/placeable';

interface IConstructor {
    x: number,
    y: number
}

export default class MapTile extends Entity {
    constructor(params: IConstructor) {
        super("maptile");
        this.getComponents().push(new Placeable({
            x: params.x,
            y: params.y
        }));
    }
}