import { Card } from "./card.model";
import { CardService } from "./card.model";
import { Deck } from "./deck.model";
export class DeckService {
    private deck: CardService [] = [
        {success: 'true', deck_id: "3p40paa87x90", shuffled: true, remaining: 52}
    ];

    private cards: CardService[] = [];

    getShuffle() {
        //Dealer shuffles deck on each new hand of gameplay
        //JSONP https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
        return this.deck;
    }

    getDraw() {
        //Dealer draws 1 card on init
        //Deal draws 1 new card after user places "bet"
        //User selects "deal"
        return this.cards;
    }
//Access
    totalValues(item: CardService) {
        this.cards.splice(this.cards.indexOf(item), 1);
    }
    evaluateHand(item: CardService) {
        //Get card.value of displayed cards
        //store card "values"
        //compare if A>B Dealer Wins if A<B User wins  use *ngSwitch
        if (this.cards.indexOf(item) !== -1){
            return;
        }
        this.cards.push(item);
    }
//new game
    //Clear board view
    //dealer deals 1 card from newly shuffled deck
}