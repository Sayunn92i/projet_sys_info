/* ---------------------------------------------------
 * Matrix.java
 * ---------------------------------------------------
 * Matrix of the game board croa
 * ---------------------------------------------------
 * Bardet Jean-Maxime and Frassin Clement
 * ---------------------------------------------------
 * version : 2
 * ---------------------------------------------------
 * DATE : 2022-12-04
 * ---------------------------------------------------
 */

import {layer} from './scene.js';
import { GiveCard } from './GiveCard.js'; 
import { Card } from './Card.js';

 export class Matrix {

    originX = 20;
    OriginY = 20;
    sizeXY = 900;
    pxBetweenCard = 5;
    nbCardWidth = 8;
    nbCardHeight = this.nbCardWidth;//nbCardWidth;

    blindMode = false;
    
    cardMatrix = [this.nbCardHeight];
    

    rect1;

    constructor(){
        this.creatGraphical();
        this.creatMatrix();
    }

    /*
     * @graphic => set the background
     */
    creatGraphical(){
        this.rect1 = new Konva.Rect({
            x: this.originX,
            y: this.OriginY,
            width: this.sizeXY,
            height: this.sizeXY,
            fill: 'green',
            stroke: 'black',
            strokeWidth: 4,
          });

          layer.add(this.rect1);
    }


    /*
     * @return the card size 
     *          -> function of windows size
     *          -> number of card
     */
    getXYCardSize(){
        return (  this.sizeXY - ( this.pxBetweenCard *(this.nbCardHeight + 1) )  ) 
                            / (this.nbCardHeight ); 
    }
    
    /*
     * @param line (or column : since it is a square)
     * @return coordinate x (or y) of the card 
     *          -> function of the line (or the column)
     *          -> function of the size of the board
    */
    getPX(line){
        return parseInt( this.originX + line * this.getXYCardSize() 
                        + this.pxBetweenCard * line + line, 10 ) ; 
    }

    /* 
     * @use class GiveCard
     * Create a new boad game (as a Matrix of card)
     * Class GiveCard 
     *      -> generate card, give card. 
     * @set the attribute : cardMatrix[][]
     *  -> Give a position to each CARD
     *  -> display each CARD
     */
    
    creatMatrix(){
        let cardGiver = new GiveCard();

        // Instanciate an array of array ( a matrix) :
        for (var x = 0 ; x < this.nbCardWidth ;  x++){
            this.cardMatrix[x] = [this.nbCardHeight]
        }
        
        for (let iHeight = 0 ; iHeight < this.nbCardHeight ; iHeight++){
            for (let jWidth = 0 ; jWidth < this.nbCardHeight; jWidth++){
                // pick a card : 
                    this.cardMatrix[iHeight][jWidth] = cardGiver.pickACard();
                // give a position to the new card : 
                    this.cardMatrix[iHeight][jWidth].setPositionOnMatrix(iHeight, jWidth);
                // Display the new card : 
                    this.cardMatrix[iHeight][jWidth].creatGraphicCard(this.getPX(iHeight), this.getPX(jWidth), this.getXYCardSize());
            }
        }
    
    }

    /* 
     * @param x, y (as coordinate)
     * @return arrayOfAccessibleCard
     * Accessible card are card next to 
     * the coordinate x and y except the 
     * card [x,y] it self
     */
    accessibleCard(x, y){
        
        let xStart = 0;
        let xEnd = this.nbCardWidth - 1;
        let yStart = 0;
        let yEnd = this.nbCardHeight -1;

        // Singular position cases : (such as side)
            if (x > 0){ xStart = x-1; }
            if (x < (this.nbCardWidth - 1) ){ xEnd = x+1;}
            if(y > 0 ){ yStart = y - 1; }
            if(y < (this.nbCardHeight -1) ){ yEnd = y +1; }

        // Default = 0 accesible card : 
        let accessibleCard = [];
        
        // feed accesible card :
        for(let xI = xStart ; xI <= xEnd ; xI++){
            for(let yI = yStart ; yI <= yEnd ; yI++){
                if (!(xI == x && yI == y)){       
                    accessibleCard.push(this.cardMatrix[xI][yI]);
                }
            }
        }
        
        return accessibleCard;
    }

}
