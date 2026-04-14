class Queue{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        
    }

    isEmpty(){
        this.items.length === 0;
    }

    print(){
        console.log(this.items);
    }
}
const queue = new Queue();