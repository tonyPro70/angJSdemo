export class Card {
    public image: string;
    public value: string;
    public suit: string;
    public code: string;

constructor(image: string, value: string, suite: string, code: string) {
    this.image = image;
    this.value = value;
    this.suit = suite;
    this.code = code;
    }
}
   