export default class LaneModel  {
    constructor(title, items){
        this.title = title || '';
        this.items = items || [];
    }

    // Isomorphic helpers

    static addItem(lane, item){
        return new LaneModel(lane.title, [...lane.items, item]);
    }

    static removeItem(lane, item){
        return new LaneModel(lane.title, lane.items.filter(x => x !== item));
    }

    static changeItem(lane, idx, item){
        return new LaneModel(lane.title, [
            ...lane.items.slice(0, idx),
            item,
            ...lane.items.slice(idx +1)
        ]);
    }

    static swapItems(lane, idxa, idxb){
        return new LaneModel(lane.title, lane.items.map((item, idx) => {
            if (idx === idxa){
                return lane.items[idxb];
            }else if(idx === idxb){
                return lane.items[idxa];
            }else{
                return item;
            }
        }))
    }

}