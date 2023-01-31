/* ---------------------------------------------------
 * Board.java
 * ---------------------------------------------------
 * Main class of Konva/layer
 * ---------------------------------------------------
 * Bardet Jean-Maxime and Frassin Clement
 * ---------------------------------------------------
 * version : 2
 * ---------------------------------------------------
 * DATE : 2022-12-06
 * ---------------------------------------------------
 */

import{Matrix} from './Matrix.js';
import{Family} from './Family.js';

 console.log("ok");
export class Board {
    nbPlayer = 2;
    matrix;
    player = [this.nbPlayer];

    constructor(){
        this.matrix = new Matrix();
        this.player[0] = new Family(this.matrix, this.matrix.cardMatrix[0][0]);
        this.player[1] = new Family(this.matrix, this.matrix.cardMatrix[7][7]);
    }
}
