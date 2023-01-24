import {Card, Male, Reed, Mud, badFish, Mosquito, Wood, Nenuphar} from './Card.js';

export class GiveCard{   
    // male, reed, mud, badFish, mosquito, wood, jump
    nbCardPerType = [12, 16, 4, 4, 8, 6, 14 ];
    mixCard = [0];
    curssorIndice = 0;
    
    /*
     * @set mixCard 
            -> mixCard is an array of 64 i (integer)
            -> i between 0 and 6
            -> i is the id of the card
     */
    constructor(){
        // feed the card array (mixCard)
        for (let i = 0 ; i <= this.nbCardPerType.length ; i++){
            for(let j = 0 ; j < this.nbCardPerType[i]; j++ ){
                //splice the card into mixCard (array)
                //Randomness is done on the indice of insertion
                // i (id of the card) added to mixCard
                this.mixCard.splice( getRandomInt(this.mixCard.length), 
                                    0, i);
            }
        }
    }

    /*
     * @return : a card 
     *      -> function of the cursor
     *      -> the id at the indice of cursor
     * Increment 1 of the cursor
     */
    pickACard(){
        let newCard;
        switch(this.mixCard[this.curssorIndice]){
            case 0 : // Male
                newCard = new Male();
            break;
            case 1 : // reed
                newCard = new Reed();
            break;
            case 2 : // mud
                newCard = new Mud();
            break;
            case 3 : // badFish
                newCard = new badFish();
            break;
            case 4 : // mosquito
                newCard = new Mosquito();
            break;
            case 5 :   //wood
                newCard = new Wood();
            break;
            case 6 : //nenuphar
                newCard =  new Nenuphar();
            break;
            default : 
                newCard = new Card();
            
        }
        this.curssorIndice++;
        return newCard;
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
