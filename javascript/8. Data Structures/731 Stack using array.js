////////✅ Basic Stack Implementation

class Stack{
    constructor(){
        this.items = [];
    }

    //push (add element)
    push(element){
        this.items.push(element);
    }

    //pop (remove top element)
    pop(){
        if(this.isEmpty()) return "Stack is empty";
        return this.items.pop();
    }

    //peek (top elemnt)
    peek(){
        if(this.isEmpty()) return "Stack is empty";
        return this.items[this.items.length - 1];
    }

    // Check if empty
    isEmpty(){
        return this.items.length === 0;
    }

    //size of stack
    size(){
        return this.items.length;
    }

    // Print stack
    print(){
        console.log(this.items);
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

stack.print() // [10, 20, 30]

console.log(stack.peek())  //30
console.log(stack.pop())  //30

stack.print() //[10, 20]



/////🔥 Without Class (Simple Version)
const arrStack = [];

arrStack.push(1);
arrStack.push(2);
arrStack.push(3);

console.log(arrStack.pop());  //3
console.log(arrStack[arrStack.length - 1]) //peek -> 2