"use strict";
let count = 0;
count += 1;
// count = "에러";
const message = "hello world";
const done = true;
const numbers = [1, 2, 3];
const messages = ["hello", "world"];
let mightBeUndefined = undefined;
let nullableNumber = null;
let color = "red";
color = "orange";
function sum(x, y) {
    return x + y;
}
sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}
sumArray([1, 2, 3]);
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach((shape) => {
    console.log(shape.getArea());
});
const person = {
    name: "김사람",
    age: 20,
};
const expert = {
    name: "김개발",
    skills: ["js", "react"],
};
const people = [person, expert];
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 1 });
function wrap(param) {
    return {
        param,
    };
}
const wrapped = wrap(10);
const items = {
    list: ["a", "b"],
};
const items2 = { list: [] };
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
