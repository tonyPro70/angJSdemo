export class Deck {
    public success: boolean;
    public deck_id: string;
    public shuffled: boolean;
    public remaining: number;

constructor(success: boolean, deck_id: string, shuffled: boolean, remaining: number) {
    this.success = success;
    this.deck_id = deck_id;
    this.shuffled = shuffled;
    this.remaining = remaining;
    }
}
   