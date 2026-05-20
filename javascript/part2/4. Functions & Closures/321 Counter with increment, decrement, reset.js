//✅ Basic Counter (Closure)

function createCounter(initial = 0){
    let count = initial;

    return {
        increment(){
            count++;
            return count;
        },

        decrement(){
            count--;
            return count;
        },

        reset(){
            count = 0;
            return count;
        }
    }
}

let counter = createCounter(5);

console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());


///////✅ Class Version

class Counter{
    constructor(initial = 0){
        this.initial = initial;
        this.count = initial;
    }

    increment(){
        return ++this.count;

        // or 

        // this.count++;
        // return this.count;
    }

    decrement(){
        return --this.count;

        // or

        // this.count--;
        // return this.count;
    }

    reset(){
        this.count = 0;
        return this.count;
    }
}

const c = new Counter(5);
console.log(c.increment());
console.log(c.decrement());
console.log(c.reset());