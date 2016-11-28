import { Card } from "./card.model";


export class CardService {
    private cards: CardService [] = [
       {image: "https://deckofcardsapi.com/static/img/8C.png", value: "8", suit: "CLUBS", code: "8C"},
       {image: "https://deckofcardsapi.com/static/img/KH.png", value: "KING", suit: "HEARTS", code: "KH"},

    ];

   

    getCards() {
        return this.cards;
    }

    
}