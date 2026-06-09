import { TimerBehaviour } from "./index.js";
import { Node } from "../index.js";
import { Behaviour } from './index.js';
import { Item } from "../../engine/Item.js";

/*
 * will terminate all active nodes as a result of terminate end event
 * 
 */
class TerminateBehaviour extends Behaviour {
    start(item: Item) { }
    end(item: Item) {

        item.token.execution.tokens.forEach(tok => {
            tok.terminate();
            });
    }
    describe() {
        return [['','Terminates all active nodes']];
    }
}

export { TerminateBehaviour }