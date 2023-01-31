/* ---------------------------------------------------
 * Family.java
 * ---------------------------------------------------
 * family of frog
 * ---------------------------------------------------
 * Bardet Jean-Maxime and Frassin Clement
 * ---------------------------------------------------
 * version : 2
 * ---------------------------------------------------
 * DATE : 2022-12-04
 * ---------------------------------------------------
 */

import { Matrix } from "./Matrix.js";
import {layer } from './scene.js';

export class Family{
    matrix;
    coordinateCard;
    lastCoordinate;
    frogShape;
    cardOccupied;

    /*
     * @paaram matrix, cardOccupied
     *      -> matrix of card
     *      -> frog will be place on cardOccupied
     * @grapic : creatToken
     */
    constructor(matrix, cardOccupied){
        this.matrix = matrix;
        this.cardOccupied = cardOccupied;
        this.createToken(cardOccupied.getPositionOfFrog());
    }

    /*
     * @param coordinate{x,y}
     *      -> x, y = position of the frog
     * @grapic : frog is create on the layer
     */
    createToken(coordinates){

        let imgObjFrog = new Image();
        imgObjFrog.src = './imgCard/frog1Mother.png';

        this.frogShape = new Konva.Image({
            x: coordinates.x,
            y: coordinates.y,
            width: 50,
            height: 50,
            image: imgObjFrog,
            draggable: true,
            elmt:this,
          });
    
          // add the shape to the layer
          layer.add(this.frogShape);
          this.listenEvent();
          
    }

    listenEvent(){
        // store last position 
        this.lastCoordinate = { x : this.frogShape.x(), y : this.frogShape.y()};

        this.frogShape.on('dragend', (e) => this.colision(e));

    }
    colision(e){
        let allowedCards = this.matrix.accessibleCard(this.cardOccupied.posX, this.cardOccupied.posY);
        this.coordinateCard = {x: this.frogShape.x(), y: this.frogShape.y()};

        for (let card of allowedCards){
            if (card.colision(this.coordinateCard) == true){
                card.flipCard();

                // change the cuurent card 
                this.cardOccupied = card;

                //reposition the frog 
                this.frogShape.x(card.getPositionOfFrog().x);
                this.frogShape.y(card.getPositionOfFrog().y);

                break;
            }
        }

    }
}