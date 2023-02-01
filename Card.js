import {layer} from './scene.js';

export class Card {
    size;
    coordinateX;
    coordinateY;
    rect;
    imgObjBackCard;
    imgObjFrontCard;
    imgCard;
    frogs;

    posX;
    posY;


    /*
     * @set the default images
     */
    constructor(){
        this.imgObjBackCard = new Image();
        this.imgObjBackCard.src = './imgCard/back_card2.png';
        this.imgObjFrontCard =new Image();
        this.imgObjFrontCard.src = './imgCard/back_card1.png';
    }


    /*
     * @graphic Creat a card on the LAYER 
     *      -> function ox coordinate x, y 
     *      -> function of size
     */
    creatGraphicCard(x, y, size){
        this.coordinateX = x;
        this.coordinateY = y;
        this.size = size;
  
        this.imgCard = new Konva.Image({
            x: this.coordinateX,
            y: this.coordinateY,
            width: this.size,
            height: this.size,
            image: this.imgObjBackCard,
        });

        layer.add(this.imgCard);
    }

    /*
     * @param position x and y
     * @setter of position x, y
     */
    setPositionOnMatrix(x, y){
        this.posX = x;
        this.posY = y;
    }

    /*
     * @graphic change the backImage to the front image
     *      => + annimation
     * @todo -> wait 500ms => not optimal (issue from asyncron paradigm)
     */
    flipCard(){
        let originalY = this.imgCard.y();
        let originalHeight = this.imgCard.height();
        
        // @annim -> resize image : y height almost to 0 
        this.imgCard.to({
            height: 3,
            y: this.imgCard.y() + this.imgCard.height()/2,
        });
        
        // @annim -> wait the end of resize
        setTimeout(() => { 
            this.imgCard.image(this.imgObjFrontCard);    
            // @annim -> resize image :      
            this.imgCard.to({
                height: originalHeight, 
                y: originalY,});
            }, 
            500);
    }

    /*
     * @return coordinate where to place 
     *               the frog on THIS card 
     */
    getPositionOfFrog(){
        return {x:this.coordinateX+(this.size/2), y: this.coordinateY +(this.size/2)};
    }
    
    addFrog(frog){
        this.frogs.push(frog);
    }

    removeFrog(frog){
        this.frogs = arrayRemove(this.frogs, frog);
    }

    /*
     *  @param cor coordinate of the frog
     *  @return boolean :
     *      -> TRUE if colision 
     *      -> FALSE if no colision
     */
    colision(cor){
        return ( 
            cor.x >  this.imgCard.x() && 
            cor.x < (this.imgCard.x() + this.imgCard.width()) &&
            cor.y >  this.imgCard.y() && 
            cor.y < (this.imgCard.y() + this.imgCard.height())
            )
    }


}


/*
 * @class : Male, Reed... are subclass of card
 *      -> each card have a different front image
 */
export class Male extends Card {
    constructor(){
        super();
        this.imgObjFrontCard =new Image();
        this.imgObjFrontCard.src = './imgCard/frog_bleu.png';
    }
    
}

export class Reed extends Card {
    constructor(){
        super();
        this.imgObjFrontCard =new Image();
        this.imgObjFrontCard.src = './imgCard/reed.png';
    }
    
}

export class Mud extends Card {
    constructor(){
        super();
        this.imgObjFrontCard =new Image();
        this.imgObjFrontCard.src = './imgCard/mud.png';
    }
    
}

export class badFish extends Card {
    constructor(){
        super();
        this.imgObjFrontCard =new Image();
        this.imgObjFrontCard.src = './imgCard/brochet.png';
    }
    
}

export class Mosquito extends Card {
    constructor(){
        super();
        this.imgObjFrontCard =new Image();
        this.imgObjFrontCard.src = './imgCard/mosquito.png';
    }
    
}

export class Wood extends Card {
    constructor(){
        super();
        this.imgObjFrontCard =new Image();
        this.imgObjFrontCard.src = './imgCard/wood.png';
    }
    
}

export class Nenuphar extends Card {
    constructor(){
        super();
        this.imgObjFrontCard =new Image();
        this.imgObjFrontCard.src = './imgCard/nenuphar.png';
    }
    
}



function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}