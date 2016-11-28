import { Collectable } from "./collectable.model";

export class CollectableService {
    private collectables: Collectable[] = [
        {description: 'Philadelphia Eagles Jersey', type: 'Clothing'},
        {description: 'Philadelphia Eagles Jacket', type: 'Clothing'},
        {description: 'Philadelphia Eagles Socks', type: 'Clothing'},
        {description: 'Philadelphia Eagles Flag', type: 'Home'},
        {description: 'Philadelphia Eagles Sunglasses', type: 'Accessories'},
        {description: 'Philadelphia Eagles Key Fob', type: 'Accessories'}

    ];

    private collection: Collectable[] = [];

    getCollectables() {
        return this.collectables;
    }

    getCollection() {
        return this.collection;
    }
//Add
    addToCollection(item: Collectable) {
        if (this.collection.indexOf(item) !== -1){
            return;
        }
        this.collection.push(item);
    }
//Remove
    removeFromCollection(item: Collectable) {
        this.collection.splice(this.collection.indexOf(item), 1);
    }
}